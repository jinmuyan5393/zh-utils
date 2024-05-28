import { defineConfig, DefaultTheme } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

import sidebar from '../side-bar';
import navbar from '../nav-bar';

const defaultSidebar = [
  {
    text: '指南',
    items: [
      { text: '快速开始', link: '/guide/' },
      { text: '创建函数', link: '/guide/devFunction' },
      { text: '贡献', link: '/guide/contribution' },
    ],
  },
];

const docsSidebar = [...defaultSidebar, ...sidebar];

const guideNavbar = [{ text: '指南', items: [{ text: '快速开始', link: '/guide/' }] }];

const navbarModules = navbar.map((module: DefaultTheme.NavItemWithLink) => {
  return {
    text: `${module.text} 函数`,
    link: module.link,
  };
});

const docsNavbar = [...guideNavbar, { text: '函数模块', items: navbarModules }];

export default defineConfig({
  base: '/',
  title: '@zhonghe/utils',
  description: 'Integrate a collection of common tools and methods',
  lastUpdated: true,
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  themeConfig: {
    nav: docsNavbar,
    sidebar: docsSidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/jinmuyan5393/zh-utils' }],
    search: {
      provider: 'local',
    },
    outline: {
      label: '大纲',
      level: [2, 3],
    },
    lastUpdatedText: 'Last updated',
  },
});

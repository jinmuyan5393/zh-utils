import { defineConfig, DefaultTheme } from 'vitepress';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';

import sidebar from '../side-bar';
import navbar from '../nav-bar';

const defaultSidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'Get Started', link: '/guide/' },
      { text: 'Create Function', link: '/guide/devFunction' },
      { text: 'Contribution', link: '/guide/contribution' },
    ],
  },
];

const docsSidebar = [...defaultSidebar, ...sidebar];

const guideNavbar = [{ text: 'Guide', items: [{ text: 'Get Started', link: '/guide/' }] }];

const navbarModules = navbar.map((module: DefaultTheme.NavItemWithLink) => {
  return {
    text: `${module.text} Functions`,
    link: module.link,
  };
});

const docsNavbar = [...guideNavbar, { text: 'Modules', items: navbarModules }];

export default defineConfig({
  base: '/',
  title: 'zh-jsutil',
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

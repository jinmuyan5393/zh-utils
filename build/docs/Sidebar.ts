import { writeFileSync } from 'fs';
import { getAbsolutePath } from '../utils';
import buildFunction from './common';

interface VitepressSidebar {
  text: string;
  link?: string;
  items?: { text: string; link: string }[];
}

const buildSidebar = async () => {
  const { browserFunctionsArrays } = await buildFunction();

  /**
   * 生成Browser模块侧边栏
   */
  const generateBrowserSidebar = async () => {
    const generateSidebar: VitepressSidebar[] = [];
    for (const key in browserFunctionsArrays) {
      const SidebarItem: VitepressSidebar = { text: '', items: [] };
      SidebarItem.text = `${key.replace(key[0], key[0].toUpperCase())} Functions`;
      SidebarItem.items = browserFunctionsArrays[key].map((name) => ({
        text: name,
        link: `/${key}/${name}/`,
      }));
      generateSidebar.push(SidebarItem);
    }

    return generateSidebar;
  };

  const browserSidebar = await generateBrowserSidebar();
  const allSidebar = [...browserSidebar];

  // 生成文档侧边栏
  await writeFileSync(
    getAbsolutePath('../docs/side-bar.ts'),
    `export default JSON.parse('${JSON.stringify(allSidebar)}')`,
    {
      encoding: 'utf8',
    },
  );
};

buildSidebar();

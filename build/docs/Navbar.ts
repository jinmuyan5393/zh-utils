import { writeFileSync } from 'fs';
import { getAbsolutePath } from '../utils';
import buildFunction from './common';

interface VitepressNavBar {
  text: string;
  link?: string;
  items?: { text: string; link: string }[];
}

const generateNavBar = async () => {
  const { browserAllDirectory, browserFunctionsArrays } = await buildFunction();

  const allNavbar: VitepressNavBar[] = [];
  const allFunctionArrays = { ...browserFunctionsArrays };
  const allDirectory = [...browserAllDirectory];
  allDirectory.forEach((module) => {
    const generateItem: VitepressNavBar = { text: '', link: '' };
    generateItem.text = `${module.replace(module[0], module[0].toUpperCase())}`;
    generateItem.link = `/${module}/${allFunctionArrays[module][0]}/`;
    allNavbar.push(generateItem);
  });

  // 生成文档顶部栏
  await writeFileSync(
    getAbsolutePath('../docs/nav-bar.ts'),
    `export default JSON.parse('${JSON.stringify(allNavbar)}')`,
    {
      encoding: 'utf8',
    },
  );
};

generateNavBar();

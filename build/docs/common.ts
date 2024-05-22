/* eslint-disable no-unused-vars */

import { readdirSync, readFileSync } from 'fs';
import { getAbsolutePath, isFile, isDirectory } from '../utils';

const modulePath = getAbsolutePath('../src');

let browserAllDirectory: string[] = [];

export default async () => {
  const browserFunctionsArrays: Record<string, string[]> = {};

  // src 模块下所有的目录名称
  browserAllDirectory = readdirSync(modulePath).filter((name) => {
    const filePath = `${modulePath}/${name}`;
    if (!isFile(filePath) && isDirectory(filePath)) {
      return filePath;
    }
  });

  // 读取 src 模块下的 index.ts 文件提取出所有被导出的钩子函数
  browserAllDirectory.forEach((directory) => {
    const hookIndexPath = `${modulePath}/${directory}/index.ts`;
    const fileContent = readFileSync(hookIndexPath, { encoding: 'utf8' });
    const functionRegExp = /export { default as (\w*) } from '(.*)'/g;
    const functionImportCode = fileContent.match(functionRegExp)?.filter(
      () =>
        // if (importCode === "export { default as __template__ } from '../__template__'") return false
        true,
    );
    const functions =
      functionImportCode?.map((importCode) => {
        const importRegExp = importCode.match(functionRegExp);
        return RegExp.$1;
      }) || [];

    browserFunctionsArrays[directory] = functions;
  });

  return {
    browserAllDirectory,
    browserFunctionsArrays
  };
};

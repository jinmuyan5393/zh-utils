import { readdirSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { getAbsolutePath, isFile, isDirectory } from '../utils';

/**
 * 构建生成Browser模块入口文件
 */
const buildEntryFile = async () => {
  const packagesAbsolutePath = getAbsolutePath('../src');

  const resultFiles = readdirSync(packagesAbsolutePath);
  // 过滤所有文件
  const directories = resultFiles.filter((filePath) => {
    const fileAbsolutePath = `${packagesAbsolutePath}/${filePath}`;

    if (!isFile(fileAbsolutePath) && isDirectory(fileAbsolutePath)) return true;
    return false;
  });

  const entryPath = `${packagesAbsolutePath}/index.ts`;

  // 删除原有的入口文件
  if (existsSync(entryPath)) unlinkSync(entryPath);
  writeFileSync(entryPath, '// Tip: 文件由 build:entry 脚本生成\r', { encoding: 'utf-8' });
  // 新建并且追加内容到入口文件中
  directories.forEach((moduleName) => {
    writeFileSync(entryPath, `export * from './${moduleName}'\n`, {
      encoding: 'utf8',
      flag: 'a',
    });
  });
};

const init = async () => {
  await buildEntryFile();
};

init();

/*
 * @Description:
 * @Author: jinmuyan
 * @LastEditTime: 2024-05-18 15:11:02
 */
import { execSync } from 'child_process';

/**
 * 代码格式化
 */
const codeFormatting = () => {
  execSync('npx prettier --write src/**/*.ts', { stdio: 'inherit' });
};

/**
 * 构建文档相关入口文件
 */
const buildDocs = async () => {
  await execSync('npx esno ./build/docs/Sidebar.ts', { stdio: 'inherit' });
  await execSync('npx esno ./build/docs/Navbar.ts', { stdio: 'inherit' });
  await execSync('npx esno ./build/docs/Version.ts', { stdio: 'inherit' });
};

export const dev = async () => {
  await codeFormatting();
  await execSync('cross-env NODE_ENV=dev tsup --watch', { stdio: 'inherit' });
};

export const build = async () => {
  await codeFormatting();
  await execSync('cross-env NODE_ENV=build tsup', { stdio: 'inherit' });
};

export const docsDev = async () => {
  await buildPackage();
  await buildDocs();
  await codeFormatting();
  await execSync('pnpm run --filter=docs dev', { stdio: 'inherit' });
};

export const release = async () => {
  await execSync('npx esno ./build/release.ts', { stdio: 'inherit' });
};

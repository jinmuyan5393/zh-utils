# @zhonghe/utils

<img src="https://img.shields.io/npm/v/@zhonghe/utils?style=plastic&logo=npm&label=@zhonghe/utils&link=https://www.npmjs.com/package/@zhonghe/utils" alt="@zhonghe/utils" style="margin-top: 10px" />

## ⛳ Introduction

[@zhonghe/utils](https://shenjianaa.github.io/)是一个集成业务中常用的工具函数库。集成封装常用业务函数库，可以极大程度上的提高开发者的效率。

## 📦 Installation

```bash
npm install @zhonghe/utils

yarn add @zhonghe/utils

pnpm add @zhonghe/utils
```

## 链接

- [文档](https://shenjianaa.github.io/)

## 📚 Usage

### Array相关函数

数组相关工具函数

```ts
import { arrayToTree, treeToArray } from "@zhonghe/utils";
const data = [
  { id: 1, name: "Node 1", pid: null },
  { id: 2, name: "Node 2", pid: 1 },
  { id: 3, name: "Node 3", pid: 1 },
  { id: 4, name: "Node 4", pid: 2 },
  { id: 5, name: "Node 5", pid: 3 },
  { id: 6, name: "Node 6", pid: 4 },
];

// 数组转树形结构
const tree = arrayToTree(data);
console.log(tree);

// 树形结构转数组
const list = treeToArray(tree, , { children: 'children' });
console.log(list);
```

### Mock数据模拟相关

随机生成车牌号

```ts
import { generateLicensePlate } from '@zhonghe/utils';

const license = generateLicensePlate();
console.log(license);
```

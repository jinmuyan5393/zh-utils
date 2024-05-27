# zh-jsutil

<img src="https://img.shields.io/npm/v/zh-jsutil?style=plastic&logo=npm&label=zh-jsutil&link=https://www.npmjs.com/package/zh-jsutil" alt="zh-jsutil" style="margin-top: 10px" />

## ⛳ Introduction

[zh-jsutil]是一个集成业务中常用的工具函数库。集成封装常用业务函数库，可以极大程度上的提高开发者的效率。

## 📦 Installation

```bash
npm install zh-jsutil

yarn add zh-jsutil

pnpm add zh-jsutil
```

## 📚 Usage

### Array相关函数

数组相关工具函数

```ts
import { arrayToTree, treeToArray } from "zh-jsutil";
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
import { generateLicensePlate } from 'zh-jsutil';

const license = generateLicensePlate();
console.log(license);
```

# arrayToTree

## 函数描述

数组格式转树形结构

## 基础用法

```ts
import { arrayToTree } from "@zhonghe/utils";

const data = [
  { id: 1, name: "Node 1", pid: null },
  { id: 2, name: "Node 2", pid: 1 },
  { id: 3, name: "Node 3", pid: 1 },
  { id: 4, name: "Node 4", pid: 2 },
  { id: 5, name: "Node 5", pid: 3 },
  { id: 6, name: "Node 6", pid: 4 },
];

const tree = arrayToTree(data);
console.log(tree);

```

## 类型声明

```ts
/**
 * 数组转树结构
 * @param data 待转换的数据
 * @param props
 * @returns
 */
declare function arrayToTree(data: any[], props?: {
    id: string;
    parentId: string;
    children: string;
}): any[];
```

## Online Demo

<preview path="./index.vue" title="arrayToTree" description="数组转树形结构"></preview>

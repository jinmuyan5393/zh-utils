# treeToArray

## Introduction

树形结构转list

## Basic Usage

```ts
import { treeToArray } from 'zh-jsutil';
const tree = [
  {
    id: 1,
    pid: null,
    label: 'Root',
    children: [
      {
        id: 2,
        pid: 1,
        label: 'Node 1',
        children: [
          {
            id: 3,
            pid: 2,
            label: 'Node 1.1',
            children: [
              { id: 4, pid: 3, label: 'Node 1.1.1', children: [] },
              { id: 5, pid: 3, label: 'Node 1.1.2', children: [] },
            ],
          },
          { id: 6, pid: 2, label: 'Node 1.2', children: [] },
        ],
      },
      {
        id: 7,
        pid: 1,
        label: 'Node 2',
        children: [
          { id: 8, pid: 7, label: 'Node 2.1', children: [] },
          { id: 9, pid: 7, label: 'Node 2.2', children: [] },
        ],
      },
    ],
  },
];
// 树结构转数据
const list = treeToArray(tree, { children: 'children' });
console.log(list);
```

## Type Declaration

```ts
/**
 * @description 树转数组，队列实现广度优先遍历
 * @param data  数据
 * @param props `{ children: 'children' }`
 */
declare function treeToArray(data: any[], props?: {
    children: string;
}): any[];
```

## Online Demo

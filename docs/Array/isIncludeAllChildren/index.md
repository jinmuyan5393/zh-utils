# isIncludeAllChildren

## 函数描述

用于检查一个数组中的所有元素是否都包含在另一个数组中

## 基础用法

```ts
import { isIncludeAllChildren } from "@zhonghe/utils";

const children = ['apple', 'banana', 42];
const mainArray = ['apple', 'banana', 42, 'orange', 'grape'];

const result = isIncludeAllChildren(children, mainArray);
console.log(result); // true

const children2 = ['apple', 'banana', 42, 'pear'];
const mainArray2 = ['apple', 'banana', 42, 'orange', 'grape'];
const result2 = isIncludeAllChildren(children2, mainArray2);
console.log(result2); // false

```

## 类型声明

```ts

```

## Online Demo

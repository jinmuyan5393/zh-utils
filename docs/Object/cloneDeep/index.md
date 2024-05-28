# cloneDeep

## 函数描述

深拷贝

## 基础用法

```ts
import { cloneDeep } from '@zhonghe/utils';

const targetObj = { name: 'lisi', address: { x: 100 }, origin: targetObj };
const resultObj = cloneDeep(targetObj);
console.log(targetObj === resultObj); // false
console.log(targetObj.address === resultObj.address); // false
```

## 类型声明

```ts
/**
 * 深拷贝对象
 * @param targetObj 目标对象
 * @param hashMap
 * @returns
 */
declare function cloneDeep(targetObj: any, hashMap?: WeakMap<WeakKey, any>): any;

```

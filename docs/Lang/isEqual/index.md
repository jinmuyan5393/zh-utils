# isEqual

## 函数描述

用于判断两个值是否相等

## 基础用法

```ts
import { isEqual } from "@zhonghe/utils";

// 使用案例
const obj1 = { a: 1, b: [1, 2, 3], c: { d: 4 } };
const obj2 = { a: 1, b: [1, 2, 3], c: { d: 4 } };

console.log(isEqual(obj1, obj2));  // 输出: true

const obj3 = { a: 1, b: [1, 2, 3], c: { d: 5 } };
console.log(isEqual(obj1, obj3));  // 输出: false
```

## 类型声明

```ts

```

## Online Demo

# integerValidate

## 函数描述

正整数校验

## 基础用法

```ts
import { integerValidate } from "@zhonghe/utils";

const num = "23432";
const num2 = "-2343";
const num3 = "23.33";

const res = integerValidate(num); // true
const res2 = integerValidate(num2); // false
const res3 = integerValidate(num3); // false
```

## 类型声明

```ts
/**
 * 正整数校验
 * @param num 数字
 * @returns boolean
 */
declare function integerValidate(num: string): boolean;
```

## Online Demo

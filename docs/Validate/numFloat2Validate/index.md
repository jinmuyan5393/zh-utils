# numFloat2Validate

## 函数描述

验证正数，最多两位小数

## 基础用法

```ts
import { numFloat2Validate } from "@zhonghe/utils";
const num = "23424";
const num2 = "23.34";
const num3 = "23.3433";
const num4 = "-333";

const res = numFloat2Validate(num); // true
const res2 = numFloat2Validate(num2); // true
const res3 = numFloat2Validate(num3); // false
const res4 = numFloat2Validate(num4); // false

```

## 类型声明

```ts
/**
 * 验证正数，最多两位小数
 * @param num 数字
 * @returns boolean
 */
declare function numFloat2Validate(num: string): boolean;

```

## Online Demo

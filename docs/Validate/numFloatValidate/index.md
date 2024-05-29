# numFloatValidate

## 函数描述

数字限制（只能正整数或者小数）

## 基础用法

```ts
import { numFloatValidate } from "@zhonghe/utils";

const num = "23424";
const num2 = "23.34";
const num3 = "-333";

const res = numFloatValidate(num); // true
const res2 = numFloatValidate(num2); // false
const res3 = numFloatValidate(num3); // false
```

## 类型声明

```ts
/**
 * 数字包含整数和小数
 * @param num 数字
 * @returns boolean
 */
declare function numFloatValidate(num: string): boolean;
```

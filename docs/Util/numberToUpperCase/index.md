# numberToUpperCase

## 函数描述

数字转中文大写

## 基础用法

```ts
import { numberToUpperCase } from "@zhonghe/utils";

const num = "234432432";
const num2 = "234.45";

const res = numberToUpperCase(num); // 贰亿叁仟肆佰肆拾叁万贰仟肆佰叁拾贰元整
const res2 = numberToUpperCase(num2); // 贰佰叁拾肆元肆角伍分

```

## 类型声明

```ts
/**
 * 数字转中文大写
 * @param val 当前值字符串
 * @param unit 默认：仟佰拾亿仟佰拾万仟佰拾元角分
 * @returns 返回处理后的字符串
 */
declare function numberToUpperCase(val: any, unit?: string, v?: string): string;
```

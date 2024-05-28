# numberSeparate

## 函数描述

数字根据指定数量进行分割

## 基础用法

```ts
import { numberSeparate } from "@zhonghe/utils";

const num = 123123213;

const numSep = numberSeparate(num); // 123,123,213
const numSep2 = numberSeparate(num, 4); // 1,2312,3213
```

## 类型声明

```ts
/**
 * 数字根据指定数量进行分割
 * @param value
 * @param separateNumber
 * @returns
 */
declare function numberSeparate(value: number, separateNumber?: number): string;
```

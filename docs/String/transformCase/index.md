# transformCase

## 函数描述

将字符串转换大小写

## 基础用法

```ts
import { transformCase } from '@zhonghe/utils';

const str = "Hello World";
console.log(transformCase(str, 0)) // hello world

```

## 类型声明

```ts

declare type TransformCaseType = 0 | 1 | 2;
/**
 * 将字符串转换大小写
 * @param str
 * @param type 0:小写 1: 大写 2:首字母小写
 * @returns
 */
declare function useTransformCase(str: string, type: TransformCaseType): string;
```

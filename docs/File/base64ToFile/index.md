# base64ToFile

## 函数描述

base64转file对象

## 基本用法

```ts
import { base64ToFile } from "@zhonghe/utils";
const base64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA";
const file = base64ToFile(base64);

```

## 类型声明

```ts
/**
 * @description base64转为file
 * @param base64 string
 * @param fileName string
 */
declare function base64ToFile(base64: string, fileName: string): File;
```

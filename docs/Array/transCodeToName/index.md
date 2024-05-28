# transCodeToName

## 函数描述

根据code值 转换为对应中文, 常用于字典数据的转换

## 基础用法

```ts
import { transCodeToName } from '@zhonghe/utils';

// 字典数据转换  (code => label)
const sourceList = [
  { value: 1, label: "选项一" },
  { value: 2, label: "选项二" },
  { value: 3, label: "选项三" },
];

// 假设我们有一个代码
const code = 2;

// 调用函数将代码转换为对应的中文
const label = transCodeToName(sourceList, code);

console.log(label); // 输出: 选项二

```

## 类型声明

```ts
/**
 * 根据code值 转换为对应中文
 * @param sourceList
 * @param code
 * @param valueKey 数组中code对应的key值
 * @param labelKey 数组中label对应的key值
 * @returns label
 */
declare function transCodeToName(sourceList: any[], code: any, 
  valueKey?: string, labelKey?: string): string;
```

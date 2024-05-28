# debounce

## 函数描述

防抖函数

## 基础用法

```ts
 import { debounce } from "@zhonghe/utils"

  // 高频触发的函数
 function fn() {}

// 防抖处理
 const debounceFn = debounce(fn, 1000);
```

## 类型声明

```ts
/**
 * @description 创建一个防抖函数，用于延迟执行目标函数
 * @param {Function} targetFunction - 要执行的目标函数
 * @param {number} delay - 防抖的延迟时间，默认为 200 毫秒
 * @param {boolean} immediate - 是否使用立即执行模式，默认为 false，即延迟执行模式
 * @returns {Function} - 新的防抖函数
 */
declare function debounce(targetFunction: Function, delay?: number, immediate?: boolean): (...args: any[]) => void;

```

## 线上demo

<preview path="./index.vue" title="防抖函数" description="防抖函数实际应用"></preview>

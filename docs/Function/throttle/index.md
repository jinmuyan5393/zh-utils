# throttle

## 函数描述

节流函数

## 基础用法

```ts
 import { throttle } from "@zhonghe/utils"

  // 高频触发的函数
 function fn() {}

// 节流函数
 const throttleFn = throttle(fn, 1000);
```

## 类型声明

```ts
/**
 * @description 创建一个防抖函数，用于延迟执行目标函数
 * @param {Function} targetFunction - 要执行的目标函数
 * @param {number} delay - 防抖的延迟时间，默认为 1000 毫秒
 * @returns {Function} - 新的防抖函数
 */
declare function throttle(targetFunction: Function, delay?: number): (...args: any[]) => void;
```

## 线上 Demo

<preview path="./index.vue" title="防抖函数" description="防抖函数实际应用"></preview>

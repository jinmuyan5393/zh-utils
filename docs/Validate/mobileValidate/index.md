# mobileValidate

## 函数描述

手机号校验

## 基础用法

```ts
import { mobileValidate } from "@zhonghe/utils";

const mobile = "3443829832";
const mobile2 = "17366668888";

const res = mobileValidate(mobile); // false
const res2 = mobileValidate(mobile2); // true
```

## 类型声明

```ts
/**
 * 验证手机号码
 * @param mobile 手机号
 * @returns boolean
 */
declare function mobileValidate(mobile: string): boolean;
``

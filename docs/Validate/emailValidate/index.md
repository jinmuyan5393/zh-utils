# emailValidate

## 函数描述

邮箱格式校验

## 基础用法

```ts
import { emailValidate } from "@zhonghe/utils";

const email = "2342434@abc.com";
const email2 = "111111.com";

const result = emailValidate(email); // true
const result = emailValidate(email); // false
```

## 类型声明

```ts
/**
 * 验证邮箱
 * @param email 邮箱
 * @returns boolean
 */
declare function emailValidate(email: string): boolean;
```

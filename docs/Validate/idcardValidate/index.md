# idcardValidate

## 函数描述

身份证号校验

## 基础用法

```ts
import { idcardValidate } from "@zhonghe/utils";

const idcard1 = "23424243242432";
const idcard2 = "21080220050323897X";

const result = idcardValidate(idcard1); // false
const result2 = idcardValidate(idcard2); // true
```

## 类型声明

```ts
/**
 * 验证身份证
 * @param idCard 身份证
 * @returns boolean
 */
declare function idcardValidate(idCard: string): boolean;
```

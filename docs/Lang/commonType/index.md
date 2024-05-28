# commonType

## 函数描述

JavaScript基础类型判断

## 基础用法

```ts
import { commonType } from "@zhonghe/utils";

const data = { name: "sjsj" };
console.log(commonType.isObject(data));

console.log(commonType.isString(data));

```

## 类型声明

```ts
declare const commonType: {
    isUndefined: (value: unknown) => boolean;
    isString: (value: unknown) => boolean;
    isNumber: (value: unknown) => boolean;
    isObject: (value: unknown) => boolean;
    isArray: (value: unknown) => boolean;
    isNull: (value: unknown) => boolean;
    isFunction: (value: unknown) => boolean;
    isDate: (value: unknown) => boolean;
    isMap: (value: unknown) => boolean;
    isSet: (value: unknown) => boolean;
    isRegExp: (value: unknown) => boolean;
    isBrowser: () => boolean;
    isWechatBrowser: () => boolean;
    isMobile: () => boolean;
    typeToString: (value: unknown) => string;
};
```

## 在线 Demo

<preview path="./index.vue" title="commonType" description="基础类型判断"></preview>

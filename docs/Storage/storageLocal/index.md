# storageLocal

## 函数描述

localstorage封装类

## 基础用法

```ts
import { storageLocal } from "@zhonghe/utils";

// 设置缓存
storageLocal.setItem("token", "fsdkljfdsfsdfds");

// 获取缓存
storageLocal.getItem("token"); // fsdkljfdsfsdfds

// 清除指定缓存
storageLocal.removeItem("token");

// 清空缓存
storageLocal.clear();

```

## 类型声明

```ts
declare enum StorageType {
    LOCAL = "local",
    SESSION = "session"
}
declare class MyStorage {
    storage: Storage;
    constructor(type: StorageType);
    setItem(key: string, value: any): void;
    getItem(key: string): any;
    removeItem(key: string): void;
    clear(): void;
}

declare const storageLocal: MyStorage;
```

## Online Demo

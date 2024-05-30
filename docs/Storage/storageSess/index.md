# storageSess

## 函数描述

sessionStorage 封装类

## 基础用法

```ts
import { storageSess } from "@zhonghe/utils";

// 设置缓存
storageSess.setItem("token", "fsdkljfdsfsdfds");

// 获取缓存
storageSess.getItem("token"); // fsdkljfdsfsdfds

// 清除指定缓存
storageSess.removeItem("token");

// 清空缓存
storageSess.clear();

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

declare const storageSess: MyStorage;
```

## Online Demo

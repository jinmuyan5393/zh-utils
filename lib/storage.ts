import { commonType } from "src";
const { isAllEmpty } = commonType;
export enum StorageType {
  LOCAL = "local",
  SESSION = "session",
}
export default class MyStorage {
  public storage: Storage;
  constructor(type: StorageType) {
    this.storage = type === StorageType.LOCAL ? window.localStorage : window.sessionStorage;
  }
  setItem(key: string, value: any) {
    const data = JSON.stringify(value);
    this.storage.setItem(key, data);
  }
  getItem(key: string) {
    const value = this.storage.getItem(key);
    if (value) {
      return isAllEmpty(this.storage) || JSON.parse(value);
    } else {
      return value;
    }
  }
  removeItem(key: string) {
    isAllEmpty(this.storage) || this.storage.removeItem(key);
  }
  clear() {
    isAllEmpty(this.storage) || this.storage.clear();
  }
}

/**
 * 深拷贝
 * @param value 需要深拷贝的对象
 * @param clonedMap
 * @returns
 */
export function cloneDeep(value: any, clonedMap = new WeakMap()) {
  // 如果值是原始类型或者不是对象，则直接返回
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // 如果值已经被克隆过，则直接返回克隆后的对象
  if (clonedMap.has(value)) {
    return clonedMap.get(value);
  }

  // 处理特殊对象类型
  if (value instanceof Date) {
    return new Date(value);
  }
  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  // 如果值是数组，递归地复制每个元素
  if (Array.isArray(value)) {
    const newArray: any = [];
    clonedMap.set(value, newArray);
    value.forEach((item, index) => {
      newArray[index] = cloneDeep(item, clonedMap);
    });
    return newArray;
  }

  // 如果值是Map，递归地复制每个键值对
  if (value instanceof Map) {
    const newMap = new Map();
    clonedMap.set(value, newMap);
    value.forEach((val, key) => {
      newMap.set(key, cloneDeep(val, clonedMap));
    });
    return newMap;
  }

  // 如果值是Set，递归地复制每个元素
  if (value instanceof Set) {
    const newSet = new Set();
    clonedMap.set(value, newSet);
    value.forEach(item => {
      newSet.add(cloneDeep(item, clonedMap));
    });
    return newSet;
  }

  // 如果值是对象，递归地复制每个属性
  const clonedObject = Object.create(Object.getPrototypeOf(value));
  clonedMap.set(value, clonedObject);
  for (let key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObject[key] = cloneDeep(value[key], clonedMap);
    }
  }
  return clonedObject;
}

import isObject from '../isObject';
export default function isEqual(value: any, other: any) {
  if (value === other) {
    return true;
  }

  if (typeof value !== typeof other) {
    return false;
  }

  if (typeof value === 'function' && typeof other === 'function') {
    return value.toString() === other.toString();
  }

  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime();
  }

  if (isObject(value) && isObject(other)) {
    const valueKeys = Object.keys(value as object);
    const otherKeys = Object.keys(other as object);

    if (valueKeys.length !== otherKeys.length) {
      return false;
    }

    for (let key of valueKeys) {
      if (!isEqual(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

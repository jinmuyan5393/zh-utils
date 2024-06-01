import isString from '../isString';
import isObject from '../isObject';
export default function isEmpty(t: unknown) {
  return Array.isArray(t) || isString(t)
    ? (t as string | any[]).length === 0
    : t instanceof Map || t instanceof Set
      ? t.size === 0
      : isObject(t)
        ? Object.keys(t as object).length === 0
        : false;
}

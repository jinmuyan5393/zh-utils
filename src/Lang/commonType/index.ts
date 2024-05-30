/* eslint-disable max-len */
const objectToString = Object.prototype.toString;

const isUndefined = (value: unknown) => typeof value === 'undefined';
const isString = (value: unknown) => typeof value === 'string';
const isNumber = (value: unknown) => typeof value === 'number';
const isObject = (value: unknown) => value !== null && typeof value === 'object';

const isArray = (value: unknown) => Array.isArray(value);

const getTypeStr = (str: string) => str.slice(8, -1).toLocaleLowerCase();

const isNull = (value: unknown) => getTypeStr(objectToString.call(value)) === 'null';
const isFunction = (value: unknown) => getTypeStr(objectToString.call(value)) === 'function';
const isDate = (value: unknown) => getTypeStr(objectToString.call(value)) === 'date';
const isMap = (value: unknown) => getTypeStr(objectToString.call(value)) === 'map';
const isSet = (value: unknown) => getTypeStr(objectToString.call(value)) === 'set';
const isRegExp = (value: unknown) => getTypeStr(objectToString.call(value)) === 'regexp';
const isWechatBrowser = () => (navigator?.userAgent.toLowerCase() as string).includes('micromessenger');
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
const isMobile = () => {
  if (
    navigator?.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    )
  )
    return true;
  return false;
};

const typeToString = (value: unknown) => objectToString.call(value);

function isNullOrUndef(t: any) {
  return isNull(t) || isUndefined(t);
}

function isAllEmpty(t: any) {
  return !!(isEmpty(t) || isNullOrUndef(t));
}

function isEmpty(t: any) {
  return isArray(t) || isString(t)
    ? t.length === 0
    : t instanceof Map || t instanceof Set
      ? t.size === 0
      : isObject(t)
        ? Object.keys(t).length === 0
        : false;
}

export default {
  isUndefined,
  isString,
  isNumber,
  isObject,
  isArray,
  isNull,
  isFunction,
  isDate,
  isMap,
  isSet,
  isRegExp,
  isBrowser,
  isWechatBrowser,
  isMobile,
  typeToString,
  isAllEmpty,
};

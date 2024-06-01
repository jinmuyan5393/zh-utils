const objectToString = Object.prototype.toString;
const getTypeStr = (str: string) => str.slice(8, -1).toLocaleLowerCase();

export default function isFunction(value: unknown) {
  return getTypeStr(objectToString.call(value)) === 'function';
}

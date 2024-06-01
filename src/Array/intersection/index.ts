/**
 * @description 获取由基本数据类型组成的数组交集
 * @param rest
 * @returns
 */
export default function intersection(...rest: any[]) {
  return [...rest].reduce((arr, currentArray) => {
    return arr.filter((element: unknown) => currentArray.includes(element));
  });
}

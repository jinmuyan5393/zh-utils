/**
 * @description 获取指定key的不重复值列表
 * @param source 数组类型的源数据
 * @param key 指定的key
 * @returns 不重复值列表
 */
export default function getKeyList(source: any[], key: string): any[] {
  const arr = [];
  for (const r of source) r[key] && arr.push(r[key]);
  return Array.from(new Set(arr));
}

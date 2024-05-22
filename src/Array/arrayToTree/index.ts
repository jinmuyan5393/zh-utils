/*
 * @Description:
 * @Author: jinmuyan
 * @LastEditTime: 2024-05-22 10:58:22
 */
/**
 * 数组转树结构
 * @param data 待转换的数据
 * @param props
 * @returns
 */
export default function arrayToTree(data: any[], props = { id: 'id', parentId: 'pid', children: 'children' }) {
  const { id, parentId, children } = props;
  const result: any[] = [];
  const map = new Map();
  data.forEach((item) => {
    map.set(item[id], item);
    const parent = map.get(item[parentId]);
    if (parent) {
      parent[children] = parent[children] ?? [];
      parent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

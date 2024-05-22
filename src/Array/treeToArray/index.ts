/**
 * @description 树转数组，队列实现广度优先遍历
 * @param data  数据
 * @param props `{ children: 'children' }`
 */

export default function treeToArray(data: any[], props = { children: 'children' }) {
  const { children } = props;
  const newData = [];
  const queue: any[] = [];
  data.forEach((child: any) => queue.push(child));
  while (queue.length) {
    const item: any = queue.shift();
    if (item[children]) {
      item[children].forEach((child: any) => queue.push(child));
      delete item[children];
    }
    newData.push(item);
  }
  return newData;
}

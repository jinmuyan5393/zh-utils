/*
 * @Description: 数组相关工具函数
 * @Author: jinmuyan
 * @LastEditTime: 2024-05-20 10:26:59
 */
import { cloneDeep } from "../Object"

/**
 * 数组转树结构
 * @param data 待转换的数据
 * @param props
 * @returns
 */
export const arrayToTree = (data: any[], props = { id: "id", parentId: "pid", children: "children" }) => {
  data = cloneDeep(data);
  const { id, parentId, children } = props;
  const result: any[] = [];
  const map = new Map();
  data.forEach(item => {
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
};


/**
 * @description 树转数组，队列实现广度优先遍历
 * @param data  数据
 * @param props `{ children: 'children' }`
 */

export const treeToArray = (data: any[], props = { children: "children" }) => {
  data = cloneDeep(data);
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
};

/**
 * 根据code值 转换为对应中文
 * @param sourceList
 * @param code
 * @param valueKey 数组中code对应的key值
 * @param labelKey 数组中label对应的key值
 * @returns label
 */
export function transCodeToName(sourceList: any[], code: any, valueKey = "value", labelKey = "label") {
  let label = "";
  if (!sourceList || !Array.isArray(sourceList)) return "";
  const findItem = sourceList.find((item: any) => String(item[valueKey]) === String(code));
  if (findItem) {
    label = findItem[labelKey] ? findItem[labelKey] : "";
  }

  return label;
}

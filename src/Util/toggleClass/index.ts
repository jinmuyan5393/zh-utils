/**
 * @description 是否向当前元素添加指定类名
 * @param bool
 * @param name 类名
 * @param element 当前元素（可选，如果不填，默认 `document.body` ）
 */
export default function toggleClass(bool: boolean, name: string, element?: HTMLElement | Element) {
  const rootEle = element || document.body;
  const { className: s } = rootEle;
  const o = s.replace(name, '').trim().split(/\s+/).join(' ');
  rootEle.className = bool ? `${o} ${name}` : o;
}

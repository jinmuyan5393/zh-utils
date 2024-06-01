/**
 * @description 判断元素中是否有对应的类名
 * @param element
 * @param name 类名
 * @returns
 */
export default function hasClass(element: HTMLElement | Element, name: string): boolean {
  return !!element?.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
}

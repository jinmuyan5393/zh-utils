/**
 * @description 打开链接
 * @param href
 * @param target
 */
export default function openLink(href: string, target = '_blank'): void {
  const element = document.createElement('a');
  element.setAttribute('href', href),
    element.setAttribute('target', target),
    element.setAttribute('rel', 'noreferrer noopener'),
    element.setAttribute('id', 'external');
  const dom = document.getElementById('external');
  dom && document.body.removeChild(dom), document.body.appendChild(element), element.click(), element.remove();
}

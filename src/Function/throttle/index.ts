/**
 * @description 创建一个防抖函数，用于延迟执行目标函数
 * @param {Function} targetFunction - 要执行的目标函数
 * @param {number} delay - 防抖的延迟时间，默认为 1000 毫秒
 * @returns {Function} - 新的防抖函数
 */
export default function throttle(targetFunction: Function, delay = 1000) {
  let timeoutId: any;

  return function (...args: any[]) {
    // 如果定时器存在，清除之前的定时器
    timeoutId && clearTimeout(timeoutId);

    // 设置一个新的定时器，在延迟时间 delay 后执行目标函数
    timeoutId = setTimeout(() => {
      targetFunction.call(undefined, ...args);
      timeoutId = null;
    }, delay);
  };
}

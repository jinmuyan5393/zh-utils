/**
 * @description 创建一个防抖函数，用于延迟执行目标函数
 * @param {Function} targetFunction - 要执行的目标函数
 * @param {number} delay - 防抖的延迟时间，默认为 200 毫秒
 * @param {boolean} immediate - 是否使用立即执行模式，默认为 false，即延迟执行模式
 * @returns {Function} - 新的防抖函数
 */
export default function debounce(targetFunction: Function, delay = 200, immediate = false) {
  let timerId: any;
  const waitTime = delay;
  const context = undefined;

  return function (...args: any[]) {
    // 清除之前的定时器，取消之前的延迟执行
    timerId && clearTimeout(timerId);

    if (immediate) {
      // 立即执行模式
      if (!timerId) {
        // 如果定时器不存在，则立即执行目标函数，并传递相应的参数
        targetFunction.call(context, ...args);
      }

      // 设置一个新的定时器，在延迟时间 waitTime 后将定时器重置为 null
      timerId = setTimeout(() => (timerId = null), waitTime);
    } else {
      // 延迟执行模式
      // 设置一个新的定时器，在延迟时间 waitTime 后执行目标函数
      timerId = setTimeout(() => targetFunction.call(context, ...args), waitTime);
    }
  };
}

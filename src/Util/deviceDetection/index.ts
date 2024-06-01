/**
 * @description 判断当前是不是移动端
 * @returns
 */
export default function deviceDetection(): boolean {
  const userAgent = window.navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  if (mobileRegex.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}

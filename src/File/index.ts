/*
 * @Description: 文件操作相关工具函数
 * @Author: jinmuyan
 * @LastEditTime: 2024-05-20 10:49:38
 */
/**
 * @description base64字符串转file对象
 * @param base64 图片base64字符串
 * @param fileName 输出的文件名
 * @returns
 */
export function base64ToFile(base64: string, fileName: string) {
  const arr = base64.split(',');
  const mime = arr[0]?.match(/:(.*?);/)?.[1];
  const bytes = atob(arr[1]);
  let n = bytes.length;
  const ia = new Uint8Array(n);
  while (n--) {
    ia[n] = bytes.charCodeAt(n);
  }
  return new File([ia], fileName, { type: mime });
}

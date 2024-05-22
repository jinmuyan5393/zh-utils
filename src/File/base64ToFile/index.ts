/**
 * @description base64转为file
 * @param base64 string
 * @param fileName string
 */
export default function base64ToFile(base64: string, fileName: string) {
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

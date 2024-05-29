/**
 * 验证正数，最多两位小数
 * @param num 数字
 * @returns boolean
 */
export default function numFloat2Validate(num: string) {
  return /^[0-9]+(.[0-9]{1,2})?$/.test(num);
}

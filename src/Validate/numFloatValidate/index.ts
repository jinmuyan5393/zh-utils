/**
 * 数字包含整数和小数
 * @param num 数字
 * @returns boolean
 */
export default function numFloatValidate(num: string) {
  return /^[0-9]+(.[0-9]+)?$/.test(num);
}

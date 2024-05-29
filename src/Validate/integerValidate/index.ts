/**
 * 正整数校验
 * @param num 数字
 * @returns boolean
 */
export default function integerValidate(num: string) {
  return /^[0-9]\d*$/.test(num);
}

/**
 * 验证手机号码
 * @param mobile 手机号
 * @returns boolean
 */
export default function mobileValidate(mobile: string) {
  return /^1[3456789]\d{9}$/.test(mobile);
}

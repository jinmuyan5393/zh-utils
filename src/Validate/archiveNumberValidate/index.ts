/**
 * 行驶证和驾驶证编码校验
 * @param number 行驶证或驾驶证
 * @returns boolean
 */
export default function archiveNumberValidate(number: string) {
  const regex = /^\d{12}$/;
  return regex.test(number);
}

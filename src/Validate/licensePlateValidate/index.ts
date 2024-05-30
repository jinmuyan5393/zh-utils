/**
 * 车牌号校验
 * @param plate 车牌号
 * @returns boolean
 */
export default function licensePlateValidate(plate: string) {
  const regex = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{1}[A-Z]{1}[A-Z0-9]{5}$/;
  return regex.test(plate);
}

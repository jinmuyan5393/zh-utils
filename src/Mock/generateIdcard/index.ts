/**
 * 随机生成身份证号
 * @returns string
 */
export default function generateIdcard() {
  // 生成一个随机的6位数作为区域码（前6位）
  const areaCode = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0');

  // 生成一个随机的出生年月日（8位）
  const year = Math.floor(Math.random() * 100) + 1900; // 1900年至今
  const month = Math.floor(Math.random() * 12) + 1; // 1月至12月
  const day = Math.floor(Math.random() * 28) + 1; // 简化，假设每月都是28天
  const birthday = year.toString() + month.toString().padStart(2, '0') + day.toString().padStart(2, '0');

  // 生成一个随机的顺序码（3位）
  const sequenceCode = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  // 计算校验码（最后一位）
  const id17 = areaCode + birthday + sequenceCode;
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
  const checkCodeMap = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码对照表
  let sum = 0;
  for (var i = 0; i < 17; i++) {
    sum += parseInt(id17.charAt(i)) * weights[i];
  }
  const checkCode = checkCodeMap[sum % 11];

  // 拼接得到完整的身份证号
  const idNumber = areaCode + birthday + sequenceCode + checkCode;

  return idNumber;
}

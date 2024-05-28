/** 随机生成车牌号 */
export default function generateLicensePlate() {
  // 生成省份简称
  const province = [
    '京',
    '津',
    '沪',
    '渝',
    '冀',
    '晋',
    '辽',
    '吉',
    '黑',
    '苏',
    '浙',
    '皖',
    '闽',
    '赣',
    '鲁',
    '豫',
    '鄂',
    '湘',
    '粤',
    '桂',
    '琼',
    '川',
    '贵',
    '云',
    '藏',
    '陕',
    '甘',
    '青',
    '宁',
    '新',
  ];
  const provinceIndex = Math.floor(Math.random() * province.length);
  let plateNumber = province[provinceIndex];

  // 生成车牌号码数字和字母部分
  for (let i = 0; i < 6; i++) {
    if (i < 2) {
      // 前两位为大写字母
      plateNumber += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    } else {
      // 后三位为数字
      plateNumber += Math.floor(Math.random() * 10);
    }
  }

  return plateNumber;
}

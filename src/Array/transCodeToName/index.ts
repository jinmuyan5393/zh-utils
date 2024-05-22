/**
 * 根据code值 转换为对应中文
 * @param sourceList
 * @param code
 * @param valueKey 数组中code对应的key值
 * @param labelKey 数组中label对应的key值
 * @returns label
 */
export default function transCodeToName(sourceList: any[], code: any, valueKey = 'value', labelKey = 'label') {
  let label = '';
  if (!sourceList || !Array.isArray(sourceList)) return '';
  const findItem = sourceList.find((item: any) => String(item[valueKey]) === String(code));
  if (findItem) {
    label = findItem[labelKey] ? findItem[labelKey] : '';
  }

  return label;
}

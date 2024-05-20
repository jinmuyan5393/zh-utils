/*
 * @Description: 校验相关的工具函数
 * @Author: jinmuyan
 * @LastEditTime: 2024-05-20 10:52:02
 */

/**
 * 验证手机号码
 * @param mobile 手机号
 * @returns boolean
 */
export const validateMobile = (mobile: string) => {
  return /^1[3456789]\d{9}$/.test(mobile);
};

/**
 * 验证邮箱
 * @param email 邮箱
 * @returns boolean
 */
export const validateEmail = (email: string) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(email);
};

/**
 * 验证身份证
 * @param idCard 身份证
 * @returns boolean
 */
export const validateIdCard = (idCard: string) => {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(idCard);
};

/**
 * 数字包含整数和小数
 * @param num 数字
 */
export const validateNumber = (num: string) => {
  return /^[0-9]+(.[0-9]+)?$/.test(num);
};

/**
 * 正整数校验
 * @param num 数字
 * @returns boolean
 */
export const validatePositiveInteger = (num: string) => {
  return /^[0-9]\d*$/.test(num);
};

/**
 * 验证正数，最多两位小数
 * @param num 数字
 * @returns boolean
 */
export const validatePositiveNumber = (num: string) => {
  return /^[0-9]+(.[0-9]{1,2})?$/.test(num);
};

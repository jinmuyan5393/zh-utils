/**
 * 验证邮箱
 * @param email 邮箱
 * @returns boolean
 */
export default function emailValidate(email: string) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(email);
}

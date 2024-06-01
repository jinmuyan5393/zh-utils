export default function isObject(value: unknown) {
  return value !== null && typeof value === 'object';
}

import isNull from '../isNull';
import isUndefined from '../isUndefined';
import isEmpty from '../isEmpty';

function isNullOrUndef(t: unknown) {
  return isNull(t) || isUndefined(t);
}
export default function isAllEmpty(t: unknown) {
  return !!(isEmpty(t) || isNullOrUndef(t));
}

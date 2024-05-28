// node_modules/.pnpm/@zhonghe+utils@0.0.2/node_modules/@zhonghe/utils/dist/index.mjs.js
function m(e, n = { id: "id", parentId: "pid", children: "children" }) {
  let { id: t, parentId: o, children: r } = n, s = [], i = /* @__PURE__ */ new Map();
  return e.forEach((a) => {
    var d;
    i.set(a[t], a);
    let l = i.get(a[o]);
    l ? (l[r] = (d = l[r]) != null ? d : [], l[r].push(a)) : s.push(a);
  }), s;
}
function y(e, n = { children: "children" }) {
  let { children: t } = n, o = [], r = [];
  for (e.forEach((s) => r.push(s)); r.length; ) {
    let s = r.shift();
    s[t] && (s[t].forEach((i) => r.push(i)), delete s[t]), o.push(s);
  }
  return o;
}
function x(e, n, t = "value", o = "label") {
  let r = "";
  if (!e || !Array.isArray(e))
    return "";
  let s = e.find((i) => String(i[t]) === String(n));
  return s && (r = s[o] ? s[o] : ""), r;
}
function h(e, n) {
  var a, l;
  let t = e.split(","), o = (l = (a = t[0]) == null ? void 0 : a.match(/:(.*?);/)) == null ? void 0 : l[1], r = atob(t[1]), s = r.length, i = new Uint8Array(s);
  for (; s--; )
    i[s] = r.charCodeAt(s);
  return new File([i], n, { type: o });
}
function w(e, n = 200, t = false) {
  let o, r = n, s = void 0;
  return function(...i) {
    o && clearTimeout(o), t ? (o || e.call(s, ...i), o = setTimeout(() => o = null, r)) : o = setTimeout(() => e.call(s, ...i), r);
  };
}
function g(e, n = 1e3) {
  let t;
  return function(...o) {
    t && clearTimeout(t), t = setTimeout(() => {
      e.call(void 0, ...o), t = null;
    }, n);
  };
}
var u = Object.prototype.toString;
var E = (e) => typeof e == "undefined";
var k = (e) => typeof e == "string";
var b = (e) => typeof e == "number";
var U = (e) => e !== null && typeof e == "object";
var I = (e) => Array.isArray(e);
var c = (e) => e.slice(8, -1).toLocaleLowerCase();
var M = (e) => c(u.call(e)) === "null";
var R = (e) => c(u.call(e)) === "function";
var L = (e) => c(u.call(e)) === "date";
var P = (e) => c(u.call(e)) === "map";
var D = (e) => c(u.call(e)) === "set";
var F = (e) => c(u.call(e)) === "regexp";
var W = () => (navigator == null ? void 0 : navigator.userAgent.toLowerCase()).includes("micromessenger");
var _ = () => ![typeof window, typeof document].includes("undefined");
var B = () => !!(navigator != null && navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
var N = (e) => u.call(e);
var f = { isUndefined: E, isString: k, isNumber: b, isObject: U, isArray: I, isNull: M, isFunction: R, isDate: L, isMap: P, isSet: D, isRegExp: F, isBrowser: _, isWechatBrowser: W, isMobile: B, typeToString: N };
function S() {
  let e = ["京", "津", "沪", "渝", "冀", "晋", "辽", "吉", "黑", "苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "粤", "桂", "琼", "川", "贵", "云", "藏", "陕", "甘", "青", "宁", "新"], n = Math.floor(Math.random() * e.length), t = e[n];
  for (let o = 0; o < 5; o++)
    o < 2 ? t += String.fromCharCode(65 + Math.floor(Math.random() * 26)) : t += Math.floor(Math.random() * 10);
  return t;
}
function T(e, n = 3) {
  let t = e.toString();
  if (t.length <= n)
    return t;
  let r = "", s = e.toString(), i = s;
  s.includes(".") && (i = s.split(".")[0]);
  for (let a = 0; a < i.length; a++)
    (i.length - a) % n === 0 && a !== 0 && (r += ","), r += t[a];
  return s.includes(".") ? `${r}.${s.split(".")[1]}` : r;
}
function pe(e, n = "仟佰拾亿仟佰拾万仟佰拾元角分", t = "") {
  e += "00";
  let o = e.indexOf(".");
  o >= 0 && (e = e.substring(0, o) + e.substr(o + 1, 2)), n = n.substr(n.length - e.length);
  for (let r = 0; r < e.length; r++)
    t += "零壹贰叁肆伍陆柒捌玖".substr(e.substr(r, 1), 1) + n.substr(r, 1);
  return t = t.replace(/零角零分$/, "整").replace(/零[仟佰拾]/g, "零").replace(/零{2,}/g, "零").replace(/零([亿|万])/g, "$1").replace(/零+元/, "元").replace(/亿零{0,3}万/, "亿").replace(/^元/, "零元"), t;
}
var { isNull: $, isUndefined: Q, isDate: q, isRegExp: G, isObject: J } = f;
function p(e, n = /* @__PURE__ */ new WeakMap()) {
  if ($(e) || Q(e))
    return e;
  if (q(e))
    return new Date(e);
  if (G(e))
    return new RegExp(e);
  if (!J(e))
    return e;
  if (n.has(e))
    return n.get(e);
  let t = e.constructor();
  n.set(e, t);
  for (let o in e)
    t[o] = p(e[o], n);
  return t;
}
function C(e, n) {
  switch (n) {
    case 0:
      return e.toLowerCase();
    case 1:
      return e.toUpperCase();
    case 2:
      return `${e.charAt(0).toLocaleLowerCase()}${e.slice(1)}`;
    default:
      return e;
  }
}
function A() {
  let e = "";
  for (let n = 0; n < 32; n++) {
    let t = Math.random() * 16 | 0;
    (n === 8 || n === 12 || n === 16 || n === 20) && (e += "-"), e += (n === 12 ? 4 : n === 16 ? t & 3 | 8 : t).toString(16);
  }
  return e;
}
export {
  m as arrayToTree,
  h as base64ToFile,
  p as cloneDeep,
  f as commonType,
  w as debounce,
  S as generateLicensePlate,
  A as generateUUID,
  T as numberSeparate,
  g as throttle,
  x as transCodeToName,
  C as transformCase,
  y as treeToArray,
  pe as verifyNumberCnUppercase
};
//# sourceMappingURL=@zhonghe_utils.js.map

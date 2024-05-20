/**
 * 地图相关工具函数
 */
/**
 * @description 将角度转为弧度
 * @param degrees 角度
 * @returns radians 弧度
 */
function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}


/**
 * @description 计算两点之间的距离
 * @param origin 起始点
 * @param target 目标点
 * @returns distance 单位km
 */
export function calculateDistance(origin: { latitude: number; longitude: number }, target: { latitude: number; longitude: number }) {
  const earthRadiusKm = 6371;
  const { latitude: lat1, longitude: lon1 } = origin;
  const { latitude: lat2, longitude: lon2 } = target;
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = earthRadiusKm * c;

  return distance.toFixed(2);
}

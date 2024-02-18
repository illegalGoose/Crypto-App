export function percentDifference(a, b) {
    return +(100 * Math.abs( (a - b) / ( (a + b) / 2) )).toFixed(2) //toFixed указывает кол-во чисел после точки в числе Difference. "+" приодит значние к числу
  }

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1)
}
/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
  let num = BigInt(n);
  let max_m = Math.floor(Math.log2(Number(num))) + 1;
  for (let m = max_m; m >= 2; m--) {
    let left = 2n,
      right = BigInt(Math.floor(Math.pow(Number(num), 1 / (m - 1))));
    while (left <= right) {
      let mid = (left + right) >> 1n;
      let sum = 1n,
        curr = 1n;
      for (let i = 1; i < m; i++) {
        curr *= mid;
        if (curr >= num) {
          sum = num + 1n;
          break;
        }
        sum += curr;
      }
      if (sum === num) return mid.toString();
      if (sum > num) {
        right = mid - 1n;
      } else {
        left = mid + 1n;
      }
    }
  }
  return (num - 1n).toString();
};

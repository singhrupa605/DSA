var solve = function (left, right) {
  let ans = [];
  for (let i = left; i <= right; i++) {
    let num = i;
    while (num > 0) {
      let rem = num % 10;
      if (rem === 0 || (i % rem) !== 0) {
        break;
      } else {
        num = Math.floor(num / 10)
      }
    }
    if (num === 0) {
      ans.push(i);
    }
  }
  return ans;
};

let date = new Date(2019,7, 31)
console.log(date.getDay())
// console.log(solve(47, 85));

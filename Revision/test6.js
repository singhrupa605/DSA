const ip = [0, 1, 0, 3, 12];

const moveZeroes = (arr) => {
  let n = arr.length;
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      index++;
    }
  }
};

const maxSumArray = (arr) => {
  let sum = arr[0],
    maxSum = sum;
  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(sum+arr[i], arr[i])
    maxSum = Math.max(sum, maxSum);
  }
  console.log(maxSum);
};

maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// moveZeroes(ip);
// console.log(ip);

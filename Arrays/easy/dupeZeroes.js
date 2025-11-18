let arr = [1, 0, 0, 3, 0];

const dupeZeroes = (arr, n) => {
  let i = 0,
    zeroes = 0;
  while (i + zeroes < n) {
    if (arr[i] === 0) {
      if (i + zeroes === n - 1) {
        arr[n - 1] = 0;
        n -= 1;
        break;
      }
      zeroes++;
    }
    i++;
  }

  let cutOff = n - zeroes - 1;
  for (let i = cutOff; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zeroes] = 0;
      zeroes--;
      arr[i + zeroes] = 0;
    } else {
      arr[i + zeroes] = arr[i];
    }
  }
  return arr;
};
console.log(dupeZeroes(arr, arr.length));

//If the sum of your current position (i) plus the extra seats already taken by earlier zeros (zeros) is less than n, you can still fit the duplicate without pushing someone outside the train. (i+zeroes < n)

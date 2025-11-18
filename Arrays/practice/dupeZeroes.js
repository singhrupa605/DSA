let arr = [1, 0, 2, 3];

const dupeZeroes = (arr) => {
  let zeroes = 0,
    n = arr.length,
    i = 0;
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
  console.log(arr);
};

dupeZeroes(arr);

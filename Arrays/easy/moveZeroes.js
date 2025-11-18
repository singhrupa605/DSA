const swap = require("../../swap");

const arr = [0, 0, 1, 2];

const moveZeroes = () => {
  let i = 0;
  while (arr[i] !== 0) {
    i++;
  }
  j = i + 1;
  while (arr[j] === 0) {
    j++;
  }
  while (j < arr.length) {
    if (arr[i] === 0 && arr[j] !== 0) {
      swap(arr, i, j);
    }
    while (arr[i] !== 0) {
      i++;
    }

    while (arr[j] === 0) {
      j++;
    }
  }
  console.log(arr);
};

moveZeroes();

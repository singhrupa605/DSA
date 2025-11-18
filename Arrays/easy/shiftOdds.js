let arr = [0, 1, 2]

const shiftOdds = (arr) => {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[j] % 2 === 0 && arr[i] % 2 === 1) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j--;
    }
    if (arr[j] % 2 === 1) {
      j--;
    }
    if (arr[i] % 2 === 0) {
      i++;
    }
  }
  console.log(arr)

};
shiftOdds(arr)
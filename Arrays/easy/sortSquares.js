const arr = [-4, -1, 0, 3, 10];

const sortSquares = (arr) => {
  let i = 0;
  (j = arr.length - 1), (result = []), (index = arr.length - 1);
  while (i <= j) {
    let powerI = Math.pow(arr[i], 2),
      powerJ = Math.pow(arr[j], 2);
    if (powerI >= powerJ) {
      result[index] = powerI;
      index--;

      i++;
    } else {
      result[index] = powerJ;
      index--;
      j--;
    }
  }
  console.log(result);
};

sortSquares(arr);

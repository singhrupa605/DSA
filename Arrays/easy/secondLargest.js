const arr = [4, 1, 6, 11, 11];

const secondLarge = () => {
  let max = -Infinity,
    secMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] < max) {
      secMax = arr[i];
    }
  }
  console.log(secMax);
};

secondLarge();

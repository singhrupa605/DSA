let arr1 = [2, 2, 3, 1]; // Expected third max = 1
let arr2 = [-1, -2, -3, -4]; // Expected third max = -3
let arr3 = [2, 2, 2]; // Expected third max = -3

const findThird = (arr) => {
  let m1 = -Infinity,
    m2 = -Infinity,
    m3 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > m1) {
      m3 = m2;
      m2 = m1;
      m1 = arr[i];
    } else if (arr[i] > m2 && arr[i] < m1) {
      m3 = m2;
      m2 = arr[i];
    } else if (arr[i] > m3 && arr[i] < m2) {
      m3 = arr[i];
    }
  }

  console.log(m1, " ", m2, " ", m3);
};

findThird(arr1);

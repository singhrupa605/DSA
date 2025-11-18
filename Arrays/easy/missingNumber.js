const arr1 = [4, 3, 2, 7, 8, 2, 3, 1];
const arr2 = [1,1,1,1];

//___________________ Approach 1 using MAP_________________________________

// const missingNums = (arr) => {
//   let map = new Map(),
//     num = 1,
//     result = [];

//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], i);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(num)) {
//       result.push(num);
//     }
//     num++;
//   }
//   console.log(result);
// };

//___________________ Approach 2 O(1) Space _________________________________

const missingNums = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let mod = Math.abs(arr[i]);
    if (arr[mod - 1] > 0) {
      arr[mod - 1] = arr[mod - 1] * -1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      res.push(i + 1);
    }
  }
  console.log(res);
};

missingNums(arr2);

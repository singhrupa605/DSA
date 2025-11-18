const arr1 = [2, 7, 11, 15];

const twoSumUnsorted = (arr, target) => {
  let result = [],
    map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(target - arr[i])) {
      map.set(arr[i], i);
    } else {
      result.push(i, map.get(target - arr[i]));
      return result;
    }
  }

  return result;
};

console.log(twoSumUnsorted(arr1,9))
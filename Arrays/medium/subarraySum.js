let arr1 = [1, 2, 1, 2, 1, 3, -1, 2, 4, 1, 2],
  arr2 = [-1, 1, 3];
k = 3;

const subarraySumK = (arr, k) => {
  let map = new Map(),
    count = 0,
    prefixSum = 0,
    i = 0;
  map.set(0, 1);
  while (i < arr.length) {
    prefixSum += arr[i];

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    i++;
  }
  console.log(count);
};

subarraySumK(arr1, k);

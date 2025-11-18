const arr = [2, 7, 11, 15];

const twoSum2 = (arr, target) => {
  let i = 0,
    j = arr.length - 1,
    ans = [];

  while (i < j) {
    if (arr[i] + arr[j] > target) {
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      ans.push(i+1);
      ans.push(j+1);
      break;
    }
  }
  console.log(ans);
};

twoSum2(arr, 9);

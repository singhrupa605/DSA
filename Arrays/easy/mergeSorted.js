let nums1 = [1, 2, 7],
  nums2 = [1,3,5,8];

const mergeSorted = (num1, num2, m, n) => {
  let i = m - 1,
    j = n - 1,
    index = m + n - 1,
    k = 0;

  if (num1.length === 0) {
    console.log(num2);
    return;
  }
  if (num2.length === 0) {
    console.log(num1);
    return;
  }
  while (k < 3) {
    num1.push(0);
    k++;
  }
  console.log(num1);

  while (i >= 0 && j >= 0) {
    if (num1[i] > num2[j]) {
      num1[index] = num1[i];
      i--;
    } else {
      num1[index] = num2[j];
      j--;
    }
    index--;
  }
  if (j >= 0) {
    while (j >= 0) {
      num1[index] = num2[j];
      j--;
      index--;
    }
  }
  if (i >= 0) {
    while (i >= 0) {
      num1[index] = num1[i];
      i--;
      index--;
    }
  }

  console.log(num1);
};

mergeSorted(nums1, nums2, nums1.length, nums2.length);

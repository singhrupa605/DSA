function isPalindrome(arr, i, n) {
  if (i >= n / 2) {
    return true;
  }
  if (arr[i] !== arr[n - i - 1]) {
    return false;
  }
  return isPalindrome(arr, i + 1, n);
}
console.log(isPalindrome([1,2,3,1], 0, 4));



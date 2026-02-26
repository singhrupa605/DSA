function rev(arr, i, n) {
  if (i >= n/2) {
  
    return arr
  }

  [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]];
  rev(arr, i + 1, n-i- 1);
  return arr;
}

console.log(rev([1, 2, 3, 4], 0, 4));

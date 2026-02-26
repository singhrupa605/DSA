function contains(arr, i, target) {
  if (i >= arr.length - 1) return false;
  if (arr[i] === target) return true;
  return contains(arr, i + 1, target);
}

console.log(contains([1, 2, 33, 5], 0, 3));

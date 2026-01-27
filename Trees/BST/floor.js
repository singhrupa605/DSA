function floor(root, x) {
  let ans = -1;

  while (root) {
    if (root.data === x) return x;

    if (root.data < x) {
      ans = root.data;
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return ans;
}

const countGreater = (root, x) => {
  let sum = 0;
  const helper = (root) => {
    if (!root) return;
    if (root.val > x) {
      sum += 1;
    }
    helper(root.left);
    helper(root.right);
  };
  helper(root)
  return sum;
};

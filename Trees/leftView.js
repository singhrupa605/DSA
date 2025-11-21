const leftView = (root) => {
  if (!root) return arr;
  let level = 0,
    arr = [];

  const helper = (root, level, arr) => {
    if (!root) return;
    if (level === arr.length) {
      arr.push(root.val);
    }
    helper(root.left, level + 1, arr);
    helper(root.right, level + 1, arr);
    return;
  };

  helper(root, level, arr);
  return arr;
};

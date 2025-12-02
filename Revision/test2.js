const diameter = (root) => {
  let diameter = 0;
  const height = (root) => {
    if (!root) return 0;
    let left = height(root.left, diameter);
    let right = height(root.right, diameter);
     diameter = Math.max(diameter,left+right);
    return 1 + Math.max(left, right);
  };
  height(root);
  return diameter;
};

var isBalanced = function (root) {
  return check(root) > -1;
};

const check = (root) => {
  if (root === null) {
    return 0;
  }
  let left = check(root.left);
  if (left === -1) return -1;
  let right = check(root.right);
  if (right === -1) return -1;
  if (Math.abs(right - left) > 1) return -1;
  return Math.max(left, right) + 1;
};

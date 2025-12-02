const depth = (root) => {
  if (!root) return 0;
  let left = depth(root.left);
  let right = depth(root.right);
  return Math.max(left, right) + 1;
};

const balanced = (root) => {
  if (!root) return true;
  const check = (root) => {
    if (!root) return 0;
    let left = check(root.left);
    if (left === -1) return -1;
    let right = check(root.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  };
  return check(root) > -1;
};

const diameter = (root) => {
  let dia = 0;
  const getDia = (root) => {
    if (!root) return 0;
    let left = getDia(root.left);
    let right = getDia(root.right);
    let path = left + right;
    dia = Math.max(dia, path);
    return Math.max(left, right) + 1;
  };
  getDia(root);
  return dia;
};

const leftSum = (root) => {
  let sum = 0;
  const helper = (root, isLeft = false) => {
    if (!root) return 0;
    if (!root.left && !root.right && isLeft) {
      sum += root.val;
      return;
    }
    helper(root.left, true);
    helper(root.right, false);
  };

  helper(root);
  return sum;
};

const countLeafs = (root) => {
  let sum = 0;
  const helper = (root) => {
    if (!root) return 0;
    if (!root.left && !root.right) {
      sum += root.val;
      return;
    }
    helper(root.left);
    helper(root.right);
  };
  helper(root);
  return sum;
};

const evenNodes = (root) => {
  let sum = 0;
  const helper = (root, level = 0) => {
    if (!root) return 0;
    if (level % 2 === 0) {
      sum += 1;
    }
    helper(root.left, level + 1);
    helper(root.right, level + 1);
  };
  helper(root);
  return sum;
};

const countAllNodes = (root) => {
  if (!root) return 0;
  let left = countAllNodes(root.left);
  let right = countAllNodes(root.right);
  return left + right + 1;
};



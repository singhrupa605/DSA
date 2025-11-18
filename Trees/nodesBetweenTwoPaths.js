const findLac = (root, p, q) => {
  if (root === null) return null;
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;
  let left = findLac(root.left, p, q);
  let right = findLac(root.right, p, q);
  if (left && right) return root;
  return left ? left : right;
};

const countNodes = (root, p, q) => {
  let lac = findLac(root, p, q);
  if (lac === null) return 0;
  let distp = getDistance(lac, p);
  let distq = getDistance(lac, q);
  return distp + distq + 1;
};

const getDistance = (root, target) => {
  if (root === null) return -1;
  if (root.val == target.val) return 0;

  let left = getDistance(root.left, target);
  if (left !== -1) return left + 1;

  let right = getDistance(root.right, target);
  if (right !== -1) return right + 1;

  return -1;
};

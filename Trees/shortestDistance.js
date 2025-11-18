const findLac = (root, p, q) => {
  if (!root) return null;
  if (root.val === p.val) return p;
  if (root.val === q.val) return q;
  let left = findLac(root.left, p, q);
  let right = findLac(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left ? left : right;
};

const shortestDist = (root, p, q) => {
  let lac = findLac(root, p, q);
  if (lac === null) return 0;
  let dist1 = distance(lac, p);
  let dist2 = distance(lac, q)
  return (dist1!==-1?dist1:0)+ (dist2!==dist2?dist2:0)
  
  
};

const distance = (lac, target) => {
  if (lac === null) return -1;
  if (lac.val === target.val) return 0;
  let left = distance(lac.left, target);
  if (left !== -1) return left + 1;
  let right = distance(lac.right, target);
  if (right !== -1) return right + 1;
  return -1 // this return executes only when both left and right subtree of a root does not contain the target
};

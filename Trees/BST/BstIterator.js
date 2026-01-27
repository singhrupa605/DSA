var findTarget = function (root, k) {
  let a = new BSTIterator(root, false);
  let b = new BSTIterator(root, true);

  let i = a.next();
  let j = b.next();
  while (i < j) {
    if (i + j === k) return true;
    if (i + j < k) {
      i = a.next();
    } else {
      j = b.next();
    }
  }
  return false;
};

var BSTIterator = function (root, isReverse) {
  this.stack = [];
  this.isReverse = isReverse;
  this.pushAll(root);
};

BSTIterator.prototype.pushAll = function (node) {
  while (node) {
    this.stack.push(node);
    if (this.isReverse) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
};

BSTIterator.prototype.next = function (node) {
  let popped = this.stack.pop();
  if (this.isReverse) {
    this.pushAll(popped.left);
  } else {
    this.pushAll(popped.right);
  }

  return popped.val;
};

BSTIterator.prototype.hasNext = function (node) {
  return this.stack.length !== 0;
};

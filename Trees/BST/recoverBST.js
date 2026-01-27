var recoverTree = function (root) {
  let a = new BSTIterator(root);
  let prev = a.next();
  let voil1 = null,
    voilwith = null,
    voil2 = null,
    counter = 0;
  let curr = null;
  while (a.hasNext()) {
    curr = a.next();
    if (prev.val > curr.val) {
      if (counter === 0) {
        voil1 = prev;
        voilwith = curr;
      } else if (counter === 1) {
        voil2 = curr;
      }
      counter++;
    }
    prev = curr;
  }
  if (voil2) {
    a.swap(voil2, voil1);
  } else {
    a.swap(voil1, voilwith);
  }
};

var BSTIterator = function (root) {
  this.stack = [];
  this.pushAll(root);
};

BSTIterator.prototype.pushAll = function (node) {
  while (node) {
    this.stack.push(node);

    node = node.left;
  }
};

BSTIterator.prototype.hasNext = function () {
  return this.stack.length !== 0;
};

BSTIterator.prototype.swap = function (node1, node2) {
  let temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
};
BSTIterator.prototype.next = function (node) {
  let popped = this.stack.pop();
  this.pushAll(popped.right);
  return popped;
};

/// Wiithout BSTIterator

var recoverTree = function (root) {
  let prev = (voil1 = voilwith = voil2 = null);

  const swap = function (node1, node2) {
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
  };
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    if (prev && prev.val > root.val) {
      if (!voil1) {
        voil1 = prev;
        voilwith = root;
      } else if (!voil2) {
        voil2 = root;
      }
    }
    prev = root;
    inorder(root.right);
  };
  inorder(root);

  if (voil2) {
    swap(voil1, voil2);
  } else {
    swap(voil1, voilwith);
  }
};

class Solution {
  reverse(node) {
    let prev = null;
    let temp = node;
    while (temp) {
      let nextNode = temp.next;
      temp.next = prev;
      prev = temp;
      temp = nextNode;
    }
    return prev;
  }

  addOne(node) {
    // your code here
    let head = this.reverse(node);
    let curr = head,
      carry = 1;
    while (curr) {
      let total = carry + curr.data;
      curr.data = total % 10;
      carry = Math.floor(total / 10);
      if (!carry) {
        break;
      }
      curr = curr.next;
    }

    if (carry === 1) {
      let newNode = new Node(1);
      newNode.next = this.reverse(head);
      return newNode;
    } else {
      return this.reverse(head);
    }
  }
}

// Recursive

class Solution {
  helper(node) {
    if (!node) return 1;
    let carry = this.helper(node.next);
    node.data += carry;
    if (node.data < 10) {
      return 0;
    }

    node.data = 0;
    return 1;
  }

  addOne(node) {
    // your code here
    let carry = this.helper(node);
    if (carry) {
      let newNode = new Node(1);
      newNode.next = node;
      return newNode;
    }
    return node;
  }
}

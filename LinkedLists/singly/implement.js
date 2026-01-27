class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(val) {
    const node = new LinkNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  insertAtTail(val) {
    const node = new LinkNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deleteValue(val) {
    if (!this.head) return null;

    if (this.head.val === val) {
      const deleted = this.head;
      this.head = this.head.next;

      if (!this.head) this.tail = null;
      deleted.next = null;
      return deleted;
    }

    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
        if (curr === this.tail) this.tail = prev;
        curr.next = null;
        return curr;
      }
      prev = curr;
      curr = curr.next;
    }

    return null;
  }

  insertAfter(targetValue, newValue) {
    if (!this.head) return;
    let node = new LinkNode(newValue);
    let curr = this.head;
    while (curr) {
      if (curr.val === targetValue) {
        node.next = curr.next;
        curr.next = node;
        if ((this.tail = curr)) {
          this.tail = node;
        }
        return;
      }
      curr = curr.next;
    }
  }
  searchValue(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }

  printList() {
    let curr = this.head;
    let output = "";

    while (curr) {
      output += curr.val + " -> ";
      curr = curr.next;
    }

    console.log(output + "null");
  }
}

module.exports  = {LinkedList,LinkNode}
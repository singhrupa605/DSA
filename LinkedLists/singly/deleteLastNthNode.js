/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;
  let count = 0,
    curr = head;

  while (curr) {
    count++;
    curr = curr.next;
  }
  if (count === n) {
    head = head.next;
    return head;
  }
  let pos = count - n,
    temp = head;
  console.log(pos);
  let counter = 0;
  while (temp) {
    counter++;
    if (counter === pos && temp.next) {
      let nextNode = temp.next.next;
      temp.next.next = null;
      temp.next = nextNode;
      return head;
    }

    temp = temp.next;
  }
  return head;
};

var removeNthFromEnd = function (head, n) {
  let slow = head,
    fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) {
    head = head.next;
    return head;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  let temp = slow.next;
  slow.next = slow.next.next;
  temp.next = null;

  return head;
};

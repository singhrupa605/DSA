function nthNode(head, n) {
  if (!head) return null;
  let slow = head,
    count = 0,
    fast = head;
  while (fast && count < n) {
    fast = fast.next;
    count++;
  }
  if (!fast) {
    head = head.next;
    return head;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return head;
}

let ans = new Array(5)

console.log(ans[2][3])

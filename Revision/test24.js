function isPalindrome(head) {
  if (!head || !head.next) return true;

  let ans = true;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = reverse(slow.next);
  let p2 = prev, p1 = head;
  while (p2) {
    if (p1.val !== p2.val) {
      ans = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  let temp = reverse(slow.next);
  slow.next = temp;
  return ans;
}

function reverse(curr) {
  let prev = null;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

var reverseBetween = function (head, left, right) {
  if (left === right || !head) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  for (let i = 0; i < right - left; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }
  return dummy.next;
};

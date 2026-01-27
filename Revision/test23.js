function deleteNth(head, n) {
  let dummy = new LinkNode(0);
  dummy.next = head;
  let slow = dummy,
    fast = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while(fast.next)
  {
       slow=slow.next;
       fast=fast.next
  }
  slow.next = slow.next.next;
  return dummy.next

}

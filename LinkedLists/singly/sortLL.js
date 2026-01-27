var sortList = function (head) {
  function helper(head) {
    if (!head || !head.next) return head;
    let [left, right] = findMid(head);
    let l = helper(left);
    let r = helper(right);
    return merge(l, r);
  }
  return helper(head);
};
var findMid = function (head) {
  if (!head || !head.next) return [head, null];
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let l2 = slow.next;
  slow.next = null;
  return [head, l2];
};
var merge = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let curr1 = l1,
    curr2 = l2,
    dummy = new ListNode(0),
    temp = dummy;
  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      temp.next = curr1;
      curr1 = curr1.next;
    } else {
      temp.next = curr2;
      curr2 = curr2.next;
    }
    temp = temp.next;
  }
  temp.next = curr1 || curr2;

  return dummy.next;
};

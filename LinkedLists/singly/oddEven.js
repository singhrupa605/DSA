/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head,
    even = head.next;
  let evenHead = even;
  while (odd && odd.next && even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;

  // let arr = []

  // const helper = (temp) => {
  //     while (temp) {
  //         arr.push(temp.val)
  //         if (temp.next) {
  //             temp = temp.next.next
  //         }
  //         else {
  //             temp = null;
  //         }

  //     }
  // }
  // helper(head)
  // helper(head.next)
  // let curr = head, i = 0;
  // while (curr) {
  //     curr.val = arr[i];
  //     i++;
  //     curr = curr.next
  // }

  // return head;
};

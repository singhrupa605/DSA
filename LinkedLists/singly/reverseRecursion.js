class Solution {
    
    
    reverseList(head) {
           
             if(!head || !head.next) return head;
             
              let res = this.reverseList(head.next)
              res.next  = head
              head.next = null
              return res
    }
}
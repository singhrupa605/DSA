

function flatten(head)
{
   if(!head || !head.next) return head;
   let merged =  flatten(head.next)

   return merge(head, merged )
   

}

function merge(l1, l2)
{
      if(!l1) return l2 
      if(!l2) return l1
      let temp1 = l1 , temp2= l2, dummy = new Node(0);
      dummy.next = null, dummy.bottom = null, res=dummy;
      while(temp1 && temp2)
      {
         if(temp1.data<temp2.data)
         {
            res.bottom = temp1
            temp1 = temp1.bottom
         }
         else{
            res.bottom = temp2
            temp2 = temp2.bottom
         }
         res = res.bottom;
         res.next = null
      }
      res.bottom = temp1||temp2
      res.next = null
      return dummy.bottom       

}
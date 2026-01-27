var kthSmallest = function(root, k) {
      
      let counter = 0;
      let ans = root.val
      while(root)
      {
         if(!root.left)
         {
              ans = root.val;
              counter++;   
              root=root.right
         }
         else
         {
            let curr = root.left;
            while(curr.right && curr.right!==root)
            {
                curr = curr.right;
            }
            if(!curr.right)
            {
                 curr.right = root;
                 root = root.left
            }
            else
            {
                 curr.right =  null;
                 ans = root.val;
                 counter++;
                 root=root.right;
            }
         }
         if(counter===k)
         {
            return ans;
         }
      }
      return ans;

};

function maxDepth (root)
{
    if(!root) return 0;

    let left  = maxDepth(root.left);
    let right = maxDepth(root.right);
    return 1 + Math.max(left, right)
}


function diameter (root)
{
    let diameter = 0;

    const helper = (root)=> 
    {
         if(!root) return 0;
         let left  = helper(root.left)
         let right  = helper(root.right)
         diameter = Math.max(left+right , diameter) 
         return 1+Math.max(left, right)
    }

}

function balanced(root)
{  
    
      const helper = (root)=>
      {
          if(!root) return 0;
        
          let left  = helper(root.left)
          if(left===-1) return -1
          let right  = helper(root.right)
          if(right===-1) return -1
          if(Math.abs(right-left)>1)
          {
                return -1;
          }
           return 1+Math.max(left, right)
      }
      return helper(root)!==-1
}



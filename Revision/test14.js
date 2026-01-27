var lowestCommonAncestor = function(root, p, q) {
    
    if(!root) return null;
    if(root===p) return p;
    if(root===q) return q;
   let left  =  lowestCommonAncestor(root.left,p,q)
   let right = lowestCommonAncestor(root.right,p,q)
   if(left && right) return root;
   return left?left:right
};
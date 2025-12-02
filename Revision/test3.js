// function countNodes(root)
// {
//     if(!root) return 0
//     let left = countNodes(root.left);
//     let right = countNodes(root.right);
//     return left + right+root.val
// }

const countMax = (root) => {
  if (!root) return 0;
  let left = countMax(root.left);
  let right = countMax(root.right);
  return Math.max(left, right, root);
};

const search = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return search(root.left, target) || search(root.right, target);
};

const countLeaf = (root, count) => {
  if (!root) return 0;
  if (!root.left && !root.right) {
    count++;
  }
  countLeaf(root.left, count);
  countLeaf(root.right, count);
  return count;
};

const sumn = (n) => {
  if (n === 0) return 0;
  return n + sumn(n - 1);
};

function countDigits(n) {
  if (n < 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}

const addDigits = (n, sum=0) => {
   if(n<10)
   {
      return sum+n
   }
   else{
     sum+=n%10
   }
   return addDigits(Math.floor(n/10), sum)

};

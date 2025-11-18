const MaxHeap = require("./maxHeap");

function kClosest(n, k, nums) {
  const heap = new MaxHeap((a,b)=>a.key-b.key);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]!==n)
    {
          heap.insertKeyValue(Math.abs(n - nums[i]), nums[i]);
    }
    if (heap.getSize() > k) {
      heap.extractMax();
    }
  }
 
  for (let i = 0; i < k; i++) {
    ans.push(heap.heap[i].value);
  }

  console.log(ans);
}

kClosest(7, 3, [5, 6, 7, 8, 9]);

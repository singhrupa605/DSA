const MaxHeap = require("./maxHeap")

function findKthSmallest(k, nums) {
  let heap = new MaxHeap();
  for (let num of nums) {
    heap.insert(num);
    if (heap.getSize() > k) {
      heap.extractMax();
    }
  }
  console.log(heap.getMax());
}

findKthSmallest(3, [2, 4, 6, 1, 7, 8]);

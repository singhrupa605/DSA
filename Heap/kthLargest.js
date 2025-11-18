const MinHeap = require("./minHeap")


function findKthLargest(k, nums)
 {
    let heap = new MinHeap()

    for(let num of nums )
    {
         heap.insert(num)
         if(heap.getSize()>k)
         {
            heap.extractMin()
         }
    }

    return heap.heap[0]
 }

 console.log(findKthLargest(3, [2,4,6,1,7,8]))
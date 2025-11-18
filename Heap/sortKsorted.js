const MinHeap = require("./minHeap")

function sortKsorted  (k, nums)
{
   const heap  = new MinHeap();
   let index = 0;
   for(let i=0;i<nums.length;i++)
   {
       heap.insert(nums[i])
       if(heap.getSize()>k)
       {
         let min =   heap.extractMin()
         nums[index] = min
         index++;
       }
   }


   while(index<nums.length)
   {
     nums[index] = heap.extractMin()
     index++;
   }
  console.log(nums)
}


sortKsorted(3,[6,5,3,2,8,10,9])


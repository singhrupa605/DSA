const MinHeap = require("./minHeap");


const freqSort = (nums)=>
{
   const map  = new Map();
   let heap =  new MinHeap((a,b)=>a.freq-b.freq)
   for(let num of nums)
   {
         map.set(num , (map.get(num)||0) + 1)
   }
   for(let [key, value] of map.entries())
   {
        let node  = {key, freq:value}
        heap.insert(node)
            
   }
   nums = [];
   while(heap.getSize()>0)
   {    
        let {key, freq} = heap.extractMin();   
        for(let i = 0;i<freq;i++)
        {
           nums.push(key) 
        }
   }
   console.log(nums)
}


freqSort([1,1,2,3,3,3,3])
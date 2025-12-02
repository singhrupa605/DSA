const twoSum =  (arr, target)=>
{   let map =new Map(), ans=[]
     for(let i = 0;i<arr.length;i++)
     {
        if(map.has(target-arr[i]))
        {
            return [i, map.get(target-arr[i])]
        }
        map.set(arr[i], i)
     }
}
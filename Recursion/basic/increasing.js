function isIncreasing(arr, i)
{
     if(i===arr.length-1) return true
     if(arr[i]>arr[i+1]) return false
     return isIncreasing(arr, i+1)


}
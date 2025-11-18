let arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [0, 1, 2, 2,3];
let arr4 = [0,0,0,0]

//------------------My Approach-------------------------------------------

// const removeDupes = (arr) => {
//   let i = 0,
//     j = 0,
//     count = 1;

//   while (j < arr.length) {
//     while (arr[i] === arr[j] && j < arr.length) {
//       j++;
//     }
//     if (j < arr.length && arr[i] !== arr[j]) {
//       arr[i + 1] = arr[j];
//        count++;
//       i++;
//     }
//   }
  
//   console.log(arr.slice(0, count))
// };


//------------------ Better Approach-----------------------------

const removeDupes = (arr)=>
{
     let i = 0;
     for(let j = 1;j<arr.length;j++)
     {
        if(arr[j]!==arr[i])
        {
            i++;
            arr[i] = arr[j]
        }
     }

     console.log(arr.slice(0,i+1))
}


removeDupes(arr1);

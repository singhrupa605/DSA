const arr = [
  [2, 3, 4],
  [3, 4, 5],
  [5, 6, 7],
];

const matrixSum = (arr) => {

    let temp = []

    for(let i = 0;i<arr.length;i++)
    {  
        let t1 = []
        for(let j = 0;j<arr.length;j++)
        {
            t1.push(0)
        }
        temp.push(t1)
    }
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) 
        {
        
               if(i===0)
               {
                temp[j][i] = arr[j][i]
               }
                temp[j][i] = 
            
          
    }
  }
};

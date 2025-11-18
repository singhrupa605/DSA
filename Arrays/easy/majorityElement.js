let arr1 = [3,1,1,3,3];

let arr2 = [1,2,3,4,4]

// Majority Element always exists 

const majorityElementGauranteed = (arr) => {
  let count = 0,
    res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (count === 0 || arr[i] === res) {
      res = arr[i];
      count++;
    } else if (arr[i] !== res) {
      count--;
    }
    if (count > arr.length / 2) {
      break;
    }
  }
  console.log(res);
};


// Majority Element may or may not exists

const majorityElementNotGauranteed = (arr) => {
  let count = 0,res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (count === 0 || arr[i] === res) {
      res = arr[i];
      count++;
    } else if (arr[i] !== res) {
      count--;
    }
    if (count > arr.length / 2) {
      break;
    }
  }
  count = 0;
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]===res)
    {
        count++;
    }
  }

  res =  count>arr.length/2?res : -1
  console.log(res);
};


majorityElementGauranteed(arr1)
majorityElementNotGauranteed(arr1)
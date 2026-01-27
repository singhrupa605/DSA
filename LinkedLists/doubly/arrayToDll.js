const {LinkedList,LinkNode} = require("../implement.js")

const array  = [1,2,3,4]

function convert(arr)
{  
    let list = new LinkedList();
    if(arr.length===0) return list;
    list.head = new LinkNode(arr[0])
    let back  = list.head;
    for(let i = 1;i<arr.length;i++)
   { 
         let node  = new LinkNode(arr[i])
         back.next =  node;
         node.prev = back
         back = node;
   }
   back.next =  null;
   list.tail = back;
   return list;
}

let circList  = convert(array)
circList.printList()

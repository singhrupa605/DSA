const MinHeap = require("./minHeap");

const connectRopes = (ropes) => {
  let heap = new MinHeap(),
    totalCost = 0;
  for (let rope of ropes) {
    heap.insert(rope);
  }

  while (heap.getSize() > 1) {
    let rope1 = heap.extractMin(),
      rope2 = heap.extractMin();

    let newRope = rope1 + rope2;
    totalCost += newRope;
    heap.insert(newRope);
  }

  console.log(totalCost);
};

connectRopes([1, 2, 3, 4, 5]);

class MinHeap {
  constructor(compareFn) {
    this.heap = [];
       this.compare = compareFn || ((a, b) => a - b);
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.compare(this.heap[this.getParentIndex(index)] , this.heap[index])>0
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyDown(i = 0) {
    let leftChild = this.getLeftChildIndex(i);
    let rightChild = this.getRightChildIndex(i);
    let smallest = i;
    if (
      leftChild < this.heap.length &&
      this.compare(this.heap[leftChild], this.heap[smallest])<0
    ) {
      smallest = leftChild;
    }
    if (
       rightChild < this.heap.length &&
      this.compare(this.heap[rightChild] , this.heap[smallest])<0
    ) {
      smallest = rightChild;
    }
    if (smallest !== i) {
      this.swap(smallest, i);
      this.heapifyDown(smallest);
    }
  }

  extractMin() {
    if(this.heap.length===0) return null
    if(this.heap.length ===1) return this.heap.pop()
    let root = this.heap[0];
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return root;
  }

  getMin()
  {
      return this.heap[0]
  }
  getSize()
  {
    return this.heap.length;
  }
}


module.exports = MinHeap




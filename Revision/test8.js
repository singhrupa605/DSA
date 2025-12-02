class MinHeap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn || ((a, b) => a - b);
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.compare(this.heap[index], this.heap[this.getParentIndex(index)]) < 0
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyDown(index) {
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    let smallest = index;
    if (
      left < this.heap.length &&
      this.compare(this.heap[left], this.heap[smallest]) < 0
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.compare(this.heap[right], this.heap[smallest]) < 0
    ) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapifyDown(smallest);
    }
  }

  removeTop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }
  peak() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

const kthLargest = (arr, k) => {
  let heap = new MinHeap((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
    if (heap.size() > k) {
      heap.removeTop();
    }
  }

  return heap.peak();
};

const kthSmallest = (arr, k) => {
  let heap = new MinHeap((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
    if (heap.size() > k) {
      heap.removeTop();
    }
  }
  return heap.peak();
};


console.log(kthLargest([3, 2, 1, 5, 6, 4], 2));

console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));


console.log(kthSmallest([3, 2, 1, 5, 6, 4], 2));

console.log(kthSmallest([3,2,3,1,2,4,5,5,6], 4));

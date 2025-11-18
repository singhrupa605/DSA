class MaxHeap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn || ((a, b) => a - b);
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return 2 * index + 1;
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
      this.compare(this.heap[index] , this.heap[this.getParentIndex(index)]) > 0
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyDown(index = 0) {
    let largest = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if (
      left < this.heap.length &&
      this.compare(this.heap[left] , this.heap[largest]) > 0
    ) {
      largest = left;
    }
    if (
      right < this.heap.length &&
      this.compare(this.heap[right] , this.heap[largest]) > 0
    ) {
      largest = right;
    }
    if (index !== largest) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

  getMax() {
    return this.heap[0];
  }

  getSize() {
    return this.heap.length;
  }

  insertKeyValue(key, value) {
    this.heap.push({ key, value });
    this.heapifyUp();
  }
}
module.exports = MaxHeap;

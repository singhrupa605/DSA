class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.items[this.front];
    this.front++;
    if (this.front * 2 > this.size()) {
      this.items = this.items.slice(this.front);
       this.front = 0;
    }
    return value;
  }
  peek()
  {
     return this.items[this.front]
  }

}

module.exports =  Queue

module.exports = class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0; 
  }
  enqueue(item) {
    this.queue[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    const item = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return item;
  }
  deleteID(id) {
    if(!(id in this.queue)) {
      return -1;
    }
    const item = this.queue[id];
    delete this.queue[id];
    if(id === this.head) {
      this.head++;
    }
    else if(id + 1 === this.tail) {
      this.tail--;
    }
    return item;
  }
  peek() {
    return this.queue[this.head];
  }
  peekHeadID() {
    return this.head;
  }
  peekTailID() {
    return this.tail;
  }
  length() {
    return this.tail - this.head; 
  }
  isEmpty() {
    return Object.keys(this.queue).length === 0; 
  }
  printQueue() {
    return this.queue;
  }
}
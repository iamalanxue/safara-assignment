const Queue = require('./Queue.js');

// const queueMock = jest.spyOn(Queue.prototype, 'enqueue').mockImplementation((item) => {
//   console.log('mocked function')
// });

// test('queue enqueue', () => {
//   const q = new Queue();
//   q.enqueue(20);
//   expect(queueMock).toHaveBeenCalled();
// })

test('queue dequeue test', () => {
  const q = new Queue();
  q.enqueue(3);
  q.enqueue(5);
  expect(q.dequeue()).toBe(3);
});

test('queue peek test', () => {
  const q = new Queue();
  q.enqueue(10);
  q.enqueue(22);
  expect(q.peek()).toBe(10);
});

test('queue isEmpty test true', () => {
  const q = new Queue();
  expect(q.isEmpty()).toBe(true);
})

test('queue isEmpty test false', () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.isEmpty()).toBe(false);
});

test('queue length test', () => {
  const q = new Queue();
  q.enqueue(2);
  expect(q.length()).toBe(1);
});

test('queue printQueue test', () => {
  const q = new Queue();
  const mockItems = [1, 2, 3];
  mockItems.forEach(num => q.enqueue(num));
  const mockPrint = {0: 1, 1: 2, 2: 3};
  expect(q.printQueue()).toEqual(mockPrint);
  expect(q.printQueue()).not.toBe(mockPrint);
})





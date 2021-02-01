const Queue = require('../queue/Queue');
const store = require('../../store');

const dogQueue = new Queue();
store.dogQueue.forEach((person) => dogQueue.enqueue(person));

module.exports = {
  get() {
    return dogQueue.all();
  },

  getLengthOfQueue() {
    return dogQueue.all().length;
  },

  enqueue(name) {
    return dogQueue.enqueue(name);
  },

  dequeue(person) {
    return dogQueue.dequeue(person);
  },
};

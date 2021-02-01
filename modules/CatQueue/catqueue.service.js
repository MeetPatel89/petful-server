const Queue = require('../queue/Queue');
const store = require('../../store');

const catQueue = new Queue();
store.catqueue.forEach((person) => catQueue.enqueue(person));

module.exports = {
  get() {
    return catQueue.all();
  },

  getLengthOfQueue() {
    return catQueue.all().length;
  },

  enqueue(name) {
    return catQueue.enqueue(name);
  },

  dequeue(person) {
    return catQueue.dequeue(person);
  },
};

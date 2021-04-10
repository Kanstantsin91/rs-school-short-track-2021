const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  get size() {
    if (!this.value) return 0;
    let counter = 1;
    let currentItem = this;
    while (currentItem.next) {
      currentItem = currentItem.next;
      counter++;
    }
    return counter;
  }

  enqueue(element) {
    if (!this.value) {
      this.value = element;
    } else {
      let currentItem = this;
      while (currentItem.next) {
        currentItem = currentItem.next;
      }
      const added = new ListNode(element);
      currentItem.next = added;
    }
  }

  dequeue() {
    const deletedItem = this.value;
    const currentItem = this;
    while (currentItem.next && currentItem.next.next) {
      this.value = this.next.value;
      this.next = this.next.next;
    }
    return deletedItem;
  }
}

module.exports = Queue;

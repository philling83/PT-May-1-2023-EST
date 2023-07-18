class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  //addToTail
  enqueue(val) {
    const newNode = new Node(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    };

    return this.length;
  };

  //removeFromHead
  dequeue() {
    if (!this.head) return;

    let oldHead = this.head;
    this.head = oldHead.next;
    if (!this.head) this.tail = null;

    this.length--;

    return oldHead.val;
  };

  find(searchVal) {
    let curr = this.head;

    while (curr) {
      if (curr.val === searchVal) {
        return curr;
      };

      curr = curr.next;
    };

    return null;
  };

  size() {
    return this.length;
  };
};

// const queue = new Queue();
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// console.log(queue.find(3))
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()

const hashIt = (word) => {
  return word
    .split('')
    .reduce((res, char) => {
      console.log("res: ", res)
      return Number(char.charCodeAt().toString(2)) + res
    }, 0);
};

console.log(hashIt('alan'))
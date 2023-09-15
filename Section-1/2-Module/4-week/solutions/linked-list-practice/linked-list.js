class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    //!!START
    this.head = null;
    this.length = 0;
    //!!END
  }

  addToHead(val) {
    //!!START
    // O(1)
    const newNode = new LinkedListNode(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    //!!END
  }

  addToTail(val) {
    //!!START
    // O(n)
    let newNode = new LinkedListNode(val);

    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    //!!END
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;

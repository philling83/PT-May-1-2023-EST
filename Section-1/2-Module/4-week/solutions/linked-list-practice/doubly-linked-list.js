class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    //!!START
    this.head = null;
    this.tail = null;
    this.length = 0;
    //!!END
  }

  addToHead(val) {
    //!!START
    // O(1)
    let newNode = new DoublyLinkedListNode(val);

    if (this.length >= 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    //!!END
  }

  addToTail(val) {
    //!!START
    // O(1)
    let newNode = new DoublyLinkedListNode(val);

    if (this.length >= 1) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    //!!END
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;

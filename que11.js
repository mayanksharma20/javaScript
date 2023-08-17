class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Add a new node to the beginning of the list
    addAtBeginning(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    // Add a new node to the end of the list
    addAtEnd(data) {
      const newNode = new Node(data);
      if (!this.tail) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Add a new node at a particular position in the list
    addAtPosition(data, position) {
      if (position < 0) return;
      const newNode = new Node(data);
      let current = this.head;
      let index = 0;
      while (current && index < position) {
        current = current.next;
        index++;
      }
      if (!current) {
        this.addAtEnd(data);
      } else {
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
    
    // Print the list
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Driver code
  const list = new DoublyLinkedList();
  list.addAtBeginning(1);
  list.addAtEnd(2);
  list.addAtPosition(3, 1);
  list.printList();
  
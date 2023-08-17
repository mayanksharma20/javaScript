// Node class for creating nodes of doubly circular linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Doubly circular linked list class
  class DoublyCircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // insert operation to add new node at the end of the list
    insert(data) {
      const node = new Node(data);
  
      if (!this.head) {
        // if list is empty
        this.head = node;
        this.tail = node;
        node.next = this.head;
        node.prev = this.tail;
      } else {
        // if list is not empty
        node.prev = this.tail;
        this.tail.next = node;
        node.next = this.head;
        this.head.prev = node;
        this.tail = node;
      }
  
      this.length++;
    }
  
    // delete operation to remove a node from the list
    delete(data) {
      let current = this.head;
  
      while (current) {
        if (current.data === data) {
          if (this.length === 1) {
            // if list has only one node
            this.head = null;
            this.tail = null;
          } else if (current === this.head) {
            // if node to be deleted is the head node
            this.head = current.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
          } else if (current === this.tail) {
            // if node to be deleted is the tail node
            this.tail = current.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
          } else {
            // if node to be deleted is in the middle of the list
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
  
          this.length--;
          return true;
        }
  
        current = current.next;
      }
  
      return false;
    }
  
    // traverse operation to print all nodes in the list
    traverse() {
      let current = this.head;
  
      while (current) {
        console.log(current.data);
        current = current.next;
  
        if (current === this.head) {
          // loop completed as we have reached back to the head node
          break;
        }
      }
    }
  }
  
  // Driver code to test the implementation
  const list = new DoublyCircularLinkedList();
  
  // insert some nodes
  list.insert(10);
  list.insert(20);
  list.insert(30);
  list.insert(40);
  
  // print the list
  console.log("List after inserting nodes:");
  list.traverse();
  
  // delete some nodes
  list.delete(20);
  list.delete(40);
  
  // print the list again
  console.log("List after deleting nodes:");
  list.traverse();
  
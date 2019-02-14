class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode
    }

    this.length += 1;
    return this
  }
  pop() {
    if (this.head === null) return undefined;
    var poppedNode = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode
  }
  shift() {
    if (this.head === null) return undefined;
    var oldHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }
}

let list = new DoublyLinkedList();
let newList = new DoublyLinkedList();
list.push("one");
list.push("two");
list.push("three")
// console.log(list.pop(), " <= popped");
// console.log(list);
console.log(list.shift(), "<= list.shift()");
console.log(list.shift(), "<= list.shift()");
console.log(list.shift(), "<= list.shift()");
console.log(list.shift(), "<= list.shift()");
console.log("**********************************");
console.log(list);

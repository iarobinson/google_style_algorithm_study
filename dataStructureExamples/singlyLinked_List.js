// Piece of data -val

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;

  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this
  }
  get(num) {
    if (num < 0 || num >= this.length) { return null; }
    let count = 0;
    let searchedForNode = this.head;
    while (count < num) {
      this.next
      if (count == num - 1) {
        searchedForNode = this.head
      }
      count += 1;
    }
    return searchedForNode;
  }
  set(position, value) {
    let targetNode = get(position);
    if (targetNode == null) return false;
    targetNode.value = value;
    return true;
  }
  insert(position, value) {
    if (position < 0 || position > this.length) return false;
    if (position === this.length) {
      this.push(value);
      return true;
    }
    if (position === 0) unshift(value);
    let newTargetNode = newNode(value);
    let tailTargetNode = this.get(position - 1);
    let headTargetNode = this.get(position);
    tailTargetNode.head = newTargetNode.tail;
    headTargetNode.tail = newTargetNode.head;
    this.length += 1;
    return true;
  }
  remove(position) {
    if (position < 0 || postion > this.length) return undefined;
    if (position === this.length) return this.pop();
    if (position === 0) return this.shift();
    let targetNode = this.get(position - 1);
    let removedNode = this.get(position);
    targetNode.next = removedNode.next;
    this.length -= 1;
  }
}

var myList = new SinglyLinkedList();
// myList.push("hello");
myList.push("one");
myList.push("two");
myList.push("three");
myList.remove(0);

console.log(myList.length);

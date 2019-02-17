class Node {
  constructor(val) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.rool = null;
  }

  BFS() {
    var data = [], queue = [], node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

var tree = new BinarySearchTree()

console.log(tree.BFS())

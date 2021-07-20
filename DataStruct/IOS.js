class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      return (this.root = new Node(value));
    }
    let current = this.root;
    while (current) {
      if (current.value > value) {
        if (!current.left) {
          return (current.left = new Node(value));
        }
        current = current.left;
      }
      if (current.value < value) {
        if (!current.right) {
          return (current.right = new Node(value));
        }
        current = current.right;
      }
    }
  }

  BFS(childValue) {
    let queue = [],
      visited = [],
      current = this.root;
    queue.push(current);
    while (queue.length) {
      let firstItem = queue.shift();
      if (firstItem.value > childValue) visited.push(firstItem.value);
      if (firstItem.left) queue.push(firstItem.left);
      if (firstItem.right) queue.push(firstItem.right);
    }
    let result = Math.min(...visited);
    return result;
  }
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(8);
tree.insert(22);
tree.insert(12);
tree.insert(4);
tree.insert(14);
tree.insert(10);

tree.BFS(10);

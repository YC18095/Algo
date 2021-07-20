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

  insertRecursive(value, current = this.root) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    if (!current.left && current.value > value) {
      current.left = new Node(value);
      return this;
    }
    if (!current.right && current.value < value) {
      current.right = new Node(value);
      return this;
    }
    if (current.value > value) {
      return this.insertRecursive(value, current.left);
    }
    if (current.value < value) {
      return this.insertRecursive(value, current.right);
    }
  }

  insert(value) {
    if (!this.root) {
      return (this.root = new Node(value));
    }
    let current = this.root;
    while (current) {
      if (current.value === value) return value;
      if (current.value > value) {
        if (!current.left) {
          return (current.left = new Node(value));
        } else {
          current = current.left;
        }
      }
      if (current.value < value) {
        if (!current.right) {
          return (current.right = new Node(value));
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else return current;
    }
    if (!current) return false;
  }
}

let tree = new BinarySearchTree();
// tree.root = new Node(6)
// tree.root.left = new Node(4)
// tree.root.right = new Node(7)
// tree.insert(8)
// tree.insert(3)
// tree.insert(14)
// tree.insert(9)
// tree.insert(10)
// tree.insert(12)
// tree.insert(11)
tree.insertRecursive(20);
tree.insertRecursive(14);
tree.insertRecursive(20);
// tree.insertRecursive(19)
// tree.insertRecursive(62)
// tree.insertRecursive(31)
// tree.insertRecursive(3)
// tree.insertRecursive(72)
// tree.insertRecursive(11)
// tree.insertRecursive(9)

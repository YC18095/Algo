class LCA {
  constructor() {
    this.tree = null;
  }

  insert(value) {
    if (!this.root) {
      return (this.root = new Node(value));
    }
    let queue = [this.root];
    while (queue) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      else return (current.left = new Node(value));
      if (current.right) queue.push(current.right);
      else return (current.right = new Node(value));
    }
  }

  isSymmetricTree(root) {
    if (!root) return null;
    return this.symmetricHelper(root, root);
  }

  symmetricHelper(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    let L = this.symmetricHelper(t1.left, t2.right);
    let R = this.symmetricHelper(t1.right, t2.left);
    if (L && R && t1.value === t2.value) {
      return true;
    } else {
      return false;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

let tree = new LCA();
tree.insert(1);
tree.insert(2);
tree.insert(3);

tree.isSymmetricTree(tree.root);

class BNT {
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (!root1 || !root2) return root1 || root2;
  root1.value += root2.value;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

let treeA = new BNT();
let treeB = new BNT();

treeA.root = new Node(1);
treeA.root.left = new Node(3);
treeA.root.right = new Node(2);
treeA.root.left.left = new Node(5);

treeB.root = new Node(2);
treeB.root.left = new Node(1);
treeB.root.right = new Node(3);

treeB.root.left.right = new Node(4);
treeB.root.right.right = new Node(7);

mergeTrees(treeA.root, treeB.root);

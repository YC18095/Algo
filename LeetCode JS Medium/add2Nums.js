class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class singlyLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length += 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length += 1;
    }
  }

  pop() {
    if (!this.length) return undefined;
    let pre = null;
    let current = this.head;
    for (let i = 1; i <= this.length; i++) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length -= 1;
      } else if (current.next === null && this.length > 1) {
        this.tail = pre;
        this.tail.next = null;
        this.length -= 1;
      } else {
        pre = current;
        current = current.next;
      }
    }
  }

  add2Num(node1, node2) {
    if (!node1 && !node2) return null;
    let nodeResult = null;
    let node = null;
    let string1 = '';
    let string2 = '';
    while (true) {
      if (node1) {
        string1 = string1 + (node1 && node1.value.toString()); // 4,6,5
        node1 = node1.next;
      }
      if (node2) {
        string2 = string2 + (node2 && node2.value.toString()); // 3,4,2
        node2 = node2.next;
      }
      if (!node1 && !node2) break;
    }
    let sum = (parseInt(string1) + parseInt(string2)).toString(); // 807
    let i = sum.length - 1; // 3
    while (i >= 0) {
      if (!nodeResult) nodeResult = new Node(sum[i]); // 2
      nodeResult.next = new Node(sum[i]);
      nodeResult = nodeResult.next;
      i--;
    }
    return node;
  }

  add2Nums(node1, node2) {
    if (!node1 && !node2) return node;
    //         if(!node1 && node2) return {addition:0 ,node : new Node(node2.value)}
    //         if(!node2 && node1) return {addition:0 , node: new Node(node1.value)}
    let result = this.add2Nums(
      (node1 && node1.next) || null,
      (node2 && node2.next) || null
    );
    let sum =
      (node1 && node1.value) +
      (node2 && node2.value) +
      (result && result.addition);
    let lengthofNode = sum.toString();
    if (lengthofNode.length > 1) {
      let addition = parseInt(lengthofNode[0]);
      let node = new Node(parseInt(lengthofNode[1]));
      node.next = result.node;
      return {
        addition: addition,
        node: node,
      };
    }
    if (result) {
      let node = new Node(sum);
      node.next = result.node;
      return {
        addition: 0,
        node: node,
      };
    } else {
      return {
        addition: 0,
        node: new Node(sum),
      };
    }
  }
}

let a = new singlyLinkedList();
a.push(1);
a.push(2);
a.push(3);
a.push(4);

let b = new Node(9);
b.next = new Node(9);
b.next.next = new Node(9);
b.next.next.next = new Node(9);
b.next.next.next.next = new Node(9);
b.next.next.next.next.next = new Node(9);
b.next.next.next.next.next.next = new Node(9);

let c = new Node(9);
c.next = new Node(9);
c.next.next = new Node(9);
c.next.next.next = new Node(9);

a.add2Num(b, c);

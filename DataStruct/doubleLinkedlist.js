class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.pre = null;
  }
}

class doublyLinkedList {
  constructor(value) {
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
      //         this.tail.next.pre = this.tail
      newNode.pre = this.tail;
      //         this.tail = this.tail.next
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removeTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.pre;
      this.tail.next = null;
    }
    removeTail.pre = null;
    this.length--;
    return removeTail;
  }

  shift() {
    if (!this.head) return undefined;
    let removeHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeHead.next;
      removeHead.next.pre = null;
      removeHead.next = null;
    }
    this.length--;
    return removeHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head.pre = newNode;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return newNode;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    if (index < this.length / 2) {
      console.log('Start from Head');
      let currentHead = this.head;
      let countHead = 1;
      while (countHead <= index) {
        currentHead = currentHead.next;
        countHead++;
      }
      return currentHead;
    } else {
      console.log('Start from Tail');
      let currentTail = this.tail;
      let countTail = this.length - 1;
      while (countTail > index) {
        currentTail = currentTail.pre;
        countTail--;
      }
      return currentTail;
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) this.push(value);
    if (index === 0) this.unshift(value);
    let newNode = new Node(value);
    let nodeAtIndex = this.get(index);
    let preNode = nodeAtIndex.pre;
    preNode.next = newNode;
    newNode.pre = preNode;
    newNode.next = nodeAtIndex;
    nodeAtIndex.pre = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) this.shift();
    if (index === this.length) this.pop();
    let nodeAtIndex = this.get(index);
    let before = nodeAtIndex.pre;
    let after = nodeAtIndex.next;
    nodeAtIndex = null;
    before.next = after;
    after.pre = before;
    this.length--;
    return true;
  }
}

let double = new doublyLinkedList();
double.push(1);
double.push(2);
double.push(3);
double.push(4);
double.push(5);
double.push(6);

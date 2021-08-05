
//   Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
}
  
 function removeNthNode(head: ListNode | null, n: number): ListNode | null {
    let length: number = 0;
    let current: ListNode = head;
    while (current) {
      length++;
      current = current.next;
    }
  
    if (length === 1) {
      return null;
    }
  
    let preNode: ListNode;
    current = head;
    let i: number = 0;
    while (i < length - n) {
      preNode = current;
      current = current.next;
      i++;
    }
  
    let nextNode: ListNode;
    i = 0;
    current = head;
    while (i <= length - n) {
      nextNode = current;
      current = current.next;
      i++;
    }
  
    if (n === length) {
      head = head.next;
      return head;
    }
  
    if (length === 2 && n === 2) {
      preNode = nextNode.next;
      head = preNode;
      return head;
    }
  
    if (length === 2 && n === 1) {
      head.next = null;
      return head;
    }
    preNode.next = nextNode.next;
    return head;
  
};
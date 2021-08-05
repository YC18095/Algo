/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  if (length === 1) {
    return null;
  }

  let preNode;
  current = head;
  let i = 0;
  while (i < length - n) {
    preNode = current;
    current = current.next;
    i++;
  }

  let nextNode;
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

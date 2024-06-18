
class Node {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

let list1 = new Node(1)
list1.next = new Node(2)
list1.next.next = new Node(4)

let list2 = new Node(1)
list2.next = new Node(3)
list2.next.next = new Node(4)

const mergeTwoLists = function(list1, list2) {
   let dummy = new Node()
    let cur = dummy
    while(list1 && list2) {
        if(list1.value > list2.value) {
            cur.next = list2
            list2 = list2.next
        } else {
            cur.next = list1
            list1 = list1.next
        }
        cur = cur.next
    }
    cur.next = list1 || list2
    return dummy.next
};

mergeTwoLists(list1, list2)



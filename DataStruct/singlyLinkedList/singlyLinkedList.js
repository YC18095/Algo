class Node {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

class singlyLinkedList {
    constructor(value) {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
            this.length += 1
        } else {
            this.tail.next = node
            this.tail = node
            this.length += 1
        }
    }

    pop() {
        if (!this.length)
            return undefined
        let pre = null
        let current = this.head
        for (let i = 1; i <= this.length; i++) {
            if (this.length === 1) {
                this.head = null
                this.tail = null
                this.length -= 1
            } else if ((current.next === null) && this.length > 1) {
                this.tail = pre
                this.tail.next = null
                this.length -= 1
            } else {
                pre = current
                current = current.next
            }
        }
    }

    popOptimize() {
        if (!this.length)
            return undefined
        let current = this.head
        let pre = null
        while (current.next !== null) {
            pre = current
            current = current.next
        }
        if (this.length === 1) {
            this.head = null
            this.tail = null
            pre = undefined
            this.length--;
        } else {
            this.tail = pre
            pre = undefined
            this.tail.next = null
            this.length -= 1
        }
        return current
    }

    shift() {
        if (!this.length)
            return undefined
        let nextNode = this.head.next
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length -= 1
        } else {
            this.head = null
            this.head = nextNode
            this.length -= 1
        }
    }

    shiftOptimize() {
        if (!this.head)
            return undefined
        let current = this.head
        this.head = current.next
        this.length--
        if (this.length === 0)
            this.tail = null
        return current.value
    }

    unshift(value) {
        if (!value)
            return undefined
        let node = new Node(value)
        if (this.length === 0) {
            this.head = node
            this.tail = node
            this.length += 1
        } else {
            node.next = this.head
            this.head = node;
            this.length += 1
        }
    }

    unshiftOptimize(value) {
        let node = new Node(value)
        if (this.length === 0)
            this.tail = node
        node.next = this.head
        this.head = node
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index > this.length)
            return null
        let count = 1
        let currentNode = this.head
        while (count <= index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }

    set(index, value) {
        if (!index || !value)
            return undefined
        let choosenOne = this.get(index)
        choosenOne ? (choosenOne.value = value,
        true) : false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        else if (index === this.length) return !!this.push(value)
        else if (index === 0) return !!this.unshift(value)
                let nodeAtpreIndex
                let newNode = new Node(value)
                newNode.next = this.get(index)
                nodeAtpreIndex = this.get(index - 1)
                nodeAtpreIndex.next = newNode
                this.length++
        return true
    }

    insertOptimize(index, value) {
        if (index < 0 || index > this.length)
            return false
        if (index === this.length)
            this.push(value)
        if (index === 0)
            this.unshift(value)
        let newNode = new Node(value)
        let nodeAtpreIndex = this.get(index - 1)
        let temp = nodeAtpreIndex.next
        newNode.next = temp
        nodeAtpreIndex.next = newNode
        this.length++
        temp = undefined,
        newNode = undefined
        return this
    }

    remove(index) {
        let removeNode
        if (index < 0 || index > this.length)
            return false
        if (index === this.length)
            return this.pop(value)
        if (index === 0)
            return this.shift(value)
        else {
            let nodeAtpreIndex
            removeNode = this.get(index)
            nodeAtpreIndex = this.get(index - 1)
            nodeAtpreIndex.next = this.get(index + 1)
            this.length--
        }
        return removeNode
    }

    removeOptimize(index) {
        if (index < 0 || index > this.length)
            return false
        if (index === this.length)
            this.pop(value)
        if (index === 0)
            this.shift(value)
        let nodeAtpreIndex = this.get(index - 1)
        let removeNode = nodeAtpreIndex.next
        nodeAtpreIndex.next = removeNode.next
        this.length--
        removeNode = undefined
        return this
    }

    reverse() {
        if (!this.length)
            return undefined
        if (this.length === 1)
            return this
        let current = this.head
        let pre = null
          , nextNode = null
        while (current.next) {
            nextNode = current.next
            current.next = pre
            pre = current
            current = nextNode
            this.head = pre
        }
        current.next = this.head
        this.head = current
        this.tail = this.get(this.length - 1)
        return this
    }

    reverseOptimizeSecond() {
        if (!this.length)
            return undefined
        if (this.length === 1)
            return this
        let current = this.head
        this.head = this.tail
        this.tail = current
        let pre = null
          , nextNode = null
        while (current) {
            nextNode = current.next
            current.next = pre
            pre = current
            current = nextNode
        }
        return this
    }

    reverseOptimize() {
        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode
        let nextNode, preNode
        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next
            currentNode.next = preNode
            preNode = currentNode
            currentNode = nextNode
        }
        return this
    }
}

let a = new singlyLinkedList()
a.push(1)
a.push(2)
a.push(3)
a.push(4)

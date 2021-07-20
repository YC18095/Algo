class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
      this.arrayHeap = []
    }

    insertHeap(value, priority) {
      let newNode = new Node(value, priority)
      this.arrayHeap.push(newNode)
      let index = this.arrayHeap.length - 1
      let parrentIndex = Math.floor((index - 1)/2)
      while(parrentIndex > -1) {
        if(this.arrayHeap[parrentIndex].priority < priority) {
            let temp = this.arrayHeap[index] 
            this.arrayHeap[index] = this.arrayHeap[parrentIndex]
            this.arrayHeap[parrentIndex] = temp
            index = parrentIndex
            parrentIndex = Math.floor((index - 1)/2) } 
        else break;
      }
      return this.arrayHeap
    }

    exactMaxHeap() {
      let result = this.arrayHeap[0]
      this.heapSwapExact(this.arrayHeap, 0, this.arrayHeap.length - 1)
      this.arrayHeap.pop()
      this.exactMaxHeapHelper(result)
    }

    exactMaxHeapHelper(result) {
       let array = this.arrayHeap
       let index = 0
       while(true) {
        let leftIndex = 2*index + 1
        let rightIndex = 2*index + 2
        let isTrue = (leftIndex && rightIndex) < array.length ? true : false
        if(isTrue  && (array[leftIndex].priority > array[rightIndex].priority)) {
            if(array[leftIndex].priority > array[index].priority) {
               this.heapSwapExact(array, index, leftIndex)
               index = leftIndex
            } else break
        }
        else if(isTrue && (array[leftIndex].priority < array[rightIndex].priority)) {
          if(array[rightIndex].priority > array[index].priority) {
                  this.heapSwapExact(array, index, rightIndex)
                   index = rightIndex
            } else break
        }
        else break   
       }
       return result
    }

    heapSwapExact(array, index, indexOfSwap) {
        let temp = array[index]
         array[index] = array[indexOfSwap]
         array[indexOfSwap] = temp
         return index
    }
}


let Pqueue = new PriorityQueue()
Pqueue.insertHeap(41, 1)
Pqueue.insertHeap(27, 2)
Pqueue.insertHeap(18, 5)
Pqueue.insertHeap(-12, 8)
Pqueue.insertHeap(33, 4)
Pqueue.insertHeap(55, 6)
Pqueue.insertHeap(-39, 3)
Pqueue.insertHeap(139, 7)
Pqueue.exactMaxHeap()
class Heap {
    constructor() {
      this.arrayHeap = []
    }

    insertHeap(value) {
      this.arrayHeap.push(value)
      let index = this.arrayHeap.length - 1
      let parrentIndex = Math.floor((index - 1)/2)
      while(parrentIndex > -1) {
        if(this.arrayHeap[parrentIndex] < value) {
            let temp = this.arrayHeap[index] 
            this.arrayHeap[index] = this.arrayHeap[parrentIndex]
            this.arrayHeap[parrentIndex] = temp
            index = parrentIndex
            parrentIndex = Math.floor((index - 1)/2) } 
        else break;
      }
      return this.arrayHeap
    }
}


let heap = new Heap()
heap.insertHeap(41)
heap.insertHeap(27)
heap.insertHeap(18)
heap.insertHeap(-12)
heap.insertHeap(33)
heap.insertHeap(55)
heap.insertHeap(-39)
heap.insertHeap(139)
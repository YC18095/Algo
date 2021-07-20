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

    exactMaxHeap() {
      let temp = this.arrayHeap[0]
      this.arrayHeap[0] = this.arrayHeap[this.arrayHeap.length - 1]
      this.arrayHeap[this.arrayHeap.length - 1] = temp
      let result =  temp
      this.arrayHeap.pop()
      this.exactMaxHeapHelper(result)
    }

    exactMaxHeapHelper(result) {
       let array = this.arrayHeap
       let index = 0
       while(true) {
        let leftIndex = (2*index) + 1
        let rightIndex = leftIndex + 1
        if(array[leftIndex] > array[rightIndex]) {
            if(array[leftIndex] > array[index]) {
                 this.heapSwapExact(array, index, leftIndex)
//                let temp = array[index]
//                array[index] = array[leftIndex]
//                array[leftIndex] = temp
               index = leftIndex
            }
            else break
        }
        else if(array[leftIndex] < array[rightIndex]) {
          if(array[rightIndex] > array[index]) {
                  this.heapSwapExact(array, index, rightIndex)
//                let temp = array[index]
//                array[index] = array[rightIndex]
//                array[rightIndex] = temp
                    index = rightIndex
            }
            else break
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


let heap = new Heap()
heap.insertHeap(41)
heap.insertHeap(27)
heap.insertHeap(18)
heap.insertHeap(-12)
heap.insertHeap(33)
heap.insertHeap(55)
heap.insertHeap(-39)
heap.insertHeap(139)
heap.exactMaxHeap()
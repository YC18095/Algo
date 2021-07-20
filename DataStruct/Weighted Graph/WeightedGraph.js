class GraphWeighted {
    constructor() {
        this.adjacencyList = {}   
    }
    addVertex(vertex) {
      !this.adjacencyList[vertex] ? this.adjacencyList[vertex] = [] : false
    }

    addEdge (vertex1, vertex2, value) {
       this.adjacencyList[vertex1].push({vertex2, value})
       this.adjacencyList[vertex2].push({vertex1, value})
    } 

    dikstra (start, end) {
     let distance = {}
     let visited = []
     let previous = {}
     let queu = new PriorityQueue()
     for (const [key] of Object.entries(this.adjacencyList)) {
        previous[key] = null
        if(key === start) {
            distance[key] = 0
            queu.insertHeap(key , 0)
        }
        else { 
            distance[key] = Infinity
            queu.insertHeap(key, Infinity)
        }
      }

     while(queu.arrayHeap.length) {
       if(!visited.includes(start)) {
         visited.push(start)
         for(let i =0; i< this.adjacencyList[start].length; i++) {
             let key= this.adjacencyList[start][i]
             if(!visited.includes((key.vertex1 || key.vertex2))) {
               let totalValue = key.value + distance[start]
               if(totalValue < distance[key.vertex1 || key.vertex2]) {
                 distance[key.vertex1 || key.vertex2] = totalValue
                 previous[key.vertex1 || key.vertex2] = start
                queu.arrayHeap.forEach(element => {
                    if(element.value === (key.vertex1 || key.vertex2)) {
                        element.priority = totalValue
                    }
                })
            }
             }
         }
        queu.exactMaxHeap()
        queu.arrayHeap.sort((a, b) => a.priority - b.priority)
        if(queu.arrayHeap.length) {
           start = queu.arrayHeap[0].value
        }
       }
     }
     console.log(distance)
     return previous
     
    }     
}

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
        if(this.arrayHeap[parrentIndex].priority > priority) {
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
//       this.exactMaxHeapHelper(result)
    }

//     exactMaxHeapHelper(result) {
//        let array = this.arrayHeap
//        let index = 0
//        while(true) {
//         let leftIndex = 2*index + 1
//         let rightIndex = 2*index + 2
//         let isTrue = (leftIndex && rightIndex) > array.length ? true : false
//         if(isTrue  && (array[leftIndex].priority < array[rightIndex].priority)) {
//             if(array[leftIndex].priority > array[index].priority) {
//                this.heapSwapExact(array, index, leftIndex)
//                index = leftIndex
//             } else break
//         }
//         else if(isTrue && (array[leftIndex].priority > array[rightIndex].priority)) {
//           if(array[rightIndex].priority < array[index].priority) {
//                   this.heapSwapExact(array, index, rightIndex)
//                    index = rightIndex
//             } else break
//         }
//         else break   
//        }
//        return result
//     }

    heapSwapExact(array, index, indexOfSwap) {
        let temp = array[index]
         array[index] = array[indexOfSwap]
         array[indexOfSwap] = temp
         return index
    }
}

let q = new GraphWeighted()
q.addVertex('A')
q.addVertex('B')
q.addVertex('C')
q.addVertex('D')
q.addVertex('E')
q.addVertex('F')


q.addEdge('A', 'B',4)
q.addEdge('A', 'C',2)
q.addEdge('B', 'E',3)
q.addEdge('C', 'D',2)
q.addEdge('C', 'F',4)
q.addEdge('D', 'E',3)
q.addEdge('D', 'F',1)
q.addEdge('E', 'F',1)

q.dikstra('F', 'A')
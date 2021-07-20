class Node {
    constructor(value) {
        this.value = value
        this.right= null
        this.left = null
    }
}

class BinaryTree {
    constructor(value) {
      this.root = null
    }

    insert(value) {
       if(!this.root){ return this.root = new Node(value)}
       let current = this.root
        while(current) {
            if(current.value === value) return value
            if(current.value > value ) {
                if(!current.left) {
                   return current.left = new Node(value)
                }
                 current = current.left
            } 
             if(current.value < value) {
              if(!current.right) {
                return current.right = new Node(value)  
              }
                current = current.right           
            } 
        }
    }

    BFS() {
      let queue = [], visited = [], current = this.root
      queue.push(current)
      while(queue.length) {
        let firstItem = queue.shift()
        visited.push(firstItem.value)
        if(firstItem.left) queue.push(firstItem.left)
        if(firstItem.right) queue.push(firstItem.right)
      }
      return visited     
    }

    DFS() {
        let visited = [], current = this.root
        return this.DFShelperMethod(current, visited)
    }

    DFShelperMethod (node,visited) {
       if(node) visited.push(node.value)
       if(!node) return visited
       this.DFShelperMethod(node.left, visited)       
       this.DFShelperMethod(node.right, visited)
       return visited
    }

     DFSPostOrder() {
        let visited = [], current = this.root
        return this.DFSPostOrderhelperMethod(current, visited)
    }

    DFSPostOrderhelperMethod (node,visited) {
       if(!node) return visited
       this.DFSPostOrderhelperMethod(node.left, visited)       
       this.DFSPostOrderhelperMethod(node.right, visited)
       if(node) visited.push(node.value)
       return visited
    }

    DFSInOrder() {
        let visited = [], current = this.root
        return this.DFSInOrderhelperMethod(current, visited)
    }

    DFSInOrderhelperMethod (node,visited) {
       if(!node) return visited
       this.DFSInOrderhelperMethod(node.left, visited) 
       if(node) visited.push(node.value)      
       this.DFSInOrderhelperMethod(node.right, visited)
       return visited
    }
}


let tree = new BinaryTree()
// tree.insert(20)
// tree.insert(14)
// tree.insert(57)
// tree.insert(19)
// tree.insert(62)
// tree.insert(31)
// tree.insert(3)
// tree.insert(72)
// tree.insert(11)
// tree.insert(9)
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSInOrder()
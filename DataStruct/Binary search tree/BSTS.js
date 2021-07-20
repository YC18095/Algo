class Node {
    constructor(value) {
        this.value = value
        this.right= null
        this.left = null
    }
}

class BinarySearchTree {
    constructor(value) {
      this.root = null
    }
	
    insert(value) {
       if(!this.root){ return this.root = new Node(value)}
       let current = this.root
        while(current) {
            if(current.value > value ) {
                if(!current.left) {
                   return current.left = new Node(value)
                }else {
                    current = current.left
                }
            } 
             if(current.value < value) {
              if(!current.right) {
                return current.right = new Node(value)  
              } else {
                 current = current.right
              }              
            } 
        }
    }
    
    find(value) {
         if(!this.root) return false
         let current = this.root
         while(current) {
           if(current.value > value ) { current = current.left} 
           else if(current.value < value) { current = current.right} 
           else return current
         }
         if(!current) return false
    }
}

let tree = new BinarySearchTree()
// tree.root = new Node(6)
// tree.root.left = new Node(4)
// tree.root.right = new Node(7)
// tree.insert(8)
// tree.insert(3)
// tree.insert(14)
// tree.insert(9)
// tree.insert(10)
// tree.insert(12)
// tree.insert(11)
tree.insert(20)
tree.insert(14)
tree.insert(57)
tree.insert(19)
tree.insert(62)
tree.insert(31)
tree.insert(3)
tree.insert(72)
tree.insert(11)
tree.insert(9)
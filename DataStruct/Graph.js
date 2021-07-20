class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    !this.adjacencyList[vertex] ? (this.adjacencyList[vertex] = []) : false;
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.removeEdgeHelperOptimize(vertex1, vertex2);
    this.removeEdgeHelperOptimize(vertex2, vertex1);
  }

  removeEdgeHelperOptimize(v1, v2) {
    let i = 0;
    while (true) {
      if (this.adjacencyList[v1][i] === v2) {
        this.adjacencyList[v1].splice(i, 1);
        break;
      }
      i++;
    }
  }

  removeEdgeHelper(v1, v2) {
    for (let i = 0; i < this.adjacencyList[v1].length; i++) {
      if (this.adjacencyList[v1][i] === v2) {
        this.adjacencyList[v1].splice(i, 1);
      }
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    delete this.adjacencyList[vertex];
    for (let key in this.adjacencyList) {
      this.removeEdgeHelper(key, vertex);
    }
  }

  DFSGraphRecrusive(node) {
    if (!node) return null;
    let result1 = [];
    let visited = {};

    let DFSGraphHelper = (node) => {
      if (visited[node]) return;
      visited[node] = true;
      result1.push(node);
      for (let i = 0; i < this.adjacencyList[node].length; i++) {
        if (!visited[this.adjacencyList[node][i]]) {
          DFSGraphHelper(this.adjacencyList[node][i]);
        }
      }
    };

    DFSGraphHelper(node);
    return result1;
  }

  DFSGraphIterative(startVertex) {
    let stack = [];
    let result = [];
    let visited = {};
    stack.push(startVertex);
    visited[startVertex] = true;

    while (stack.length) {
      let vertex = stack.pop();
      result.push(vertex);
      for (let element of this.adjacencyList[vertex]) {
        if (!visited[element]) {
          visited[element] = true;
          stack.push(element);
        }
      }
    }
    return result;
  }
}

let q = new Graph();
q.addVertex('A');
q.addVertex('B');
q.addVertex('C');
q.addVertex('D');
q.addVertex('E');
q.addVertex('F');

q.addEdge('A', 'B');
q.addEdge('A', 'C');
q.addEdge('B', 'D');
q.addEdge('C', 'E');
q.addEdge('D', 'E');
q.addEdge('D', 'F');
q.addEdge('E', 'F');

q.DFSGraphIterative('A');

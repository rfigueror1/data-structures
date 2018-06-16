

// Instantiate a new graph
var Graph = function() {
  this.list = {};
};

// Add a node to the graph, passing in the node's value
// Time complexity is O(1)
Graph.prototype.addNode = function(node) {
  // create an empty node
  this.list[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //console.log('node is: ', node);
  var result = false;
  for (key in this.list) {
    //console.log(key, typeof key);
    if (key === JSON.stringify(node)) {
      result = true;
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.list[node];
  // nested for loops
  for (key in this.list) {
    for(var i = 0 ; i<this.list[key].length ; i++) {
      if(this.list[key][i] === node){
        this.list[key].splice(i,1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for(var i = 0; i<this.list[fromNode].length; i++){
    if(this.list[fromNode][i] === toNode){
      result = true;
    }
  }
  return result;  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.list[fromNode][this.list[fromNode].length] = toNode;
  this.list[toNode][this.list[toNode].length] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOfFromNode = 0;
  var indexOfToNode = 0;
  for(var i = 0; i<this.list[fromNode].length; i++){
    if(this.list[fromNode][i] === toNode){
      indexOfFromNode = i;
    }
  }
  for(var j = 0; j<this.list[toNode].length; j++){
    if(this.list[toNode][j] === fromNode){
      indexOfToNode = j;
    }
  }
  
  this.list[fromNode].splice(indexOfFromNode,1);
  this.list[toNode].splice(indexOfToNode,1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.list) {
    cb(key);
  }
};

/*
 * Complexity: The time complexity associated with each function is the following:
 *  - AddNode: O(1)
 *  - Contains: O(n)
 *  - removeNode: Either O(n2) or close O(n*m), depending on the connections (m) associated with each node n. 
 *  - hasEdge: O(n)
 *  - addEdge: O(1)
 *  - removeEdge: O(n)
 *  - forEachNode: O(n)*O(cb), depending on the complexity of callback
 */



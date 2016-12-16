

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = { value: node, edge: [] };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if ( this.storage[node].value ) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.storage[node].edge = undefined;
  this.storage[node].value = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if ( _.indexOf( this.storage[fromNode].edge, toNode ) !== -1 && _.indexOf( this.storage[toNode].edge, fromNode ) !== -1 ) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge[_.indexOf( this.storage[fromNode].edge, toNode )] = undefined;
  this.storage[toNode].edge[_.indexOf( this.storage[toNode].edge, fromNode)] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var key in this.storage ) {
    cb(this.storage[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var connectToFive = function(item) {
//   graph.addEdge(item, 5);
// };
// graph.addNode(5);
// graph.addNode(2);
// graph.addNode(1);
// graph.addNode(3);
// graph.forEachNode(connectToFive);
// expect(graph.hasEdge(2, 5)).to.equal(true);
// expect(graph.hasEdge(1, 5)).to.equal(true);
// expect(graph.hasEdge(3, 5)).to.equal(true);
// expect(graph.hasEdge(5, 5)).to.equal(true);
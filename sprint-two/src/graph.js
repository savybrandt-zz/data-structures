

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = true;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var flag = false;
  if ( this.nodes[node] ) {
    flag = true;
  }
  return flag;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  var a = this.edges;
  var keys = Object.keys(this.edges);
  for ( var i = 0; i < keys.length; i++ ) {
    if ( keys[i][0] === String(node) || keys[i][1] === String(node) ) {
      console.log(keys[i]);
      delete this.edges[keys[i]];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var flag = false;
  if (this.edges[String(fromNode) + String(toNode)] || this.edges[String(toNode) + String(fromNode)]) {
    flag = true;
  }
  return flag;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[String(fromNode) + String(toNode)] = true;
  this.edges[String(toNode) + String(fromNode)] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges[String(fromNode) + String(toNode)] = false;
  this.edges[String(toNode) + String(fromNode)] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var key in this.nodes ) {
    cb(key); 
  }
};

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

/*
 * Complexity: What is the time complexity of the above functions?
 */



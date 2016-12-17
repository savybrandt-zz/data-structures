

// Instantiate a new graph
var Graph = function() {
<<<<<<< HEAD
  this.storage = {};
=======
  this.nodes = {};
  this.edges = {};
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
<<<<<<< HEAD
  this.storage[node] = { value: node, edge: [] };
=======
  this.nodes[node] = true;
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
<<<<<<< HEAD
  if ( this.storage[node].value ) {
    return true;
  }
  return false;
=======
  var flag = false;
  if ( this.nodes[node] ) {
    flag = true;
  }
  return flag;
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
<<<<<<< HEAD
  this.storage[node].edge = undefined;
  this.storage[node].value = undefined;
=======
  delete this.nodes[node];
  var a = this.edges;
  var keys = Object.keys(this.edges);
  for ( var i = 0; i < keys.length; i++ ) {
    if ( keys[i][0] === String(node) || keys[i][1] === String(node) ) {
      console.log(keys[i]);
      delete this.edges[keys[i]];
    }
  }
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
<<<<<<< HEAD
  if ( _.indexOf( this.storage[fromNode].edge, toNode ) !== -1 && _.indexOf( this.storage[toNode].edge, fromNode ) !== -1 ) {
    return true;
  } else {
    return false;
  }
=======
  var flag = false;
  if (this.edges[String(fromNode) + String(toNode)] || this.edges[String(toNode) + String(fromNode)]) {
    flag = true;
  }
  return flag;
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
<<<<<<< HEAD
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
=======
  this.edges[String(fromNode) + String(toNode)] = true;
  this.edges[String(toNode) + String(fromNode)] = true;
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
<<<<<<< HEAD
  this.storage[fromNode].edge[_.indexOf( this.storage[fromNode].edge, toNode )] = undefined;
  this.storage[toNode].edge[_.indexOf( this.storage[toNode].edge, fromNode)] = undefined;
=======
  this.edges[String(fromNode) + String(toNode)] = false;
  this.edges[String(toNode) + String(fromNode)] = false;
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
<<<<<<< HEAD
  for ( var key in this.storage ) {
    cb(this.storage[key].value);
=======
  for ( var key in this.nodes ) {
    cb(key); 
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
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

/* addNode: O(1)
   removeNode: O(1)
   contains: 0(1)
   hasEdge: O(n)
   addEdge: O(1)
   removeEdge: O(n)
   forEachNode: 0(n)
*/
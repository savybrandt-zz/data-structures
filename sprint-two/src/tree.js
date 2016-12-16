var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {value: value};
  this.children.push(child);
  console.log(this); 
  console.log(this.children);
  debugger;
};

treeMethods.contains = function(target) {
  var searchTarget = function(node) {
    var childrenArr = node.children;
    for ( var i = 0; i < childrenArr.length; 
  };
  searchTarget(this);
};

// tree.addChild(5);
// expect(tree.contains(5)).to.equal(true);


/*
 * Complexity: What is the time complexity of the above functions?
 */

//  var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;
//   newTree.addChild = treeMethods.addChild;
//   newTree.contains = treeMethods.contains;
//   // your code here
//   newTree.children = null;  // fix me

//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value) {

// };

// treeMethods.contains = function(target) {

// };
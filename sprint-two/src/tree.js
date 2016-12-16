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
  var child = {value: value, children: []};
  this.children.push(child);
  child.addChild = treeMethods.addChild;
};

treeMethods.contains = function(target) {
  var flag = false;
  var searchTarget = function(node) {
    var childrenArr = node.children;

    for (var i = 0; i < childrenArr.length; i++) {
      if (target === childrenArr[i].value) {
        flag = true;
      }
      if (childrenArr[i].children) {
        searchTarget(childrenArr[i]);
      }
    }
  };

  searchTarget(this);
  return flag;
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
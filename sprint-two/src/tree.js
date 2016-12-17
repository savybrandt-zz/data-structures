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
<<<<<<< HEAD
  var child = {value: value, children: []};
  this.children.push(child);
  child.addChild = treeMethods.addChild;
=======
  var child = {value: value};
  child.addChild = treeMethods.addChild;
  child.children = [];
  this.children.push(child);
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

treeMethods.contains = function(target) {
  var flag = false;
  var searchTarget = function(node) {
    var childrenArr = node.children;
<<<<<<< HEAD

    for (var i = 0; i < childrenArr.length; i++) {
      if (target === childrenArr[i].value) {
        flag = true;
      }
      if (childrenArr[i].children) {
        searchTarget(childrenArr[i]);
      }
    }
=======
    for ( var i = 0; i < childrenArr.length; i++ ) {
      if ( childrenArr[i].value === target ) {
        flag = true;
      } else if ( childrenArr[i].children ) {
        searchTarget( childrenArr[i] );
      }
    } 
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
  };

  searchTarget(this);
  return flag;
};

// tree.addChild(5);
// tree.children[0].addChild(6);
// expect(tree.children[0].children[0].value).to.equal(6);

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
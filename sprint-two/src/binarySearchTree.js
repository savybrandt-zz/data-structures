var BinarySearchTree = function(value) {
  var tree = {value: value};

  tree.insert = function(incoming) {
    var input = {value: incoming, left: undefined, right: undefined};
    var insertNode = function(node) {
      if (node.value > incoming) {
        if (!node.left) {
          node.left = input;
        } else {
          insertNode(node.left);
        }
      } else {
        if (!node.right) {
          node.right = input;
        } else {
          insertNode(node.right);
        }
      }
    };
    insertNode(tree);
  };

  tree.contains = function() {

  };

  tree.depthFirstLog = function() {

  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// See if 1st branch is empty
  // if not, fill it
  // if it is, then check if our incoming val is larger than the branch value
    // if is, check branch.right
    // if not, 



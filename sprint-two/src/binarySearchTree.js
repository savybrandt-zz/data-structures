var BinarySearchTree = function(value) {
  var tree = {value: value, left: undefined, right: undefined};
  tree.list = [value];

  tree.insert = function(incoming) {
    tree.list.push(incoming);
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

  tree.contains = function(target) {
    var flag = false;
    var searchNode = function(node) {
      if (node.value === target) {
        flag = true;
      } else if (node.left) {
        searchNode(node.left);
      } if (node.right) {
        searchNode(node.right);
      }
    };
    searchNode(tree);
    return flag;
  };

  tree.depthFirstLog = function(fn) {
    for (var i = 0; i < tree.list.length; i++) {
      fn(tree.list[i]);
    }
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 */

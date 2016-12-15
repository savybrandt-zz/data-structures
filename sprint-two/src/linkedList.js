var LinkedList = function() {
  var list = {};
  list.head = {};
  list.tail = {};

  list.addToTail = function(value) {
    var findTail = function(node) {
      if ( node.next ) {
        findTail(node.next);
      } else {
        node.next = Node(value);        
      }
      return node;
    };
    list = findTail(list);
    list.tail.value = value;
  };

  list.removeHead = function() {
    var results = list.next.value;
    list.next = list.next.next;
    list.head.value = list.next.value;
    return results;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = {};
  return node;
};


// An itinerary you expect to add and remove destinations to and from.

// A linkedList class, in functional style, with the following properties:
// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?
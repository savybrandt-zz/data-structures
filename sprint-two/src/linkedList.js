var LinkedList = function() {
  var list = {};
  list.head = Node();
  list.tail = Node();

  list.addToTail = function(value) {
    var findTail = function(node) {
      if ( node.next === null ) { // Does this node have something to point to / is it last node?
        node.value = value;
        node.next = Node();
        list.tail = node;
      } else { // If this node is the last node,
        node.next = findTail(node.next); // add to tail by using Node function
      }
      return node;
    };
    list.head = findTail(list.head); // Initiating recursion with current head
  };

  list.removeHead = function() {  
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var findTarget = function(node) {
      if ( node.next === null ) {
        return false;
      } else if ( node.value === target ) {
        return true;
      } else {
        return findTarget(node.next);
      }
    };
    return findTarget(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
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

// linkedList.addToTail(4);
// linkedList.addToTail(5);
// expect(linkedList.head.value).to.equal(4);
// linkedList.removeHead();
// expect(linkedList.head.value).to.equal(5);
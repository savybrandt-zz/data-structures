var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    if ( !list.head ) {
      list.head = newTail;
    }

    if ( list.tail ) {
      list.tail.next = newTail;
    }

    list.tail = newTail;

  };

  list.removeHead = function() {  
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var node = list.head;

    while ( node ) {
      if ( node.value === target ) {
        return true;
      }
      node = node.next;
    }
    return false;
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
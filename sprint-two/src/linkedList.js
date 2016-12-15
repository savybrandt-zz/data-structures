var LinkedList = function() {
  var list = {};
  list.head = {};
  list.tail = {};
  list.next = {};

  list.addToTail = function(value) {
    var findTail = function(node) {
      if ( node.next ) { // Does this node have something to point to / is it last node?
        findTail(node.next); // If it's not last node, then perform recursion on the node that current node is pointing to.
      } else { // If this node is the last node,
        node = Node(value); // add to tail by using Node function
        if ( !list.head ) { //  If first time through, then 
          list.head = node; // Assign the first node as the head node, too
        }
        list.tail = node; // Reassign new tail to list.tail
      }
    };
    findTail(list.next); // Initiating recursion with current head
  };

  list.removeHead = function() {  
    var removedHead = list.head.value; // Declare previous head value
    list.head = list.next; // Declare new head value
    list.next = list.next.next;
    return removedHead;
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

// linkedList.addToTail(4);
// linkedList.addToTail(5);
// expect(linkedList.head.value).to.equal(4);
// linkedList.removeHead();
// expect(linkedList.head.value).to.equal(5);
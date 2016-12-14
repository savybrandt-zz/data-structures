var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;
  var count2 = 0;
  
  // Implement the methods below
  someInstance.enqueue = function(value) {
    size++;
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if ( size > 0 ) {
      var keys = Object.keys(storage);
      var firstKey = keys[count2];
      var value = storage[firstKey];
      count2++;
      size--;  
      return value;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

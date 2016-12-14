var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count1 = 0;
  var count2 = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[count2] = value;
    size++;
    count2++;
  };

  someInstance.dequeue = function() {
    var key = Object.keys(storage);
    if (size > 0) { 
      size--;
    }
    var result = storage[key[count1]];
    count1++;
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

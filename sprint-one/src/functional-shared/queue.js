var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.count = 0;
  queue.count1 = 0;
  queue.count2 = 0;

  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count1] = value;
  this.count1++;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--; 
  }
  var results = this.storage[this.count2];
  this.count2++;
  return results;
};

queueMethods.size = function() {
  return this.count;
};





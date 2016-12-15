var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.count = 0;
  queue.count2 = 0;
  queue.count3 = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
};

queueMethods.dequeue = function() {
  this.count--;
};

queueMethods.size = function() {
  return this.count;
};
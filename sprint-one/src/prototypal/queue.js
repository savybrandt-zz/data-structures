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
  this.storage[this.count2] = value;
  this.count2++;
  this.count++;
};

queueMethods.dequeue = function() {
  if ( this.count > 0) {
    this.count--;
  }
  var result = this.storage[this.count3];
  this.count3++;
  return result;
};

queueMethods.size = function() {
  return this.count;
};
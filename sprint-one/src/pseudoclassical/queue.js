var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.count1 = 0;
  this.count2 = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count1] = value;
  this.count1--;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if ( this.count > 0 ) {
    this.count--;
  }
  var results = this.storage[this.count2];
  this.count2--;
  return results;
};

Queue.prototype.size = function() {
  return this.count;
};

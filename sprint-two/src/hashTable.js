

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var result;
  bucket.forEach( function(tuple) {
    if(tuple[0] === k) {
      result = tuple[1];
      tuple[1] = v;
    }
  });

  if ( !result ) {
    bucket.push([k,v]);
  } else {
    return result;
  }
  this._storage.set(index, bucket); 
};

HashTable.prototype.retrieve = function(k) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  bucket.forEach( function(tuple) {
    if(tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  bucket.forEach( function(tuple, i) {
    if(tuple[0] === k) {
      result = bucket[i][1];
      delete bucket[i];
    }
  });
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// O(1)

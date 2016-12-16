var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if ( this._storage[item] === undefined ) {
    this._storage[item] = true;
  } 
};

setPrototype.contains = function(item) {
  var flag = false;
  if ( this._storage[item] ) {
    flag = true; 
  }
  return flag;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// set.add('Susan Sarandon');
// set.add('Danny Glover');
// expect(set.contains('Danny Glover')).to.equal(true);
// expect(set.contains('Susan Sarandon')).to.equal(true);
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
<<<<<<< HEAD
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage[item] = undefined;
=======
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
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

<<<<<<< HEAD
// O(1)
=======
// set.add('Susan Sarandon');
// set.add('Danny Glover');
// expect(set.contains('Danny Glover')).to.equal(true);
// expect(set.contains('Susan Sarandon')).to.equal(true);
>>>>>>> f29b6ec94679b73a3ca2af5820f981b5ab4cd516

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if an item is not already in the array:
  //   add it to the array.
  if (!(_.contains(this._storage, item))) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  this._storage.splice(this._storage[_.indexOf(item)]);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
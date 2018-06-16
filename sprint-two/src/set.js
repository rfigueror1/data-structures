var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var globalHashLimit = 10000;

var setPrototype = {};

setPrototype.add = function(item) {
  // if an item is not already in the array:
  //   add it to the array.
  var getIndex = getIndexBelowMaxForKey(item, globalHashLimit);
  this._storage[getIndex] = item;
  
  //if (!(_.contains(this._storage, item))) {// code for set before refactoring
    //this._storage.push(item);
  //}
};

setPrototype.contains = function(item) {
  //return _.contains(this._storage, item);//code for set before refactoring
  var getIndex = getIndexBelowMaxForKey(item, globalHashLimit);
  if(this._storage.hasOwnProperty(getIndex))
    return true;
  else
    return false;   
};

setPrototype.remove = function(item) {
  //this._storage.splice(this._storage[_.indexOf(item)]);//code for set before refactoring
  var getIndex = getIndexBelowMaxForKey(item, globalHashLimit);
  delete this._storage[getIndex];
};


/*
 * Complexity: 
 * All functions are O(1)
 */
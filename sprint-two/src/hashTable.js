var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [];

  tuple.push(k);
  tuple.push(v);  
  //this._storage.set(index, tuple);
  var elem = this._storage.get(index);
  if (this.retrieve(k) !== undefined) {
    this.remove(k);
  }
  //console.log('elem ', elem);
  var bucket = [];
  if (elem === undefined) {
    //console.log('inside empty test');
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    this._storage.get(index).push(tuple);
  }
  
  //console.log('storage ', this._storage.get(0));
  // for (let idx = 0; idx < elem.length; idx++) {
    
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(index);
  //console.log('val is: ', val);
  if (val === undefined) {
    return;
  }
  for (let idx = 0; idx < val.length; idx++) {
    if (val[idx][0] === k) {
      return val[idx][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate through bucket
  // splice out thing with key
  let bucket = this._storage.get(index);
  var buckIndex;
  if (bucket === undefined) {
    return;
  }
  for (let idx = 0; idx < bucket.length; idx++) {
    if (bucket[idx][0] === k) {
      buckIndex = idx;
    }
  }
  if (buckIndex >= 0) {
    bucket.splice(buckIndex, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * retrieve: O(1)
 * insert: O(1)
 * remove: O(1)
 * 
 */
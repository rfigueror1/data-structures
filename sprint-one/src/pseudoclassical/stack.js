var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var someInstance = Object.create(stackMethods);
  this.storage = {};

};

Stack.prototype.push =  function(value){
    var newKey = Object.keys(this.storage).length;
    this.storage[newKey] = value;
};

Stack.prototype.pop = function(){
  var last_key = Object.keys(this.storage).length-1;
  var last =  this.storage[last_key];
  delete this.storage[last_key];
  return last;
};

Stack.prototype.size =  function(){
  return Object.keys(this.storage).length;
};

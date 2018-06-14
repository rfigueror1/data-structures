var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value){
    var newKey = Object.keys(this.storage).length;
    this.storage[newKey] = value;
  },

  pop:function(){
    var last_key = Object.keys(this.storage).length-1;
    var last =  this.storage[last_key];
    delete this.storage[last_key];
    return last;
  },

  size: function(){
      return Object.keys(this.storage).length;
  }

};

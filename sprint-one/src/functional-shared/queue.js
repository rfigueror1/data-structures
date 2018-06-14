var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    var newKey = Object.keys(this.storage).length;
    this.storage[newKey] = value;
  },

  dequeue:function(){
    var const1 = Object.keys(this.storage).length;
    var first = this.storage[0];
    for(var i =0; i<const1; i++){
        this.storage[i] = this.storage[i+1];
    }
    delete this.storage[const1-1];

    //console.log(objCopy[0]);
    return first;
  },

  size: function(){
    return Object.keys(this.storage).length;
  }
};

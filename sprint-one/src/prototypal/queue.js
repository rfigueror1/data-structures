var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

Queue.queueMethods = {};
queueMethods = Queue.queueMethods;

Queue.queueMethods.enqueue =  function(value){
  var newKey = Object.keys(this.storage).length;
  this.storage[newKey] = value;
};

Queue.queueMethods.dequeue = function(){
  var const1 = Object.keys(this.storage).length;
  var first = this.storage[0];
  for(var i =0; i<const1; i++){
      this.storage[i] = this.storage[i+1];
  }
  delete this.storage[const1-1];
  return first;
};

Queue.queueMethods.size =  function(){
  return Object.keys(this.storage).length;
};


//init: function(first, last) {
  //  this.firstName = first;
    //this.lastName = last;
  //}
  //Object creates new Object, class constructor
  //extend = one timeout
//create
//prototype is not the creator
//Object.create(gold) is for lookup (si las borras no se borran de las dependientes)

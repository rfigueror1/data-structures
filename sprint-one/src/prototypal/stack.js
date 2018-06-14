var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

Stack.stackMethods = {};
stackMethods = Stack.stackMethods;

Stack.stackMethods.push =  function(value){
    var newKey = Object.keys(this.storage).length;
    this.storage[newKey] = value;
};

Stack.stackMethods.pop = function(){
  var last_key = Object.keys(this.storage).length-1;
  var last =  this.storage[last_key];
  delete this.storage[last_key];
  return last;
};

Stack.stackMethods.size =  function(){
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

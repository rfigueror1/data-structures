var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var newKey = Object.keys(storage).length;
    storage[newKey] = value;
  };

  //input: no input
  //output: an object value
  //pseudocode
    //first try to obtain the first element of the Queue
    //return the previously obtained element of the Queue
    // Delete the first element of the Queue

  someInstance.dequeue = function() {
    var const1 = Object.keys(storage).length;
    var first = storage[0];
    for(var i =0; i<const1; i++){
        storage[i] = storage[i+1];
    }
    delete storage[const1-1];

    //console.log(objCopy[0]);
    return first;
  };
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var newKey = Object.keys(storage).length;
    storage[newKey] = value;
  };

  someInstance.pop = function() {
    var last_key = Object.keys(storage).length-1;
    var last =  storage[last_key];
    delete storage[last_key];
    return last;
  };//output: the value of the last element in the stack// also require to delete that value

  someInstance.size = function() {
    return Object.keys(storage).length;

    //return 10;
  };

  return someInstance;
};

//pseudocode

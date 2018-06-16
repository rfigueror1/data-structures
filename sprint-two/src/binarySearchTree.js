var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, binarytTreeMethods);
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var binarytTreeMethods = {};

binarytTreeMethods.insert = function(value) {
  let parent = this;
  if (value > parent) {
    if(this.right === null){
      this.right = BinarySearchTree(value);
    }else{
      // do the recursive call
      insert.call(this, value);
      
    }
  } else { // means it's less than
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
    
      insert.call(this, value);
    }
  }
  console.log(parent, value);
  // console.log(value);
}

binarytTreeMethods.contains = function(value) {
  
}

binarytTreeMethods.depthFirstLog = function(callback) {
  
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
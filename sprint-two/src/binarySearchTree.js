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
  if (value > parent.value) {
    if(this.right === null){
    //console.log('inside right');
      this.right = BinarySearchTree(value);
      return;
    }else{
      // do the recursive call
      this.right.insert(value);
      
    }
  } else { // means it's less than
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    //console.log('this.left: ', this.left);
      return;
    } else {
      this.left.insert(value);
    }
  }
  //console.log(parent, value);
  // console.log(value);
}

binarytTreeMethods.contains = function(value) {
  let isFound = false;
  let reachedEnd = false;
  let currentNode = this;
  
  while (!isFound || !reachedEnd ) {
    // If the current node is empty, return early.
    if (currentNode === null) {
      return isFound;
    }
    
    console.log('current node value: ', currentNode.value);

    if (currentNode.value === value) {
      isFound = true;
      return true;
    } 
    
    else if (currentNode.value < value) { // right side
      console.log('going right ', 'currentNode: ', currentNode.value);
      currentNode = currentNode.right;
      if (currentNode === null) {
        reachedEnd = true;
        return false;
      }
    } 
    
    else { // left side
      if (currentNode.value > value) {
        currentNode = currentNode.left;
        if (currentNode === null) {
          reachedEnd = true;
          return false;
        }
      }
    }
  }
  return isFound;
}

binarytTreeMethods.depthFirstLog = function(callback) {
  
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 
 
 
 
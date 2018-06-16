var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Going to assign value as a child on the tree it
  // was called on.
  // create a new tree (this one)
  // get the tree target using this
  // add our new tree to the target tree's children
  var ourTree = Tree(value);
  this.children.push(ourTree);
};

treeMethods.contains = function(target) {
  // Recursively go through all trees
  // Return true as soon as we find it
  // Return false if we don't find it.
  var result = [];
  if (this.value === target) {
    return true;
  }
  var helperfunction = function(tree) { 
    var children1 = tree.children;
    //console.log('children 1', children1);
    var len = children1.length;
    for (var i = 0; i<len; i++) {
      result.push(children1[i]);
      result = result.concat(helperfunction(children1[i]));      
    }
  };
  
  helperfunction(this);
  //console.log('result ', result);
   
  for (var j = 0; j<result.length; j++) {
    if (result[j] !== undefined) {
      if (result[j].value === target) {
        return true;
      }  
    }
       
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */

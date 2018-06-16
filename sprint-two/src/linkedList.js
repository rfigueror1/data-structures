var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  //make a node, see if 
  //check if its the list is empty
    //if list is empty assign the node as the head
    //else get the tail and assigb the tail's pointer to the newly created node
    //new node is the new tail
    var tempNode = Node(value);
    var newKeys = Object.keys(list);
    var tempIndex = newKeys.length;
    list.tempIndex = tempNode;
    if (list.head === null) {
      list.head = tempNode;
      list.tail = tempNode;  
    } else {
      list.tail.next = tempNode;
    }
    list.tail = tempNode;    
  };

  list.removeHead = function() {
    // remove the head node and return it
    // get the node that the head node points to: call it targetNode
    // set tempNode to current head
    // set head to targetNode
    // return tempNode
    var tempNode = _.extend({}, list.head);
    list.head = tempNode.next;
    return tempNode.value;
  };

  list.contains = function(target) {
    var tempNode = list.head;
    var result = false;
    if (list.head === null) {
      return false;
    }
    else {
      while (tempNode !== null || result !== false) {
        if (tempNode.value === target) {
          return true;
        }
        tempNode = tempNode.next;
      }
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * - addToTail: O(1)
 * - removeHead: O(1)
 * - contains: O(n)
 */

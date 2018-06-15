class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }


push(value){
    var newKey = Object.keys(this.storage).length;
    this.storage[newKey] = value;
}

pop(){
  var last_key = Object.keys(this.storage).length-1;
  var last =  this.storage[last_key];
  delete this.storage[last_key];
  return last;
}

size(){
  return Object.keys(this.storage).length;
}

}

class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }


enqueue(value){
  var newKey = Object.keys(this.storage).length;
  this.storage[newKey] = value;
}

dequeue(){
  var const1 = Object.keys(this.storage).length;
  var first = this.storage[0];
  for(var i =0; i<const1; i++){
      this.storage[i] = this.storage[i+1];
  }
  delete this.storage[const1-1];
  return first;
}

size(){
  return Object.keys(this.storage).length;
}

}

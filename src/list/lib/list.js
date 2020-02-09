'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    //add value to back of list and assign index
    this[this.length] = value;

    //increment length
    this.length++

    //return the length
    return this.length;
  }

  map(callback) {
    let newList = new List();

    //iterate over array of values
    for(let i = 0; i < this.length; i++){
      //perform some operation on it
     newList.push( callback( this[i] ) );
    }
    return newList;
  }

  pop() {
    let popped = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return popped;
  }

  filter(callback) {
    let newList = new List();
    for(let i = 0; i < this.length; i++) {
      //if truthy, push value
      if(callback( this[i] ))
      {
        newList.push( this[i] );
      }
    }
    return newList;
  }

  reduce(callback, initialValue) {
    let accumulate;

    for (var i = 0; i < this.length - 1; i++) {
      accumulate = callback(initialValue, this[i], i);
    }
    return accumulate;
  }

  slice(start, end) {
    let newList = new List();
    let startingIndex = 0;
    for (var i = start; i <= end; i++) {
      newList[i - start] = this[i];
      this.length--;
    }
    return newList;
  }


}

module.exports = List;

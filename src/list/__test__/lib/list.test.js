'use strict';

const List = require('../../lib/list.js');

describe('Testing the list class', () => {
  it('should have a length of zero', () => {
    let initialList = new List();
    expect(initialList.length).toBe(0);
  })

  it('should add a new element to the List', () => {
    let pushList = new List();
    pushList.push(6);
    pushList.push(8);
    pushList.push(1);
    pushList.push(3);
    expect(pushList.length).toBe(4);
  })

  it('should iterate over the array and run the callback for each element and return a new list of modified values', () => {
    let mapList = new List();
    mapList.push(5);
    mapList.push(4);
    mapList.push(9);
    mapList.push(16);

    //takes in callback that performs operations on each element
    let actual = mapList.map(num => num * 2);
    console.log(actual);

    expect(actual.length).toEqual(mapList.length);
    expect(actual).not.toEqual(mapList);
    expect(actual[0]).toEqual(10);
  })
})


describe('testing the pop method', () => {
  it('should remove the last element from the list', () => {
    let popList = new List();
    let last = popList[popList.length - 1];
    let popped = popList.pop();
    expect(popped).toBe(last);
  })

  it('should reduce length by one', () => {
    let wat = new List();
    wat.push(5);
    wat.pop();
    expect(wat.length).toBe(0);
  })
})

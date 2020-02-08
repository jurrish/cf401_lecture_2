'use strict';

var arithmetic = require("./arithmetic");


describe('we should be able to do basic math', () => {
    it('adds values together', () => {
        expect(arithmetic.add(5, 5)).toEqual(10);
    })
});

describe('we should be able to do basic math', () => {
    it('adds values together', () => {
        expect(arithmetic.sub(5,3).toEqual(2));
    })
});
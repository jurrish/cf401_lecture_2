'use strict';

const greet = require('./greet');

describe('testing the greet module', () => {
    it('should return a greeting', () => {
        expect( greet.sayHi("JR") ).toEqual('hello JR');
    });

    it('should throw an error if argument isnt a string', () => {
        expect( () => greet.sayHi(NaN) ).toThrow()
    })

    it('should throw an error if empty string', () => {
        expect( () => greet.sayHi('') ).toThrow()
    })
})
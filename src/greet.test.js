'use strict';

const greet = require("./greet");

describe('greet module', () => {
    it('should say hello foo', () => {
        expect( greet("foo") ).toEqual('hello foo');
    });
});

describe('return a null value', () => {
    test('putting boolean value in as bad input', () => {
        expect(hello(false)).toBeNull();
        expect(hello(9)).toEqual(null);
    });
});

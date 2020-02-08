'use strict';

const greet = require("./greet");

describe('greet module', () => {
    it('should say hello foo', () => {
        const expected = 'hello foo';
        const actual = greet('foo');
        expect(actual).toEqual(expected);
    });
});
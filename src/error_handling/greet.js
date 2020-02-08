'use strict';

const greet = module.exports = {};

greet.sayHi = name => {
    if(name === '' || typeof name !== 'string') {
        throw new Error( 'this should be a string' );
    }
    return `hello ${name}`;
};


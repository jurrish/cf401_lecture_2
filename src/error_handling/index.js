'use strict';

const greetModule = require('./greet');

try {
    console.log(greetModule.sayHi("Not JR"));
    console.log(greetModule.sayHi(6));
    console.log(greetModule.sayHi("JR"));
} catch(error) {
    console.error(error);
}
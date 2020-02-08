// module.exports = add = (arg, arg2) => arg + arg2;
// module.exports = subtract = (arg, arg2) => arg - arg2;
// module.exports = multiply = (arg, arg2) => arg * arg2;
// module.exports = divide = (arg, arg2) => arg/arg2;

module.exports = {
    add: (a,b) => {
        if(typeof a !== 'number' || typeof b !== 'number')
        {
            return null;
        }
        return a + b
    },
    sub: (a,b) => a - b,
    mult: (a,b) => a * b,
    div: (a, b) => a/b,
}
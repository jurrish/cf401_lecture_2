module.exports = hello = (arg) => {
    if(typeof arg !== "string") {
        return null;
    } else {
        return "hello " + arg;
    }
};

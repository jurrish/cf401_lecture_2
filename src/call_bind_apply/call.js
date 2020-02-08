let jr = {firstName:'JR', lastName: 'Iriarte'};
let marissa = {firstName:'Marissa', lastName: 'Ahearn'};
let jb = {firstName:'Ashton', lastName: 'Barber'};
let course;
// let sayHi = (firstName, lastName) => { `hi, ${this.firstName} ${this.lastName}`};

function sayHi(course) {
    return `hi, ${this.firstName} ${this.lastName} from ${course}`;
}


console.log(sayHi.call(jr, '401d7'));
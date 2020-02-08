const Animal = function(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log(this.name + " wants to walk")
}

let gary = new Animal('gary');

gary.walk();

const Dog = function(name) {
    //refer to Animal
    Animal.call(this.name);
}

Dog.prototype = new Animal();

let charlotte = new Dog('charlotte');

console.log(charlotte)

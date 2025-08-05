// Understanding Objects in JavaScript

// An object is a collection of key-value pairs (also called properties).

// Creating an Object
const person = {
    name: "Sai Prasad",
    age: 23,
    gender: "Male"
}

console.log(person);

// Accessing Object Properties
console.log(person.name);
console.log(person["age"]);

// Updating Object Properties
person.age = 24;
console.log(person);

// Adding Properties to Object
person.address = "Bangalore";
console.log(person);

// Removing Properties from Object
delete person.address;
console.log(person);

// Object Methods
person.sayHello = function(){
    console.log("Hello, I am", this.name);
}
person.sayHello();

// Looping Through Object Properties
for(let key in person){
    console.log(key, person[key]);
}

// Object Methods

//1. Object.keys() - Returns an array of a given object's own enumerable properties.
console.log(Object.keys(person));

//2. Object.values() - Returns an array of a given object's own enumerable properties.
console.log(Object.values(person));

//3. Object.entries() - Returns an array of a given object's own enumerable properties.
console.log(Object.entries(person));
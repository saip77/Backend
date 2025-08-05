// Understanding Arrays in JavaScript

// An array is a list-like object that can store multiple values in a single variable

//Common Array Operations

//1. Accessing Array Elements
let arr = [1,2,3,4,5];
console.log(arr[0]);

//2. Updating Array Elements
arr[0] = 10;
console.log(arr);

//3. Adding Elements to Array
arr.push(6);
console.log(arr);

//4. Removing Elements from Array
arr.pop();
console.log(arr);

//5. Finding the Length of Array
console.log(arr.length);

//6. Finding the Index of an Element
console.log(arr.indexOf(2));

//7. Removing element from the beginning of the array
arr.shift();
console.log(arr);

//8. Adding element to the start of the array
arr.unshift(0);
console.log(arr);

// Array Transformations

//1. map(callback) - Creates a new array with the results of calling a provided function on every element in the calling array.
fruits = ["apple", "banana", "cherry"];
const fruitsUpper = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpper);

//2. filter(callback) - Creates a new array with every element in the calling array that passes a test implemented by the provided function.
fruits = ["apple", "bananas", "cherry"];
const fruitslen = fruits.filter(fruit => fruit.length >6);
console.log(fruitslen);

//3. find(callback) - Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
fruits = ["apple", "bananas", "cherry", "watermelon"];
const fruitsval = fruits.find(fruit => fruit.length >6);
console.log(fruitsval);

//4. includes(value) - Determines whether an array includes a certain element, returning true or false as appropriate.
fruits = ["apple", "bananas", "cherry"];
console.log(fruits.includes("bananas"));
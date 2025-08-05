// Understanding ES6 features in JavaScript

// Template Literals
const myname = "Sai";
console.log(`Hi from ${myname}`);

// Destructuring
let [a,b] = [1,2];
console.log(a,b);

// Spread Operator
let arr = [1,2,3];
let arr2 = [...arr, 4, 5];
console.log(arr2);

// Default Parameters
function add(a,b=2){
    return a+b;
}
console.log(add(2,3));

// Shorthand Object Properties
const fname = "Sai";
const age = 23;

// Instead of { name: name, age: age }
const person = { fname, age };
console.log(person);

// Optional Chaining :
// It helps you safely access nested properties of an object without getting an error if the property does not exist.

const user = {
    name: "Sai",
    profile: {
      email: "sai@example.com"
    }
  };
  
  // Safe:
  console.log(user.profile.email); // "sai@example.com"
  
  // Risky:
  console.log(user.contact?.phone); // ✅ undefined (no error)
  
// Nullish Coalescing Operator (??):
// It allows you to provide a default value when dealing with null or undefined values.

let value = null;
console.log(value ?? "default value"); // ✅ "default value"

value = undefined;
console.log(value ?? "default value"); // ✅ "default value"

value = 0;
console.log(value ?? "default value"); // ✅ 0

value = false;
console.log(value ?? "default value"); // ✅ false  

value = ""; 
console.log(value ?? "default value"); // ✅ ""


//Why not use || operator?
let score = 0;
let result = score || 10; // ✅ 10 (because 0 is falsy)
console.log(result);

//Using ??
let result2 = score ?? 10; 
console.log(result2);

//?? says: "Only use 10 if score is null or undefined."
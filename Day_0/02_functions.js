///Understanding Functions in JavaScript

//It is a block of code that is used to perform a specific task

//Function Declaration
function add(a,b){
    return a+b;
}
const c = add(2,3);
console.log(c);

//Function Expression
const d = function(a,b){
    return a+b;
}
const e = d(3,3);
console.log(e);

// Arrow Function
const greet = (name)=>{
    console.log(name);
}
greet("Sai");
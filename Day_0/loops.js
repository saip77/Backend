// Understanding Loops in JavaScript

//for loop
for(let i=0; i<=5; i++){
    console.log(i);
}
console.log("/...../");

//while loop
let i=0;
while(i<=5){
    console.log(i);
    i++;
}
console.log("/...../");

//do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
console.log("/...../");

//for...of loop for arrays and iterable objects
let arr = [1,2,3,4,5];
for(let i of arr){
    console.log(i);
}
console.log("/...../");

//for...in loop for objects
let obj = {
    name: "Sai Prasad",
    age: 23,
    gender: "Male"
};
for(let key in obj){
    console.log(key, obj[key]);
}
// /primitive and non-primitive

// primitive : 7 types  (call by value copy not refrence)

// String,Number,Boolean,null,undefined,Symbol,BigInt

// refrence type: non-primitive (return type is always object)

// array,objects,functions

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time

// no special for decimal and int all come in Number

const isLoggedIn=false
const outsideTemp=null
let userEmail; // userEmail is undefined

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);  // false as return type of symob will not be same

// const bigNumber=123423456432453424543n  // n represents bigInt

// arrays

const heros=["kunal","jain","avk"]

// object

let myObj={
    name:"kunal",
    age:20,

}

// function

// function can be treated as a variable

// fxn definiton stored in a variable

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);  // type is function object
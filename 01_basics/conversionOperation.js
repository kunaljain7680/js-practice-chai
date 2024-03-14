// let score="33abc"
// let score=null;
let score=undefined

console.log(typeof score);

// or

console.log(typeof(score));

let valueInNumber=Number(score);

console.log(typeof(valueInNumber));  //33abc gets converted into number but its type is NaN

console.log(valueInNumber);  // NaN is not a number 

// null value on coverting to number becomes zero  

// undefined becomes NaN on coverting to Number

console.log(typeof NaN);  // type of NaN is number

// let isLoggedIn=1;
let isLoggedIn="kunal";


let booleanIsLoggedIn=Boolean(isLoggedIn);  // string on converting to boolean if empty false else(i.e non-empty string like "kunal") true


console.log(booleanIsLoggedIn);


let someNumber=33;

let stringNumber=String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

let vol=true;

let st=String(vol);

console.log(typeof st);

console.log(vol);
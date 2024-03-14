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

// operations

let value=3;
let negValue=-value;

console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/3);
console.log(2**3);  // this means 2^3
console.log(2%3);

let str1="hello"
let str2=" kunal"
console.log(str1-str2);  // gives NaN
console.log(str1+str2);  // concatenate two strings

console.log("1"+2);  // 12
console.log(1+"2");  // 12
console.log("1"+2+2); // 122

console.log(1+2+"2"); // 32 as 1+2 is first added and then it is concatenated with 2

console.log(+true);  // 1 as true is boolean ans usme incremtn hona h butincremnet is not there

// console.log(true+);  // error

console.log(+""); // 0  + likhne se converion ho jata h

let num1,num2,num3

num1=num2=num3=2+2

let gameCounter=100

gameCounter++;

++gameCounter;

console.log(gameCounter);
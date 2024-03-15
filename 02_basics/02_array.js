const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// push puts in existing array whereas concat puts in new array

// marvel_heros.push(dc_heros);  // isse array k andar array aa gya

// const allHeros=marvel_heros.concat(dc_heros);  

// console.log(allHeros);

// spread operator : eg: take a glass and throw it and glass bikhar jaega i.e spread hojega

const all_new_heros=[...marvel_heros,...dc_heros];  // marvel_heros and dc_heros are now not arrays their each element 

console.log(all_new_heros);

const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_Array.flat(Infinity); // flat(depth) menas depth tak array me jao jitni array h sb ek me krdo

console.log(real_another_array);

console.log(Array.isArray("Kunal"));  // check if kunal is array


// Array.from() is used to create an array from an iterable object or array-like object, with each element of the array representing one item from the iterable.
// Array.of() is used to create an array with the provided elements as its content, with each argument representing one element of the array.
// covert into array

console.log(Array.from("Kunal"));

console.log(Array.of("Kunal"));  

console.log(Array.from({name:"Kunal"}));  // empty array as we have to tell make array of keys or values

let score1=100;
let score2=200;
let score3=300;

// converts into array
console.log(Array.of(score1,score2,score3));
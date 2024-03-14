// const score=400

// console.log(score); // 400

// const balance=new Number(100)

// console.log(balance);  // [Number:100]

// console.log(balance.toString().length); // 100.length =3

// console.log(balance.toFixed(2));  // fix value upto 2 decimal places

// const otherNumber=123.8966;

// console.log(otherNumber.toPrecision(3)); // decimal k pehle prioroty i.e round off hoga and here agar decimal se pehle 2 numbers hn to ek decimal val bhi cnt higa

// const hundreds=100000;
// console.log(hundreds.toLocaleString('en-IN'));  // acc to indian number system

// Number.MAX_SAFE_INTEGER; Number.MAX_VALUE,Number.MIN_VALUE  for min max 

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.3));  // round off

console.log(Math.ceil(4.6));

console.log(Math.floor(4.9));

console.log(Math.min(4,3,6,8));

console.log(Math.max(4,3,6,8));

console.log(Math.random());  // random values b/w 0 and 1

console.log((Math.random()*10 )+1);  // value b/w  1 and 10

const min=10;
const max=20;

console.log(Math.floor(Math.random()* (max-min + 1))+min);
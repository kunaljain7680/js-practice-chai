const name="Kunal"  // one way to write string
const repoCount=50

// console.log(name+repoCount+"Value ");

// modern syntax : string interpolation using `

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string

const gameName=new String('kunal-jain 1234');  // string is an object 

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
 
console.log(gameName.charAt(0));

console.log(gameName.indexOf('k'));

const newString=gameName.substring(0,4);  // substring me negative values are ignored and starts from 0
console.log(newString);

const anotherString=gameName.slice(-9,1);  // slice me we can give negative values so it will start from last index and gice char


const newStringOne="  kunal ";


console.log(anotherString);

console.log(newStringOne);
console.log(newStringOne.trim());  // trim removes start and end space

const url="https://kunal.com/kunal%20jain"  // browser spaces nhi smjhta so it automatically converts into %20 in url encoding

// url.replace(what to search, with what to replace)

console.log(url.replace('%20','-'));

console.log(url.includes("kunal"));  // true
console.log(url.includes("Kunal")); //false

console.log(gameName.split('-')); // coverts string into array on basis of '-'
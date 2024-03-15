// array

const myArr=[0,1,2,3,4,5,true,"kunal"];

console.log(myArr[0]);

const myHeros=["kunal","jain","avk"];

const myArr2=new Array(1,2,3,4);

// array always create shallow copy

// array methods

// myArr.push(6);
// console.log(myArr);

// myArr.pop();  // remove last element from arr

// myArr.unshift(9);   // insert in arr start
// myArr.shift(); // used to remove from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));  // if value not present then index is -1

// const newArr=myArr.join();  // adds all element of array into string

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);


// slice,splice

// slice doesnot manupulate the original array whereas splice manipulates the original array and takes
// the given range indices out of the array

console.log("A",myArr);

const myn1=myArr.slice(1,3);  // returns index from 1 to 2

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
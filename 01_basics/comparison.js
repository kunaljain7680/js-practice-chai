console.log(2>1);  // true
console.log(2>=1);  // true

console.log("2">1); // true
console.log("02">1); // true


// is tarah k comparisons avoid kro :

console.log(null>0); // false
console.log(null==0); // false

// as == and >= works diffrently so in line 10 null gets converted to 0

console.log(null>=0); // true  (here comaprisons happend and it treats null as 0)

console.log(undefined==0);  // false

console.log(undefined>=0);  // false

console.log(undefined<0);   // false

// ===

console.log("2"==2);  // coversion happens as "2" gets converted to 2

console.log("2"===2);  // no conversion , data type also checked along with number
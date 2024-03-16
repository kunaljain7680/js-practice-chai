// singleton : koi bhi constructor se ap banate to singelton object bnta h 

// object literals k through singelton nhi bnega

// constructor k through
// Object.create

// declaring an object

const mySym=Symbol("key1");

const JsUser={
    name:"Kunal",
    age:20,
    location:"Faridkot",
    email:"jainkunal2003@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    "full Name":"Kunal Jain",
    [mySym]:"key1"  // if we use brackets then it is treated as symbol
    // mySym:"key1"  now this is treated as string 
}

// accessing an object

console.log(JsUser.email);

// or

console.log(JsUser["email"]);  // behind the scenes jo keys h vo string k tarah hoti h and access it like JsUser["email"]

// console.log(JsUser.full Name); wrong as key is given as string so use squre bracket wala syntax

console.log(JsUser["full Name"]);

console.log(JsUser[mySym]);


// changing values of object keys

JsUser.email="avk@gmail.com"

// freeze object when we don;t want object 's values to be changed

// Object.freeze(JsUser);

JsUser.email="jain@gmail.com"

console.log(JsUser);

// function tratedas variables in js

JsUser.greeting=function(){
    console.log("Hello js user");
}

JsUser.greeting2=function(){
    console.log(`Hello js user, ${this.name}`);  // this means same object ko refer krna h
}

console.log(JsUser.greeting);  // fxn ka refrence aya h naki fxn execute hua h 

console.log(JsUser.greeting()); // as method is refered so use greeting()

console.log(JsUser.greeting2());
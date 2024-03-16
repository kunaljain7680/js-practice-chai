const user={
    username:"kunal",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} ,Welcome to website`) // current context i.e current object
        console.log(this);  // this refers to current conext(object) which is running 
    }
}

user.welcomeMessage();
user.username="avk"  // context changed i.e values changed now 
user.welcomeMessage();

console.log(this);  // current context is empty as we are in node environment as this refers to an empty object as there is no global context 

// arrow fxns ()=>{}

function chai(username,val){

    // arguments contain the arguments that the current fxn is storing

    console.log(arguments);  // this context here we an't use it can only be used with objects  
}

chai("KUNAL",21323);


// const chai1=function(){
//     console.log("hello");
// }

// chai1();

// or

// 1) arrow function

// 1)remove function keyword
// 2) round braces k age use =>
// 3) if only single return statemnt remove that too

const chai1=()=>{
    console.log("hello");
    console.log(this);  // given an empty parenthesis
}

chai1();

// basic arrow fxn

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }


// implicit return : another type of arrow fxn (not use parenthesis) means apko return likhne ki zrrorat nhi as 1line stateent

// const addTwo=(num1,num2)=>num1+num2

// or 

// mainly used in react : this way (i.e niche wala)

// const addTwo=(num1,num2)=>(num1+num2) here also no need to pass return statement if we use () i.e round braces while returning value with no return keyword

// or

// const addTwo=(num1,num2)=>{return num1+num2} here as we use {} i.e curly braces so use return keyword


// manlo humne object return krna h then we will use {} i.e curly braces then if we don;t want to use return keyword then we will wrap the object inside () i.e round braces

const addTwo=(num1,num2)=>({
    username:"kunal",
    email:"hello@gmail.com"
})

console.log(addTwo(3,4));


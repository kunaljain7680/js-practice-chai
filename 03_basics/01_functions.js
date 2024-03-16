// defintion of function

function sayMyName(){

    console.log("k");
    console.log("u");
    console.log("n");
    console.log("a");
    console.log("l");

}

// sayMyName  refrence of fxn

// exexute function

sayMyName();

// received parameters in fxn

// function addTwoNumbers(number1,number2){
    
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
    
    let result=number1+number2;

    return result;
}

const result=addTwoNumbers(3,5);  // passed args in fxn

console.log(result);

// kunal is default value if value not passed as a argument

function loginUserMessage(username="kunal"){

    // !username means undefined

    if(!username){
        console.log("please enter username");
        return;
    }

    return `${username} just logged in`
}

console.log(loginUserMessage());


// ... is rest operator(same symbol used for spread operator also when we send the large 
// amount of data as args then the data received in this form is added into an array 

function calculateCartPrice(val1,val2,...num1){  // val1 and val2 will contain first 2 data and rest in array 

    return num1;
}

console.log(calculateCartPrice(200,400,500));


// passing object into fxn

const user={
    username:"kunal",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);

// we can pass object or array directly as argument

// eg:

// handleObject({
//     username:"kunal",
//     price:199
// })

const newArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArray));  // sly array can be directly passed

console.log(returnSecondValue([100,200,300,400]));  // sly array can be directly passed
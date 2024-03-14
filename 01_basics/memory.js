// stack,heap

// in primtive type stack memory is used (as copy)

// in non-primitive type heap memory is used   (as reference)

let myName="kunal"


let userOne={
    email:'kunal@gmail.com',
    rollNo:"18"
}

let userTwo=userOne;

userTwo.email="avk@gmail.com"

console.log(userOne,userTwo);


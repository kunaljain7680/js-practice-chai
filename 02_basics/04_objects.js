// const tinderUser=new Object();  singelton object

const tinderUser={};  // non-singelton object


tinderUser.id="123abc"
tinderUser.name="Kunal"
tinderUser.isLoggedIn=false;

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kunal",
            lastname:"jain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // ?. means protection i.e agar value exist krti h to ye krie nhi to

const obj1={1:"k",2:"j"}
const obj2={3:"a",4:"v"}

// object k andar object

// const obj3={obj1,obj2};  // ye obj k andar dono obj alg alg dal dega

// const obj3=Object.assign({},obj1,obj2);  // {} is optional but is prefreable as it guarantees that result combine hoke hi aega, if not given then values goes to first object i.e here obj1

// or simply use spread operator

const obj3={...obj1,...obj2};

// console.log(obj3);
// console.log(tinderUser);

// array if objecs

const users=[

    {
        id:1,
        email:"k@gmail.com"
    },
    {

    }
]

// console.log(users[0].email);

// console.log(tinderUser);

// give array of keys of object

// console.log(Object.keys(tinderUser));

// give array of values of object

// console.log(Object.values(tinderUser));

// give array of [key:value] where [key:value] is a individual array inside a array 

// console.log(Object.entries(tinderUser));

// objects k andar se looop krke value nikal rhe h to crash hone k chances

// console.log(tinderUser.hasOwnProperty('isLogged')); // tells whether object has given property or not

// destructuring of objects

const course={

    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Kunal Jain"

}

// course.courseInstructor 

// or

const {courseInstructor}=course  // destrcuting

// or

const{courseInstructor:instructor}=course // courseInstructor is destructed as instructor


console.log(courseInstructor,instructor);

// in react props is also destructres

// const navbar=({comapny})=>{

// }

// navbar(company="kunal")

// api se values json ki form me ati h

// json me keys and values both are strings

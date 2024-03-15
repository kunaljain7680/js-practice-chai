// dates

let myDate=new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  // ojbect

let myCreatedDate=new Date(2024,0,23);  // 23 Jan 2024
console.log(myCreatedDate.toString());

let myCreatedDate1=new Date(2024,0,23,5,3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2=new Date("05-06-2024");  // 6 May 2024
console.log(myCreatedDate2.toLocaleString());

let myTimestamp=Date.now();

// console.log(myTimestamp); // 1 jan 1970 se value milegi

// console.log(myCreatedDate.getTime()); // jo date declare ki thi us tak 1 jan 1970 se value milegi

console.log(Math.floor(Date.now()/1000));

let newDate=new Date();

// default means standard os showing time
newDate.toLocaleString('default',{
    weekday:"long",
 
})

console.log(newDate);
// immediately invoked function : (IIFE)

// global scope se kai bar chhezen polute hoti hnso to prevent it use iife(i.e global scope me variable h uske pollution ko htane k lie use iife )

// function chai(){
//     console.log("db connected");
// }

// or

// this function is wrapped inside a () and becomes block

// iife invoke hogya but usko pta ni context kahan rokna h to we will end the context using ;

// named iifi

(function chai(){
    console.log("db connected");
})();
// chai();

// (fxn defintion)(execution call)

// or

// unnamed iifi
((name)=>{ console.log (`db connected to ${name}`)})("kunal");  // if name wnat to passed then as we do chai("kunal") here also in second bracket use name
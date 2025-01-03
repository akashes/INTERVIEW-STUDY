



// const evaluate=(op)=>(a)=>(b)=>{
//     switch(op){
//         case "sum" : return a+b;break;
//         case "subtract" : return a-b; break;
//         case "divide" : return a/b;break;
//         case "multiply" : return a*b;break;
//         default : return 0;
//     }
// }


// console.log(evaluate('')(2)(4))
// console.log(evaluate('multiply')(2)(4))
// console.log(evaluate('subtract')(2)(4))
// console.log(evaluate('divide')(2)(4))

// ----------------------------------------------
//INFINITE CURRYING
// const sum=(a)=>{
//     return function (b){
//        if(b) return sum(a+b) ;
//        return a;
      
//     }
// }


// console.log(sum(5)())
// console.log(sum(5)(2)())
// console.log(sum(5)(2)(3)())

// ---------------------------------------------
//PARTIAL APPLICATION
// const sum=(a)=>(b,c)=>{
//     return a+b+c
// }

// console.log(sum(4)(5)(2))

// -------------------------------------------
// const manipulateDom=(ele)=(content)=>{
//     document.getElementById(ele).innerHTML(content)
// }

// manipulateDom("header")("hello user")
// manipulateDom("foo")("goodbye user")

// --------------------------------------------------------


//function to convert normal function into curried function

// const curry=(fn)=>{
//     return function curried(...args){
     
//         if(args.length>=fn.length) {
//             return fn(...args)
//         }else{
//             return function (...next){
//                 return curried(...args,...next)
//             }
//         }
//     }

// }
// const sum=(a,b,c)=>{
//     return a+b+c
// }
// const totalSum = curry(sum)
// console.log(totalSum(1,2)(3)) 


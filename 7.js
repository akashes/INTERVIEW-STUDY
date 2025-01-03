

// const add=(a)=>{
//     return function (b){
//         if(b===undefined){
//             return a
       
//     }
//     return add(a+b)
   
// }
// }

const add=a=>b=>b?add(a+b):a
const mul=a=>b=>b?mul(a*b):a


console.log(mul(1)(2)(3)(4)())

console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)(4)(5)());
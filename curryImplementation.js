// //converting normal fn to curry fn


// function curry(fn){
//     return function curriedFunc(...args){
//         if(args.length>=fn.length){
//             return fn(...args)
//         }else{
//             return function(...next){
//                 return curriedFunc(...args,...next)
//             }
//         }
//     }
// }

// const sum=(a,b,c)=>a+b+c
// const totalSum = curry(sum)
// console.log(totalSum(1)(2)(3)
// )



function curry(fn){
    return function curried (...args){

        if(args.length>=fn.length){
           return fn(...args)

        }else{
            return function(...next){
                return  curried(...args,...next)

                
            }

        }
    }

}

function sum(a,b,c,d){
    return a+b+c+d
}

// console.log(sum(1,2,3,4))

const curriedFn=curry(sum)
console.log(curriedFn(1)(2)(2)(4))
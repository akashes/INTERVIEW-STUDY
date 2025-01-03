// //DECORATOR DESING PATTERN 
// const memoize=(fn)=>{
//     const cache ={}
//     let fnExecuted=0
//     let cacheUsed=0
//     return function(...args){
//         let key = JSON.stringify(args)
//         if(key in cache){
//             cacheUsed+=1
//             console.log({cacheUsed})
//             return cache[key]
//         } 

//         fnExecuted+=1
//         console.log({fnExecuted})
//             cache[key]=fn(...args)

//             return cache[key]
        

//     }

// }

// const sum=(a,b)=>{
//     return a+b;
// }

// let memo=memoize(sum)
// console.log(memo)
// console.log(memo(1,2))
// console.log(memo(2,1))
// console.log(memo(1,2))
// console.log(memo(1,2))

const car={


}

car={}
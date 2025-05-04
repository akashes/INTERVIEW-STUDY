
//this is like a memoized function or more like an effecient function
//that doesnot perform the non relevant calculation again and again
//but it doesnt cache result if the arguments are same
//that is done in next two examples

// const mainFn=()=>{
//     for (let i=1;i<10000000;i++){

//     }
//     return function(n1,n2){

//         return n1+n2
//     }
// }
// const resultFn = mainFn()
// console.time('first call')
// console.log(resultFn(1,2)) // 3
// console.timeEnd('first call') 

// console.time('second call')
// console.log(resultFn(1,2)) // 3
// console.timeEnd('second call')

// console.time('third call')
// console.log(resultFn(1,2)) // 3 
// console.timeEnd('third call')

// ----------------------

const memoize=(fn,context)=>{
    const res ={}
    return function(...args){
        const argsCache = JSON.stringify(args)
        if(!res[argsCache]){
       
            res[argsCache] = fn.call(context||this,...args)
        }
        return res[argsCache]
        }
    }

const productFn=(n1,n2)=>{
    for(let i=1;i<10000000;i++){
        // do something
    }
    return n1*n2
}
const productMemoize = memoize(productFn)


console.time('first call')
console.log(productMemoize(1,2)) // 2
console.timeEnd('first call')

console.time('second call')
console.log(productMemoize(1,2)) // 2
console.timeEnd('second call')


//with context passing 
let obj={
    val1:3,
    val2:4,
    product:function(){
        for(let i=1;i<10000000;i++){
            // do something
        }

        return this.val1*this.val2
    }
}


const productMemoizeObj = memoize(obj.product,obj)
console.time('first call')
console.log(productMemoizeObj()) // 12
console.timeEnd('first call')

console.time('second call')
console.log(productMemoizeObj()) // 12
console.timeEnd('second call')
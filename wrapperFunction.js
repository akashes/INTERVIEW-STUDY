

function logger(cb){
   return function(...args){
    const res=  cb(...args)
    console.log(`result of the operation is ${res}`)
    return res
   }

  
}

function sum(a,b){
   return a+b
}


const modifiedFunction=logger(sum)
modifiedFunction(3,4)
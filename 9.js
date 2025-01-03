const creator=()=>{
    let executed=false
    return sum=(a,b)=>{
        if(executed){
            return undefined

        } else{
            executed=true

            return a+b
        }

    }
}

let findSum =creator()
console.log(findSum(3,4))
console.log(findSum(3,4))
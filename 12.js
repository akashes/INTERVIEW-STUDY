const callingFn=(fn,args,t)=>{
    const timerId =  setTimeout(()=>{

        fn(...args)
    },t)  
    return returnFn=()=>{
        clearTimeout(timerId)
        console.log('cleared')

    }
}
const sum =(...args)=>{
   console.log(args.reduce((a,b)=>a+b)) 
}

const cancel = callingFn(sum,[2,3],500)


setTimeout(()=>{
    cancel()
},100) 
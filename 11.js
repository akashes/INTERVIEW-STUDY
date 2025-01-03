const promise1=new Promise((res)=>{
    setTimeout(()=>{

        res('task1')
    },1000)
})
promise1.then((data)=>{
    console.log(data)
}).then(()=>{

    console.log('task2')
    console.log('task3')
}) 
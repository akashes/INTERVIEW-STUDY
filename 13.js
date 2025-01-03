// let arr=[1,2,3,4,56,77,9]
// const result =[]

// for(let i=0;i<arr.length;i+=2){
//     console.log(arr[i])
//     result.push(arr.slice(i,i+2))
// }

// console.log(result) 

// const res=arr.reduce((acc,_,i,arr)=>{
//     console.log(acc)
//     if(i%2==0) acc.push(arr.slice(i,i+2))
//         return acc
// },[])


// console.log(res)


var chunk = function(arr, size) {

  
    let result = []
    let sub=[]
    for(let i =0;i<arr.length;i++){

        sub.push(arr[i])
        if(sub.length===size){
            result.push(sub)
            sub=[]
        }
        
        
        
    }
    if(sub.length){
        result.push(sub)
    }
    return result


        

};
    
        let res=chunk([1,2,3,4,4,56,77],3)
        console.log(res)
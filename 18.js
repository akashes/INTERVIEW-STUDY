

const multiply=(value)=>{
    let arr=[]
 
    let n=1
    while( arr.length===0 || arr[arr.length-1]<100){
        arr.push(value*n)
        console.log(`${arr.length}*${value}=${value*n}`)
        n++

    }
    return arr

}
const res = multiply(5)
console.log(res)
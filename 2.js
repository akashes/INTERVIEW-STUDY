var filter = function(arr, fn) {
    const newArr=[]
    for(let i in arr){
       let val= fn(arr[i],Number(i))
     val?newArr.push(arr[i]):""
    }
    return newArr
    
};
let arr=[10,20,30,40]
console.log(filter(arr,greaterThan10)
)

function greaterThan10(n) { return n > 10; }


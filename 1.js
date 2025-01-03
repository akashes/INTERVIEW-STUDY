var map = function(arr, fn) {
    const newArr = new Array(arr.length)
 
    for(const i in arr){
    //    newArr.push(fn(arr[i],Number(i)))
    newArr[i]=fn(arr[i],Number(i))

    }
    return newArr
    
};


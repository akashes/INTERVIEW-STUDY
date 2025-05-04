
function add(a){
    return function(b){
        if(b) return add(a+b)
            return a
    
    }
}
console.log(add(1)(2)(4)(8)())

//partial application

function sum(a){
    return function(b,c){
        return a+b+c
    }
}

console.log(sum(1)(2,4))

//for currying the no of nested functions depends on the no of arguments
//but for partial applications this is not followed


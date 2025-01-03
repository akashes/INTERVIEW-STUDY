





var compose = function(functions) {

    return function(x) {
      return  functions.reduceRight((acc,f)=>{
        console.log(acc,f)
         return f(acc)
        },x)
    } 

    
};







const f1 = x => x + 1;
const f2 = x => x * 2;
const f3 = x => x - 3;

const functions = [f1, f2, f3];
const composedFunction = compose(functions);

console.log(composedFunction(5)); // Result is f1(f2(f3(5)))





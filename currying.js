// a function takes one argument at a time and returns another function that expecting another argument


function evaluate(operation){
    return function(a){
        return function(b){
            switch(operation){
                case 'sum' : return a+b;
                case 'multiply': return a*b;
                case 'divide' : return a/b;
                case 'subtract' : return a-b
            }
        }
    }
}

console.log(evaluate('divide')(2)(4))
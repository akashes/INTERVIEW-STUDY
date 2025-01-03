


var once = function(fn) {
    let called=false

    
    return function(...args){
        if(called){
            return undefined
        }else{
            called=true
            return fn(...args)
        }
 
         
    }
};


  let fn = (a,b,c) => (a + b + c)   
  let onceFn = once(fn)

  console.log(onceFn(1,2,3))
  console.log(onceFn(1,2,3))
  console.log(onceFn(1,2,3))
  
  
  
 
 
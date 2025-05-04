
var Module=(function(){
    function privateMethod(){

    }

    return {
        publicMethod:function(){
            //can call private method
        }
    }
})()


console.log(Module.publicMethod()) // publicMethod
console.log(Module.privateMethod()) // undefined
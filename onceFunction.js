//once function using closure
// let view;

// function likeTheVideo() {


//     let val=0
//   return  function print(){
//     if(val>1){
//         return
//     }
        
//         view = 'akash';
//         console.log('my name is', view);
//         val++
//     }
// }

// const inner = likeTheVideo()
// inner()
// inner()
// inner()
// inner()
// inner()

//more generic version of once function
function once(func,context){
    let ran;

    return function(){
        if(func){
            ran = func.apply(context|| this,arguments)
            // ran=func()
            func = null
       
        }
        return ran
    }
}

const hello =once( ()=>{
    console.log('hello')
})
hello()


const obj ={
    name:"arun",
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}

const greetFn= once(obj.greet,obj)
greetFn() // hello arun
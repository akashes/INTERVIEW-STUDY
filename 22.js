function a(){
    for(var i=0;i<3;i++){
        setTimeout(function(){
            console.log(i)
    
        },i*1000)

    }
}

a() 
//3,3,3
//making it print 0,1,2 using closure
function a(){
    for(var i=0;i<3;i++){
        (function(i){  
            setTimeout(function(){
                console.log(i)
        
            },i*1000)
        })(i)

    }
}
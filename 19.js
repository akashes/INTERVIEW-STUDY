
const cars={
    label:"Autos",
    subs:[
        {
            label:"Suvs",
            subs:[]
        },{
            label:"trucks",
            subs:[
                {
                    label:"2 wheel drive",
                    subs:[]
                },
                { 
                    lable:"4 wheel drive",
                    subs:[]
                }
            ]
        }
    ]
}


function fetchData(obj){
    let newObj={}
    for(let i in obj){
   


        if(typeof obj[i]==='object' && obj[i]!==null){
            fetchData(obj[i])
        }else{
            // newObj.lable=obj[i]
            console.log(i+" : "+obj[i])
        }
    
 

}

}

const val=fetchData(cars)

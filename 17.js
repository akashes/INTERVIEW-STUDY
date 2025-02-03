const arr =[
    "John",
    "Emma",
    "David",
    "Sophia",
    "Michael",
    "Olivia",
    "Daniel",
    "John",
    "Emma",
    "Ava",
    "James",
    "David",
    "John",
    "Emma",
    "David"
    ]

    const include=(arr,value)=>{
      for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
          return true
        }
      }
    }

    
let dupArr=[]
const createUniqueArray=(value)=>{
  for(let i=0;i<value.length;i++){
    if(!include(dupArr,value[i])){
      // console.log('duplicate encountered',value[i])

      dupArr.push(value[i])
    }

  }
  return dupArr


}

const res = createUniqueArray(arr)
console.log(res)




// let dupArr=[]
// let isDup
// createUniqueArray=(value)=>{
//   for(let i=0;i<value.length;i++){
//       for(let j=0;j<=dupArr.length-1;j++){
   
//         if(dupArr[j]==value[i]){
//           isDup = true;
//           break;
          
//         }
//       }
//       if(!isDup){
//         dupArr.push(value[i])
//       }
//   }
//   return dupArr
// }
// const res = createUniqueArray(arr)
// console.log(res)













//   const newArr=[]
//   const duplicates =[]

//   arr.map((name)=>{
//     if(newArr.includes(name)){
//         if(duplicates.includes(name)){
//             return
//         }
//         duplicates.push(name)
//         return

//     }

//     newArr.push(name)
//   })


//   //arr without duplicates
//   console.log(newArr)

//   //arr with duplicate names 
//   console.log(duplicates)
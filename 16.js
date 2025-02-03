const names=['akash','aswin','varun']

// const newNames = names.map((name)=>{
//    const namez = name.split("").map((letter,index)=>{
//         if(index==0){
//             return letter.toUpperCase()
//         }
//         return letter

//     })
//     return namez.join("")
// })

// console.log(newNames)

const res = names.map(name=>`<p>${name}</p>`)
console.log(res)
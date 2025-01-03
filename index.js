function expect(val){
    try{
        const toBe=(v)=>(val===v)?true:(()=>{throw new Error('Not Equal')})()
        
            const notToBe=(v)=>(val!==v)?true:(()=>{throw new Error('Equal')})()

            return{
                toBe,notToBe
            }
    }catch(error){
        console.log(error.stack)
        
    }



}

console.log(expect(10).toBe(11))
// console.log(expect(10).toBe(11))

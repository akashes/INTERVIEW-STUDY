
//time optimization

function find(index){
    let a =[]
        for(let i=0;i<10000000;i++){
            a[i]=i*i
        }
        return function(index){
            console.log(a[index])
        }
}
const inner = find()

console.time('first')
inner(6)
console.timeEnd('first')

console.time('second')
inner(50)
console.timeEnd('second')

console.time('third')
inner(100)

console.timeEnd('third')
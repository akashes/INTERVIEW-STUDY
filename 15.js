let arr1=[1,3,4,6,7,8]
let arr2=[65,34,67,12,8]

const isMatch = arr1.filter(v=>arr2.includes(v))
console.log(isMatch)
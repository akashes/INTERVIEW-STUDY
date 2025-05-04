function dummy(){
  
} 
dummy.prototype.print=function(){
  console.log('hello')
}

let a = new String('hello')
a.__proto__=dummy.prototype
a.print()

// function Dummy() {}
// Dummy.prototype.print = function () {
//     console.log('haha');
// };

// let a = new String("akash");
// a.__proto__ = Dummy.prototype;

// a.print(); // ✅ prints 'haha'

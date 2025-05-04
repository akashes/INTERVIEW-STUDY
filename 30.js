

class Animal{
    constructor(name){
        this.name=name
        this.bark=function(){
            console.log('bark')
        }
    }
}

const animal = new Animal('dog')
console.log(animal)
animal.bark()
const obj={
    name:"John",
    age:30,
    job:"developer",
    hobbies:["reading","swimming","coding"]
}

for(const [key,val] of Object.entries(obj)){
    console.log(key,val)
}
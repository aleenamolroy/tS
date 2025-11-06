enum Role{
    Admin,
    User,
    Guest
}
let MyRole:Role=Role.Admin
console.log(MyRole)
function checkRole(role:Role){
    if(role===Role.Admin){
        return `welcome Admin.`
    }
    else{
        return 'Access Limited'
    }
}
console.log(checkRole(MyRole))

enum Status{
    pending=1,
    Inprogress=2,
    completed=3
}
function StatusDes(status:Status){
    if(status===Status.pending){
        return `the status is pending`
    }
    else if(status===Status.Inprogress){
        return `the status is Inrogress`
    }
    else if(status===Status.completed){
                return `the status is completed`
    }
    else{
        return "unknown status"
    }
}

console.log(StatusDes(Status.Inprogress))

interface Employee{
    id:number,
    name:string,
    department:string
}
type manager={
    teamsize:number,
    project:string
}
type Management=Employee&manager
const employee:Management={
    id:1,
    name:"Aleena",
    department:"Devlopment",
    teamsize:4,
    project:'e-com',
    
}
console.log(employee)
let lead:Management={
    id:1,
    name:"Priya",
    department:"HR",
    teamsize:7,
    project:'hello'
}
console.log(lead);

type ResponseStatus="success"|"failure"|404
function HandleResponse(status:ResponseStatus){
    if(status=="success"){
        return 'status sucess'
    }
    else if(status==="failure"){
        return 'status failure'
    }
    else if(status===404){
        return 'status 404'
    }
    // else if(status===741){
    //     return 'Hello'
    // }
    else{
        return 'No status'
    }
}
console.log(HandleResponse(404))


interface Cat{meow():void}
interface Dog{bark():void}
function isCat(animal:Cat|Dog): animal is Cat{
    return (animal as Cat).meow !== undefined
}
function makeSound(animal:Cat|Dog){
    if(isCat(animal)){
        animal.meow()
    }
    else{
        animal.bark()
    }
}
const cat:Cat={meow:()=>console.log("Meow")}
const dog:Dog={bark:()=>console.log("Bark")}

console.log(makeSound(cat));
console.log(makeSound(dog))

type Value= string|number
function printValue(value:Value){
    if(typeof value==='string'){
        return value.toUpperCase()
    }
    else{
        return value.toFixed(2)
    }
}
console.log(printValue('hello'))
console.log(printValue(1.254))
let score:number=10
const skills:string[]=['html','css','js']
type Product={id:number,name:string,price:number}
let p1:Product={
    id:1,
    name:'pen',
    price:10,
}

function square (a:number):number{
    return a*a
}
console.log(square(2));

type status='success'|'error'

function FormatInput(ip:number|string){
    if(typeof ip==="number"){
        return ip*2
    }
    else if(typeof ip==='string'){
        return ip.toUpperCase()
    }
}
console.log(FormatInput(10))
console.log(FormatInput('hi'))

type ResponseData={
    data:string|number,
    success:boolean
}
let res:ResponseData={
    data:'Hello',
    success:true
}

interface Car{
    brand:string,
    model:string,
    price?:number
}
let car:Car={
    brand:'Ford',
    model:'mfkfk',
    // price:20000000
}
interface Animal{
    name:string,
}
interface Dog extends Animal{
    breed:string
}
const D1:Dog={
    name:'Tobby',
    breed:'labrador'
}
interface Product1 {
    id:number,
    name:string,
    price:number
}
class item implements Product1{
    id:number
    name: string
    price: number
    constructor(id:number,name:string,price:number){
        this.id=id
        this.name=name
        this.price=price
    }
    getInfo(){
        return `${this.name} costs ${this.price}`
        
    }
}


function identity<T>(value:T){
    return value
}
console.log(identity(10))
console.log(identity('Meera'));

interface Response<T>{
    data:T,
    message:string
}
let userRes:Response<{id:number,name:string}>={
    data:{
     id:1,
    name:'arya'
    },
    message:"Hello"
}
console.log(userRes)


let age:number=23
let name1:string='Aleena'
let developer:boolean=true
// age='Aleena'
let numbers:number[]=[1,2,3,4]
let userAge=23
console.log(userAge)

function sayHello(name:string){
    return `Hello ${name}`
}
console.log(sayHello('Aleena'))
function multiply(a:number,b=2){
   return a*b   
}
console.log(multiply(10,4));

let Fruits:string[]=['Apple','Orange','Banana','Mango']
let scors:number[]=[78,58,46,20]
type Person={name:string; age:number; isStudent:boolean};
let person:Person={name:"Aleena",age:23,isStudent:true}

function PrintPerson(person:Person){
    return person
}
console.log(PrintPerson(person))

type status="success"|"error"
let currentStatus:status="success"
currentStatus="error"
// currentStatus="loading"

type UserId=string|number;

function printId(id:UserId){
    return `Your id is ${id}`
}
console.log(printId(123))

interface Product{id:number,name:string,price:number,discount?:number}
let product:Product={id:1,name:'Book',price:30}
function Showproduct(product:Product){
    return product
}
console.log(Showproduct(product))

function   firstElement<T> (arr:T[]) : T{
    return arr[0]
}
console.log(firstElement<number>([4,2,5,6]))
console.log(firstElement<string> (['apple','orange']))

interface Todo{
    title:string;
    completed:boolean;
}
const todo:Todo[]=[
    {title:'Reading',completed:true},
    {title:'learn typescript',completed:true},
    {title:'Leetcode',completed:false}
]
function showTodo(list:Todo[]){
    list.forEach(todo => {
        console.log(`${todo.title} -${todo.completed ? "Done":"pending"}`)
    });
}
showTodo(todo)
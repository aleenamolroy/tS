function Add(a:number,b:number):number{
    return a+b
}
console.log(Add(1,4))
type Product={
    name:string,
    price:number,
    instock:boolean
}
const product:Product={
    name:'Book',
    price:10,
    instock:true
}
const product1:Product={
    name:'pen',
    price:5,
    instock:true
}
console.log(`${product.name} and ${product.price}, ${product1.name} and ${product1.price}`)

interface Student{
    id:number;
    name:string;
    marks:number;
    display():void
}
const student:Student={
    id:1,
    name:'Maria',
    marks:34,
    display(){
        console.log(`${this.name} has marks ${this.marks}`)
    }
}
student.display()

type Id= number | string
interface Employee{
    id:Id,
    name:string,
    department:string
}

function printEmployee(employee:Employee){
    console.log(`${employee.id},${employee.name},${employee.department}`)
}
const employee:Employee={
    id:1,
    name:'Aryan',
    department:'development'
}
const employee1:Employee={
    id:'EMP1',
    name:'Aryan',
    department:'development'
}
printEmployee(employee)
printEmployee(employee1)
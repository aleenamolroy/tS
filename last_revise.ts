function Multiply(a:number,b:number):number{
    return a*b
}
console.log(Multiply(2,6))

type Book={
    title:string,
    price:number,
    instock:boolean
}
const book1:Book={
    title:'hello',
    price:200,
    instock:true
}
const book2:Book={
    title:'hai',
    price:300,
    instock:false
}
console.log(`${book1.title} and ${book2.title}`)


interface Teacher{
    name:string,
    subject:string,
    teach():void
}
const teacher:Teacher={
    name:'Maya',
    subject:'Malayalam',
    teach() {
        console.log(`${this.name} is ${this.subject} teacher`);
        
    },
}
teacher.teach()

class Laptop{
    brand:string
    price:number
    constructor(brand:string,price:number){
        this.brand=brand
        this.price=price
    }
    details(){
        console.log(`${this.brand} and ${this.price}`)
    }
}
const L1=new Laptop('Acer',45000)
const L2=new Laptop('HP',55000)
L1.details()
L2.details()

class Account{
    private balance=0
    deposit(amount:number){
        if(amount>0){
            this.balance+=amount
        }
    }
    withdraw(amount:number){
        if(this.balance>0){
            this.balance-=amount
        }
    }
    getBalance(){
        console.log(`balance: ${this.balance}`)
    }
}
const a1=new Account()
a1.deposit(200)
a1.withdraw(100)
a1.getBalance()


let city="Kochi"
let population=22000
console.log(typeof(city),typeof(population))

enum Department{
    'Hr',
    'Finance',
    'IT'
}
interface Employee{
    id:string,
    name:string,
    department:Department
}
const emp:Employee={
    id:'emp1',
    name:'Sreya',
    department:Department.Hr
}
console.log(emp,Department[emp.department])

function identity<S>(value: S):S{
    return value
}
console.log(identity<string>('Hello'))
console.log(identity<number>(20))
function addNumbers <T extends number>(a: T,b: T):T{
    return (a+b) as T
}
console.log(addNumbers(4,2))
type Id=string | number
const nums:number[]=[1,2,3,4]
const student:[string,number]=['Aleena',23]

class Animal{
    constructor(name){
        this.name=name
    }
    display(){
        console.log(this.name)
    }
}
const dog=new Animal('Dog')
dog.display()

class A{
    Hello(){
        console.log('Hello A')
    }
}
class B extends A{
    
    Hello(){
                super.Hello()

        console.log("Hello B")
    }
}
const b=new B()
b.Hello()
class Music{
     loading(){
        console.log('music loading..')
    }
    play(song){
        this.loading()
        console.log(`${song} playing`)
    }
}
const m=new Music()
m.play('Hello')
interface Vehicle{
    brand:string,
    speed:number,
    move():void
}
class Car1 implements Vehicle{
    brand:string
    speed:number
    constructor(brand:string,speed:number) {
        this.brand=brand;
        this.speed=speed;
    }
    move(): void {
                console.log(`${this.brand} is move on speed ${this.speed}`)

    }
}
const c2=new Car1("Ford",200)
c2.move()
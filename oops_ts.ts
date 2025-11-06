class Car{
    brand:string
    model:string
    year:number
    constructor(brand:string,model:string,year:number){
        this.brand=brand
        this.model=model
        this.year=year
    }
    displayInfo(){
        console.log(`This car brand ${this.brand}, model ${this.model}, year ${this.year}`)
    }
}
class Electrocar extends Car{
    batteryCapacity:string
    constructor(brand,model,year,batteryCapacity:string){
        super(brand,model,year)
        this.batteryCapacity=batteryCapacity
    }
    displayInfo(): void {
        console.log(`This car brand ${this.brand}, model ${this.model}, year ${this.year},batteryCapacity ${this.batteryCapacity}`)
    }
}
const c1=new Electrocar('Ford','F-150',2018,'75Ah')
c1.displayInfo()
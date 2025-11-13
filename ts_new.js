var Car1 = /** @class */ (function () {
    function Car1(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car1.prototype.move = function () {
        console.log("".concat(this.brand, " is move on speed ").concat(this.speed));
    };
    return Car1;
}());
var c2 = new Car1("Ford", 200);
c2.move();

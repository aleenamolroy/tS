var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("This car brand ".concat(this.brand, ", model ").concat(this.model, ", year ").concat(this.year));
    };
    return Car;
}());
var Electrocar = /** @class */ (function (_super) {
    __extends(Electrocar, _super);
    function Electrocar(brand, model, year, batteryCapacity) {
        var _this = _super.call(this, brand, model, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    Electrocar.prototype.displayInfo = function () {
        console.log("This car brand ".concat(this.brand, ", model ").concat(this.model, ", year ").concat(this.year, ",batteryCapacity ").concat(this.batteryCapacity));
    };
    return Electrocar;
}(Car));
var c1 = new Electrocar('Ford', 'F-150', 2018, '75Ah');
c1.displayInfo();

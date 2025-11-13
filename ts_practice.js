var score = 10;
var skills = ['html', 'css', 'js'];
var p1 = {
    id: 1,
    name: 'pen',
    price: 10,
};
function square(a) {
    return a * a;
}
console.log(square(2));
function FormatInput(ip) {
    if (typeof ip === "number") {
        return ip * 2;
    }
    else if (typeof ip === 'string') {
        return ip.toUpperCase();
    }
}
console.log(FormatInput(10));
console.log(FormatInput('hi'));
var res = {
    data: 'Hello',
    success: true
};
var car = {
    brand: 'Ford',
    model: 'mfkfk',
    // price:20000000
};
var D1 = {
    name: 'Tobby',
    breed: 'labrador'
};
var item = /** @class */ (function () {
    function item(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    item.prototype.getInfo = function () {
        return "".concat(this.name, " costs ").concat(this.price);
    };
    return item;
}());
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity('Meera'));
var userRes = {
    data: {
        id: 1,
        name: 'arya'
    },
    message: "Hello"
};
console.log(userRes);

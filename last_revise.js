function Multiply(a, b) {
    return a * b;
}
console.log(Multiply(2, 6));
var book1 = {
    title: 'hello',
    price: 200,
    instock: true
};
var book2 = {
    title: 'hai',
    price: 300,
    instock: false
};
console.log("".concat(book1.title, " and ").concat(book2.title));
var teacher = {
    name: 'Maya',
    subject: 'Malayalam',
    teach: function () {
        console.log("".concat(this.name, " is ").concat(this.subject, " teacher"));
    },
};
teacher.teach();
var Laptop = /** @class */ (function () {
    function Laptop(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Laptop.prototype.details = function () {
        console.log("".concat(this.brand, " and ").concat(this.price));
    };
    return Laptop;
}());
var L1 = new Laptop('Acer', 45000);
var L2 = new Laptop('HP', 55000);
L1.details();
L2.details();
var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0;
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (this.balance > 0) {
            this.balance -= amount;
        }
    };
    Account.prototype.getBalance = function () {
        console.log("balance: ".concat(this.balance));
    };
    return Account;
}());
var a1 = new Account();
a1.deposit(200);
a1.withdraw(100);
a1.getBalance();
var city = "Kochi";
var population = 22000;
console.log(typeof (city), typeof (population));
var Department;
(function (Department) {
    Department[Department["Hr"] = 0] = "Hr";
    Department[Department["Finance"] = 1] = "Finance";
    Department[Department["IT"] = 2] = "IT";
})(Department || (Department = {}));
var emp = {
    id: 'emp1',
    name: 'Sreya',
    department: Department.Hr
};
console.log(emp, Department[emp.department]);
function identity(value) {
    return value;
}
console.log(identity('Hello'));
console.log(identity(20));
function addNumbers(a, b) {
    return (a + b);
}
console.log(addNumbers(4, 2));

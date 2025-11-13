function Add(a, b) {
    return a + b;
}
console.log(Add(1, 4));
var product = {
    name: 'Book',
    price: 10,
    instock: true
};
var product1 = {
    name: 'pen',
    price: 5,
    instock: true
};
console.log("".concat(product.name, " and ").concat(product.price, ", ").concat(product1.name, " and ").concat(product1.price));
var student = {
    id: 1,
    name: 'Maria',
    marks: 34,
    display: function () {
        console.log("".concat(this.name, " has marks ").concat(this.marks));
    }
};
student.display();
function printEmployee(employee) {
    console.log("".concat(employee.id, ",").concat(employee.name, ",").concat(employee.department));
}
var employee = {
    id: 1,
    name: 'Aryan',
    department: 'development'
};
var employee1 = {
    id: 'EMP1',
    name: 'Aryan',
    department: 'development'
};
printEmployee(employee);
printEmployee(employee1);

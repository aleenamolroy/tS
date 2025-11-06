var age = 23;
var name1 = 'Aleena';
var developer = true;
// age='Aleena'
var numbers = [1, 2, 3, 4];
var userAge = 23;
console.log(userAge);
function sayHello(name) {
    return "Hello ".concat(name);
}
console.log(sayHello('Aleena'));
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(10, 4));
var Fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
var scors = [78, 58, 46, 20];
var person = { name: "Aleena", age: 23, isStudent: true };
function PrintPerson(person) {
    return person;
}
console.log(PrintPerson(person));
var currentStatus = "success";
currentStatus = "error";
function printId(id) {
    return "Your id is ".concat(id);
}
console.log(printId(123));
var product = { id: 1, name: 'Book', price: 30 };
function Showproduct(product) {
    return product;
}
console.log(Showproduct(product));
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([4, 2, 5, 6]));
console.log(firstElement(['apple', 'orange']));
var todo = [
    { title: 'Reading', completed: true },
    { title: 'learn typescript', completed: true },
    { title: 'Leetcode', completed: false }
];
function showTodo(list) {
    list.forEach(function (todo) {
        console.log("".concat(todo.title, " -").concat(todo.completed ? "Done" : "pending"));
    });
}
showTodo(todo);

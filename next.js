var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var MyRole = Role.Admin;
console.log(MyRole);
function checkRole(role) {
    if (role === Role.Admin) {
        return "welcome Admin.";
    }
    else {
        return 'Access Limited';
    }
}
console.log(checkRole(MyRole));
var Status;
(function (Status) {
    Status[Status["pending"] = 1] = "pending";
    Status[Status["Inprogress"] = 2] = "Inprogress";
    Status[Status["completed"] = 3] = "completed";
})(Status || (Status = {}));
function StatusDes(status) {
    if (status === Status.pending) {
        return "the status is pending";
    }
    else if (status === Status.Inprogress) {
        return "the status is Inrogress";
    }
    else if (status === Status.completed) {
        return "the status is completed";
    }
    else {
        return "unknown status";
    }
}
console.log(StatusDes(Status.Inprogress));
var employee = {
    id: 1,
    name: "Aleena",
    department: "Devlopment",
    teamsize: 4,
    project: 'e-com',
};
console.log(employee);
var lead = {
    id: 1,
    name: "Priya",
    department: "HR",
    teamsize: 7,
    project: 'hello'
};
console.log(lead);
function HandleResponse(status) {
    if (status == "success") {
        return 'status sucess';
    }
    else if (status === "failure") {
        return 'status failure';
    }
    else if (status === 404) {
        return 'status 404';
    }
    // else if(status===741){
    //     return 'Hello'
    // }
    else {
        return 'No status';
    }
}
console.log(HandleResponse(404));
function isCat(animal) {
    return animal.meow !== undefined;
}
function makeSound(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
var cat = { meow: function () { return console.log("Meow"); } };
var dog = { bark: function () { return console.log("Bark"); } };
console.log(makeSound(cat));
console.log(makeSound(dog));
function printValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
console.log(printValue('hello'));
console.log(printValue(1.254));

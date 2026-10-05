

// Q1
function hello() {
    console.log("Hello Everyone");
}
hello();


// Q2
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();


// Q3
function navi() {
    console.log("Sai Samarth");
}
navi();


// Q4
function message() {
    console.log("Hello");
    console.log("Good Morning");
    console.log("Welcome");
}
message();


// Q5
function numbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers();


// Q6
function check() {
    let age = 21;

    if (age >= 18) {
        console.log("You are eligible");
    }
}
check();


// Q7
function details() {
    console.log("Sai Samarth");
    console.log("BTech");
    console.log("Frontend Developer");
}
details();


// Q8
function company() {
    console.log("Kodnest");
}
company();


// Q9
function welcomeUser() {
    console.log("Welcome User");
}
welcomeUser();
welcomeUser();
welcomeUser();


// Q10
function first() {
    console.log("First Function");
}

function second() {
    console.log("Second Function");
}

first();
second();



// Q11
function showName(name) {
    console.log(name);
}
showName("Sai Samarth");


// Q12
function showTwo(name, age) {
    console.log(name);
    console.log(age);
}
showTwo("Sai Samarth", 21);


// Q13
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(10, 20);


// Q14
function subtractNumbers(a, b) {
    console.log(a - b);
}
subtractNumbers(20, 10);


// Q15
function multiplyNumbers(a, b) {
    console.log(a * b);
}
multiplyNumbers(10, 5);


// Q16
function divideNumbers(a, b) {
    console.log(a / b);
}
divideNumbers(20, 5);


// Q17
function studentDetails(name, age) {
    console.log(name);
    console.log(age);
}
studentDetails("Sai Samarth", 21);


// Q18
function employeeDetails(name, role, salary) {
    console.log(name);
    console.log(role);
    console.log(salary);
}
employeeDetails("Sai Samarth", "Developer", 30000);


// Q19
function fourValues(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
fourValues(10, 20, 30, 40);


// Q20
function sixValues(a, b, c, d, e, f) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
sixValues(1, 2, 3, 4, 5, 6);



// Q21
function student21(name, department = "CSE", cgpa) {
    console.log(name);
    console.log(department);
    console.log(cgpa);
}
student21("Sai Samarth", undefined, 8.2);


// Q22
function user22(name, age = 18) {
    console.log(name);
    console.log(age);
}
user22("Sai Samarth");


// Q23
function employee23(name, role = "Developer") {
    console.log(name);
    console.log(role);
}
employee23("Sai Samarth");


// Q24
function form24(name, department, cgpa, disability = "no") {
    console.log(name);
    console.log(department);
    console.log(cgpa);
    console.log(disability);
}

form24("Sai Samarth", "CSE", 8.2);
form24("Rahul", "ISE", 7.5, "yes");


// Q25
function values25(a, b, c = 10) {
    console.log(a);
    console.log(b);
    console.log(c);
}
values25(10, 20);


// Q26
function addition26(a, b) {
    return a + b;
}

let answer26 = addition26(10, 20);
console.log(answer26);


// Q27
function subtraction27(a, b) {
    return a - b;
}

let answer27 = subtraction27(20, 10);
console.log(answer27);


// Q28
function multiplication28(a, b) {
    return a * b;
}

let answer28 = multiplication28(10, 5);
console.log(answer28);


// Q29
function division29(a, b) {
    return a / b;
}

let answer29 = division29(20, 5);
console.log(answer29);


// Q30
function salary30() {
    return 40000;
}

let answer30 = salary30();
console.log(answer30);




// Q31
function getSalary(salary) {
    return salary;
}

let answer31 = getSalary(30000);
console.log(answer31);


// Q32
function getName() {
    return "Sai Samarth";
}

let answer32 = getName();
console.log(answer32);


// Q33
function checkMarks(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkMarks(70));


// Q34
function getDiscount(price, discount) {
    return discount;
}

console.log(getDiscount(1000, 100));


// Q35
function calculate35(a, b) {
    return a + b;
}

function show35() {
    let result = calculate35(10, 20);
    console.log(result);
}

show35();


// Q36
let city36 = "Bangalore";

function showCity36() {
    console.log(city36);
}

showCity36();


// Q37
let person37 = {
    name: "Sai Samarth",
    designation: "Developer"
};

function showPerson37() {
    console.log(person37.name);
    console.log(person37.designation);
}

showPerson37();


// Q38
let salary38 = 30000;

function addBonus38() {
    let bonus = 5000;
    console.log(salary38 + bonus);
}

addBonus38();


// Q39
let employee39 = {
    name: "Sai Samarth",
    role: "Developer",
    salary: 30000
};

function showEmployee39() {
    console.log(employee39.name);
    console.log(employee39.role);
    console.log(employee39.salary);
}

showEmployee39();


// Q40
let course40 = "JavaScript";

function first40() {
    console.log(course40);
}

function second40() {
    console.log(course40);
}

first40();
second40();




// Q41
function namedFunction(value) {
    console.log(value);
}

namedFunction("Hello");


// Q42
let anonymousFunction = function(value) {
    console.log(value);
};

anonymousFunction("Hello");


// Q43
let arrowFunction = (value) => {
    console.log(value);
};

arrowFunction("Sai Samarth");


// Q44
let arrowAdd = (a, b) => {
    return a + b;
};

console.log(arrowAdd(10, 20));


// Q45
function namedAdd(a, b) {
    return a + b;
}

let anonymousAdd = function(a, b) {
    return a + b;
};

let arrowAdd2 = (a, b) => {
    return a + b;
};

console.log(namedAdd(10, 20));
console.log(anonymousAdd(10, 20));
console.log(arrowAdd2(10, 20));


// Q46
(function() {
    console.log("Hello JavaScript");
})();


// Q47
(function(name) {
    console.log("Hello " + name);
})("Sai Samarth");


// Q48
(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Mobile", 20);


// Q49
function add49(a, b, callback) {
    let result = a + b;
    console.log(result);

    callback();
}

function message49() {
    console.log("Callback function");
}

add49(10, 20, message49);


// Q50
function add50(a, b, callback) {
    let result = a + b;
    console.log("Addition: " + result);

    callback(a, b);
}

function sub50(a, b) {
    console.log("Subtraction: " + (a - b));
}

add50(20, 10, sub50);

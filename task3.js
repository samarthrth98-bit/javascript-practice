// ==========================================
// Logical Operators
// ==========================================

// 1
console.log(10 > 5 && 20 > 15);

// 2
console.log(10 > 15 && 20 > 10);

// 3
console.log(10 > 20 || 15 > 10);

// 4
console.log(5 > 10 || 20 < 15);

// 5
console.log(!(10 > 5));

// 6
console.log(!(10 < 5));

// 7
let q7Condition1 = 10 > 5;
let q7Condition2 = 20 > 15;
let q7Condition3 = 5 > 10;

console.log((q7Condition1 && q7Condition2) || q7Condition3);

// 8
let q8Condition1 = 10 > 5;
let q8Condition2 = 20 > 15;
let q8Condition3 = 5 > 10;

console.log(q8Condition1 && q8Condition2 || !q8Condition3);


// ==========================================
// Ternary Operator
// ==========================================

// 9
let q9Age = 21;

console.log(q9Age >= 18 ? "Eligible" : "Not Eligible");

// 10
let q10Marks = 75;

console.log(q10Marks >= 35 ? "Pass" : "Fail");

// 11
let q11Number = 20;

console.log(q11Number > 10 ? "Greater than 10" : "Not greater than 10");

// 12
let q12Number = 7;

console.log(q12Number % 2 === 0 ? "Even" : "Odd");

// 13
let q13Salary = 40000;

console.log(q13Salary > 30000 ? "Good Salary" : "Low Salary");


// ==========================================
// Concatenation & Template Strings
// ==========================================

// 14
let q14FirstName = "Sai";
let q14LastName = "Samarth";
let q14City = "Bangalore";

console.log(q14FirstName + " " + q14LastName + " " + q14City);

// 15
let q15Name = "Sai Samarth";
let q15Age = 21;

console.log("Name: " + q15Name + ", Age: " + q15Age);

// 16
let q16Product = "Mobile";
let q16Price = 25000;
let q16Brand = "Samsung";

console.log("Product: " + q16Product + ", Price: " + q16Price + ", Brand: " + q16Brand);

// 17
let q17Name = "Sai Samarth";
let q17Qualification = "BTech";
let q17Company = "Kodnest";

console.log(`My name is ${q17Name}, I completed ${q17Qualification}, and I work at ${q17Company}.`);

// 18
let q18Name = "Sai Samarth";
let q18Age = 21;
let q18City = "Bangalore";

console.log(`My name is ${q18Name}, I am ${q18Age} years old, and I live in ${q18City}.`);


// ==========================================
// Type Casting — Implicit
// ==========================================

// 19
let q19Result = "10" + 5;

console.log(q19Result);
console.log(typeof q19Result);

// 20
let q20Result = 10 + 5;

console.log(q20Result);
console.log(typeof q20Result);

// 21
let q21Result = 10 + true;

console.log(q21Result);
console.log(typeof q21Result);

// 22
let q22Result = 10 + null;

console.log(q22Result);
console.log(typeof q22Result);

// 23
let q23Result = "Hello" + true;

console.log(q23Result);
console.log(typeof q23Result);

// 24
let q24Result = "Hello" + [1, 2, 3];

console.log(q24Result);
console.log(typeof q24Result);

// 25
let q25Result = 10 + {};

console.log(q25Result);
console.log(typeof q25Result);

// 26
let q26Result1 = "10" + 20;
let q26Result2 = 10 + true;
let q26Result3 = 10 + null;

console.log(q26Result1, typeof q26Result1);
console.log(q26Result2, typeof q26Result2);
console.log(q26Result3, typeof q26Result3);


// ==========================================
// Type Casting — Explicit
// ==========================================

// 27
let q27Value = "100";

console.log(Number(q27Value));

// 28
let q28Value = "25";

console.log(Number(q28Value));
console.log(typeof Number(q28Value));

// 29
console.log(Number(true));

// 30
console.log(Number(false));

// 31
console.log(Number(""));

// 32
console.log(Number(null));

// 33
console.log(Number(undefined));

// 34
console.log(Boolean("Hello"));

// 35
console.log(Boolean(""));

// 36
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));

// 37
let q37Array = [];

console.log(Boolean(q37Array));

// 38
let q38Object = {};

console.log(Boolean(q38Object));


// ==========================================
// Conditional Statements
// ==========================================

// 39
let q39Age = 21;

if (q39Age >= 18) {
    console.log("Eligible");
}

// 40
let q40Age = 21;

if (q40Age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// 41
let q41Marks = 75;

if (q41Marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 42
let q42Time = 15;

if (q42Time >= 1 && q42Time <= 6) {
    console.log("Early Morning");
} else if (q42Time >= 7 && q42Time <= 12) {
    console.log("Morning");
} else if (q42Time >= 13 && q42Time <= 17) {
    console.log("Afternoon");
} else if (q42Time >= 18 && q42Time <= 19) {
    console.log("Evening");
} else if (q42Time >= 20 && q42Time <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}

// 43
let q43Temperature = 30;

if (q43Temperature > 35) {
    console.log("Hot");
} else if (q43Temperature >= 20 && q43Temperature <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}

// 44
let q44Age = 21;
let q44Height = 175;
let q44Weight = 65;

if (q44Age >= 18) {
    if (q44Height >= 170) {
        if (q44Weight >= 60) {
            console.log("Eligible");
        }
    }
}


// ==========================================
// Switch Statement
// ==========================================

// 45
let q45TrafficLight = "red";

switch (q45TrafficLight) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Traffic Light");
}

// 46
let q46Day = "Monday";

switch (q46Day) {
    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// 47
let q47Choice = 2;

switch (q47Choice) {
    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}


// ==========================================
// Loops
// ==========================================

// 48
for (let q48i = 1; q48i <= 10; q48i++) {
    console.log(q48i);
}

// 49
let q49i = 10;

while (q49i >= 1) {
    console.log(q49i);
    q49i--;
}

// 50

// for...of
let q50Fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let fruit of q50Fruits) {
    console.log(fruit);
}

// for...in
let q50Person = {
    name: "Sai Samarth",
    role: "Frontend Developer",
    experience: 0
};

for (let key in q50Person) {
    console.log(key, q50Person[key]);
}
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
let q7a = 10 > 5;
let q7b = 20 > 15;
let q7c = 30 < 40;
console.log((q7a && q7b) || q7c);

// 8
let q8a = 10 > 5;
let q8b = 20 < 15;
let q8c = 30 > 20;
console.log(q8a && q8b || !q8c);


// 9
let q9Age = 21;
console.log(q9Age >= 18 ? "Eligible" : "Not Eligible");

// 10
let q10Marks = 70;
console.log(q10Marks >= 35 ? "Pass" : "Fail");

// 11
let q11Number = 15;
console.log(q11Number > 10 ? "Greater than 10" : "Not greater than 10");

// 12
let q12Number = 8;
console.log(q12Number % 2 === 0 ? "Even" : "Odd");

// 13
let q13Salary = 35000;
console.log(q13Salary > 30000 ? "Good Salary" : "Low Salary");


// 14
let q14FirstName = "Sai";
let q14LastName = "Samarth";
let q14City = "Bangalore";
console.log(q14FirstName + " " + q14LastName + " " + q14City);

// 15
let q15Name = "Sai";
let q15Age = 21;
console.log("Name: " + q15Name + ", Age: " + q15Age);

// 16
let q16Product = "Laptop";
let q16Price = 50000;
let q16Brand = "Dell";
console.log("Product: " + q16Product + ", Price: " + q16Price + ", Brand: " + q16Brand);

// 17
let q17Name = "Sai Samarth";
let q17Qualification = "BTech";
let q17Company = "Kodnest";
console.log(`My name is ${q17Name}, I completed ${q17Qualification}, and my company is ${q17Company}.`);

// 18
let q18Name = "Sai Samarth";
let q18Age = 21;
let q18City = "Bangalore";
console.log(`My name is ${q18Name}, I am ${q18Age} years old, and I live in ${q18City}.`);


// 19
let q19Result = "10" + 5;
console.log(q19Result, typeof q19Result);

// 20
let q20Result = 10 + 5;
console.log(q20Result, typeof q20Result);

// 21
let q21Result = 10 + true;
console.log(q21Result, typeof q21Result);

// 22
let q22Result = 10 + null;
console.log(q22Result, typeof q22Result);

// 23
let q23Result = "10" + true;
console.log(q23Result, typeof q23Result);

// 24
let q24Result = "Hello" + [1, 2, 3];
console.log(q24Result, typeof q24Result);

// 25
let q25Result = 10 + {};
console.log(q25Result, typeof q25Result);

// 26
let q26a = "5" + 5;
let q26b = 10 + true;
let q26c = 10 + null;
console.log(typeof q26a);
console.log(typeof q26b);
console.log(typeof q26c);


// 27
let q27 = Number("100");
console.log(q27);

// 28
let q28 = Number("25");
console.log(q28, typeof q28);

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
console.log(Boolean([]));

// 38
console.log(Boolean({}));


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
let q41Marks = 70;

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
let q47Choice = 1;

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

// 48
for (let q48 = 1; q48 <= 10; q48++) {
    console.log(q48);
}

// 49
let q49 = 10;

while (q49 >= 1) {
    console.log(q49);
    q49--;
}

// 50
let q50Fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for (let fruit of q50Fruits) {
    console.log(fruit);
}

let q50Person = {
    name: "Sai Samarth",
    role: "Frontend Developer",
    experience: 0
};

for (let key in q50Person) {
    console.log(key, q50Person[key]);
}
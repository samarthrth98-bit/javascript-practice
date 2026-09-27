// 1
let name = "Sai Samarth";
console.log(typeof name);

// 2
let age = 21;
console.log(age, typeof age);

// 3
let isStudent = true;
console.log(isStudent, typeof isStudent);

// 4
let value;
console.log(value, typeof value);

// 5
let data = null;
console.log(data, typeof data);

// 6
let str = "Hello";
let num = 100;
let bool = true;
let undef;
let nul = null;
console.log(str, num, bool, undef, nul);

// 7
let qualification = "BTech";
console.log(typeof qualification);

// 8
let salary = 30000;
console.log(typeof salary === "number");

// 9
let a = "100";
let b = 100;
console.log(typeof a, typeof b);

// 10
let myName = "Sai Samarth";
let myAge = 21;
let myQualification = "BTech";
let status = "Fresher";
console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(myQualification, typeof myQualification);
console.log(status, typeof status);

// 11
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

// 12
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);

// 13
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);

// 14
let mobiles = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];
console.log(mobiles[mobiles.length - 1]);

// 15
let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums[nums.length - 2]);

// 16
let foods = ["Pizza", "Burger", "Biryani", "Dosa", "Chicken"];
console.log(foods[0], foods[2], foods[foods.length - 1]);

// 17
let cricketers = ["Virat", "Rohit", "Dhoni", "Bumrah", "Gill"];
console.log(cricketers[3]);

// 18
let toys = ["Car", "Ball", "Robot", "Teddy"];
console.log(toys[toys.length - 1]);

// 19
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(values[0], values[values.length - 1], values[values.length - 2]);

// 20
let mixed = ["Apple", "Car", "Virat", "Mango", "Robot"];
console.log(mixed);
console.log(mixed[0], mixed[1], mixed[2]);

// 21
let person = {
    name: "Sai Samarth",
    age: 21,
    city: "Bangalore"
};
console.log(person);

// 22
let student = {
    name: "Sai Samarth",
    qualification: "BTech",
    company: "Kodnest"
};
console.log(student.company);

// 23
let fruitObject = {
    fruits: ["Apple", "Mango", "Banana"]
};
console.log(fruitObject.fruits[1]);

// 24
let toyObject = {
    toys: ["Car", "Ball", "Robot", "Teddy"]
};
console.log(toyObject.toys[toyObject.toys.length - 1]);

// 25
let cricket = {
    cricketer: "Virat Kohli",
    team: "India"
};
console.log(cricket.cricketer);

// 26
let details = {
    fruitName: "Mango",
    toyName: "Car",
    cricketer: "Rohit Sharma"
};
console.log(details.fruitName, details.toyName, details.cricketer);

// 27
let college = {
    students: ["Sai", "Rahul", "Arun"],
    courses: ["Java", "Python", "SQL"]
};
console.log(college.students[0], college.courses[1]);

// 28
let mobileObject = {
    mobile: ["Samsung", "Apple", "OnePlus", "Vivo"]
};
console.log(mobileObject.mobile[2]);

// 29
let employee = {
    employeeName: "Sai",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: 0
};
console.log(employee.skills[1]);

// 30
let personal = {
    name: "Sai Samarth",
    age: 21,
    city: "Bangalore",
    qualification: "BTech"
};
console.log(personal.name, personal.age, personal.city);

// 31
let x = 20;
let y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// 32
let p = 25;
let q = 4;
console.log(p % q);

// 33
console.log(2 ** 5);

// 34
let m = 10;
let n = 3;
console.log(m + n);
console.log(m - n);
console.log(m * n);
console.log(m / n);
console.log(m % n);
console.log(m ** n);

// 35
let value35 = 10;
value35 = value35 + 5;
console.log(value35);

// 36
let pre = 10;
console.log(++pre);

// 37
let post = 10;
console.log(post++);

// 38
let preDec = 20;
console.log(--preDec);

// 39
let postDec = 20;
console.log(postDec--);

// 40
let first = 10;
let second = 10;
console.log(++first);
console.log(second++);

// 41
let a41 = 20;
let b41 = 10;
a41 += b41;
console.log(a41);

// 42
let a42 = 50;
let b42 = 20;
a42 -= b42;
console.log(a42);

// 43
let a43 = 10;
let b43 = 5;
a43 *= b43;
console.log(a43);

// 44
let a44 = 100;
let b44 = 10;
a44 /= b44;
console.log(a44);

// 45
let a45 = 25;
let b45 = 4;
a45 %= b45;
console.log(a45);

// 46
let a46 = 20;
let b46 = 10;
console.log(a46 < b46);
console.log(a46 > b46);
console.log(a46 <= b46);
console.log(a46 >= b46);

// 47
let num47 = 100;
let str47 = "100";
console.log(num47 == str47);
console.log(num47 === str47);

// 48
let condition1 = 10 > 5;
let condition2 = 20 > 15;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);

// 49
let age49 = 21;
console.log(age49 >= 18 ? "Eligible" : "Not Eligible");

// 50
let marks = 70;
console.log(marks >= 35 ? "Pass" : "Fail");
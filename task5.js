// 1
function sum(a){return function(b){return function(c){console.log(a+b+c);};};}
sum(10)(20)(30);

// 2
function employee(name){return function(department){return function(salary){console.log(name,department,salary);};};}
employee("Sai Samarth")("CSE")(30000);

// 3
function multiply(a){return function(b){return function(c){console.log(a*b*c);};};}
multiply(2)(3)(4);

// 4
function curried(a){return function(b){return function(c){return a+b+c;};};}
function uncurried(a,b,c){return a+b+c;}
console.log(curried(10)(20)(30));
console.log(uncurried(10,20,30));

// 5
function add4(a){return function(b){return function(c){return function(d){return a+b+c+d;};};};}
function add4Uncurried(a,b,c,d){return a+b+c+d;}
console.log(add4(10)(20)(30)(40));
console.log(add4Uncurried(10,20,30,40));

// 6
let a=[1,2,3,4,5],b=[6,7,8,9,10];
console.log([...a,...b]);

// 7
let s1=["Rahul","Ravi","Amit"],s2=["Arun","Kiran","Suresh"];
console.log([...s1,...s2]);

// 8
let arr=[1,2,3];
console.log([...arr,4,5,6]);

// 9
let e1={name:"Sai",age:21},e2={department:"IT",city:"Bangalore"};
console.log({...e1,...e2});

// 10
let emp={name:"Sai",department:"IT"};
console.log({...emp,salary:30000});

// 11
let o1={name:"Sai",age:21},o2={city:"Bangalore",qualification:"BTech"};
console.log({...o1,...o2});

// 12
let x=[1,2,3],y=[4,5,6];
console.log([...y.reverse(),...x.reverse()]);

// 13
function values(a,b,...rest){console.log(a,b,rest);}
values(10,20,30,40,50);

// 14
function student(name,department,...marks){console.log(name,department,marks);}
student("Sai","CSE",80,85,90);

// 15
function numbers(a,b,...rest){console.log(a,b,rest);}
numbers(10,20,30,40,50);

// 16
function fifth(a,b,...rest){console.log(rest[4]);}
fifth(10,20,30,40,50,60,70);

// 17
function product(product,price,...rest){console.log(product,price,rest);}
product("Laptop",50000,"Dell","Black");

// 18
function ten(a,b,...rest){console.log(rest);}
ten(1,2,3,4,5,6,7,8,9,10);

// 19
let ar=[10,20,30,40];
let [p,q,r,s]=ar;
console.log(p,q,r,s);

// 20
let st=["Sai","CSE",8.5];
let [name,department,cgpa]=st;
console.log(name,department,cgpa);

// 21
let n=[10,20,30,40,50];
let [first,,,fourth]=n;
console.log(first,fourth);

// 22
let nested=[10,[20,30],40];
let [aa,[bb,cc],dd]=nested;
console.log(aa,bb,cc,dd);

// 23
let three=[10,[20,[30,40]]];
let [i,[j,[k,l]]]=three;
console.log(i,j,k,l);

// 24
let employeeInfo={name:"Sai",designation:"Developer",salary:30000};
let {name:en,designation,salary}=employeeInfo;
console.log(en,designation,salary);

// 25
let stud={name:"Sai",department:"CSE",cgpa:8.5};
let {name:sn,department:sd,cgpa:sc}=stud;
console.log(sn,sd,sc);

// 26
let obj={name:"Sai",age:21,city:"Bangalore",salary:30000,qualification:"BTech"};
let {name:on,age,city}=obj;
console.log(on,age,city);

// 27
let company={employee:{name:"Sai"},team:{members:["Rahul","Ravi","Amit"]}};
let {employee:{name:empName},team:{members}}=company;
console.log(empName,members);

// 28
let comp={department:{employee:{name:"Sai"}}};
let {department:{employee:{name:companyName}}}=comp;
console.log(companyName);

// 29
let fruits=["Apple","Banana","Mango","Orange","Grapes"];
fruits.push("Papaya","Guava","Pineapple");
console.log(fruits);

// 30
let num=[10,20,30,40,50];
num.pop();
console.log(num);

// 31
let students=["Rahul","Ravi","Amit","Kiran","Arun"];
students.shift();
console.log(students);

// 32
let nums=[30,40,50,60];
nums.unshift(10,20);
console.log(nums);

// 33
let nums2=[10,20,30,40,50];
nums2.splice(2,1,100);
console.log(nums2);

// 34
let vals=[10,20,30,40,50,60];
vals.splice(2,2);
console.log(vals);

// 35
let vals2=[10,20,60,70];
vals2.splice(2,0,30,40,50);
console.log(vals2);

// 36
let vals3=[10,20,30,40,50];
vals3.splice(2,2,100,200,300);
console.log(vals3);

// 37
let list=["Rahul","Ravi","Amit","Kiran","Arun"];
list.splice(2,1);
console.log(list);

// 38
let cart=["Milk","Bread","Eggs"];
cart.push("Butter");
cart.pop();
cart.shift();
cart.unshift("Rice");
console.log(cart);

// 39
let c1=[1,2,3],c2=[4,5,6];
console.log(c1.concat(c2));

// 40
let c3=[1,2],c4=[3,4],c5=[5,6];
console.log(c3.concat(c4,c5));

// 41
let eight=[10,20,30,40,50,60,70,80];
console.log(eight.slice(2,6));

// 42
let stu=["Rahul","Ravi","Amit","Kiran"];
console.log(stu.slice(0,3));

// 43
let nest=[1,[2,[3,4]]];
console.log(nest.flat(3));

// 44
let nest4=[1,[2,[3,[4,5]]]];
console.log(nest4.flat(4));

// 45
let original=[10,20,30,40];
console.log(original.slice(1,3));
console.log(original);
let original2=[10,20,30,40];
console.log(original2.splice(1,2));
console.log(original2);

// 46
let numbers1=[10,20,30,40,50];
console.log(numbers1.includes(50));

// 47
let duplicate=[10,20,30,20,40,20];
console.log(duplicate.indexOf(20));

// 48
let duplicate2=[10,20,30,20,40,20];
console.log(duplicate2.lastIndexOf(20));

// 49
let sort=[50,10,40,20,30];
sort.sort((a,b)=>a-b);
console.log(sort);

// 50
let reverse=[10,20,30,40,50];
reverse.reverse();
console.log(reverse);
//Functions
// function showMyName(name) {
//   // console.log('My name is Florin')
//   console.log('My name is ' + name)
// }
// showMyName("Florin");
// showMyName("Misu");
// showMyName("Florin");

// // let num1 = 30;
// // let num2 = 20;
// // let sum = num1 + num2;
// // console.log(sum);
// function calcSum(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const result = calcSum(12314, 123451);
// console.log(result);

// Template Literals

// let name = "Florin";
// console.log(`My name is ${name}`);
// console.log(`${30 + 20}`);

// let message = `My name is

// Florin`;
// console.log(message);

//Exercise
// let person = {
//   name: "Florin",
//   age: 31,
//   isMarried: false,
//   homeAddress: {
//     long: 44.13,
//     lat: 33.11,
//   },
//   friends:["Florin", "Misu", "Murgoci"],
// };
// console.log(person);
// console.log(person.name);
// console.log(person.homeAddress.long);
// console.log(person.friends[1]);

//Arithmetic Operators

// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// console.log(num1 ** num2);
// console.log(num1 % num2);

// Assignment Operators

// let num1 = 10;
// let num2 = num1 + 5;

// console.log(num2);
// console.log(num1, num2);

// // num1 = num1 + 5;
// num1 += 5;
// console.log(num2);

// num1 = num1 - 5;
// console.log(num1);

//Comparison Operators
// >, <, >=, <=, ===,!== - not equal

// let price = 200;
// console.log(price > 300);
// console.log(price > 150);
// console.log(price > 190);
// console.log(price > 201);
// console.log(price <= 200);
// console.log(price < 300);
// console.log(price <= 199);
// console.log(price === 200);
// console.log(price !== 200);

// Logical Operators
// and , or , not
// && , || , !

// let price = 10;
// console.log(price > 5 && price < 15);
// // true && true - returns true
// console.log(price > 50 && price < 15);
// // false && true returns false

// console.log(price > 50 || price < 15);
// // if one of them is true , returns true

// console.log(!(price > 50));

// Equality Operator

// let price = 10;

// console.log(price === 10);
// console.log(price !== 10);
// console.log(price !== 11);

// console.log(price == 10);
// console.log(price != 20);

// Problem : Swapt Two Numbers

// let apple = 10;
// let orange = 20;

// let temp = apple;
// apple = orange;
// orange = temp;

// console.log(apple, orange);

// let pineaple = 15;
// let bananas = 20;

// let temp2 = pineaple;
// pineaple = bananas;
// bananas = temp2;
// console.log(pineaple, bananas);

// Conditional Statement
// if(condition1){
//   statements
// }else if(condition2) {
//   statements
// }else if(condition3){
//   statements
// }else{

// }

// let number = 0;

// if(number > 0){
//   console.log("This is a Positive number.");
// }else if(number < 0) {
//   console.log("This is a Negative number.");
// }else {
//   console.log("This is a Zero number");
// }


// Conditional Statements
// Switch Case 

// let color = "black";

// switch(color){
//   case "black" :
//     console.log("The color is black");
//     break;
//   case "white" :
//     console.log("The color is white");
//     break;
//   case "red" :
//     console.log("The color is red");
//     break;
//   default :
//     console.log("There is other color") ;
// }

// Ternary Operator.


// let number1 = 10;
// let number2 = 2;

// let maxValue;
// if(number1 > number2){
//   maxValue = number1;
// }else{
//   maxValue = number2;
// }
// let max = number1 > number2 ? number1 : number2;
// console.log(max);

// Problem FizzBuzz
// Take a number
// If it is divisible by 3 , Print Fizz
// If it is divisible by 5 , Print Buzz
// If it is divisible by both 3& 5 , Print FizzBuzz
// Otherwise , print nothing

// let number = 15;
// if(number % 3 === 0 && number % 5 ===0){
//   console.log("FizzBuzz");
// }else if(number % 3 === 0){
//   console.log("Fizz");
// }else if(number % 5 === 0){
//   console.log("Buzz");
// }else{
//   console.log("Nothing");
// }
// console.log(number % 3 === 0 && number % 5 === 0 
//   ? "FizzBuzz" 
//   :number % 3 === 0 
//   ? "Fizz"
//   :number % 5 === 0
//   ? "Buzz" 
//   :"Nothing"
//   );

// Problem : Our Grading System 

// let number = 0;

// if(number >= 80 && number <= 100){
//   console.log("A+");
// }else if(number > 70 && number <= 79){
//   console.log("A");
// }else if(number >= 60 && number <= 69){
//   console.log("A-");
// }else if(number >= 50 && number <= 59){
//   console.log("B");
// }else if(number >= 40 && number <= 49){
//   console.log("C");
// }else if(number >= 33 && number <= 39){
//   console.log(D);
// }else if(number >= 0 && number <= 32){
//   console.log("F");
// }else{
//   console.log("Invalid");
// }


// Take a number
// number > 0
// number === 0
// number < 0

// let number = -1;
// switch(true){
//   case number > 0:
//    console.log("This is a positive number");
//    break;
//   case number === 0:
//     console.log("This is zero number");
//     break;
//   case number < 0 :
//     console.log("This is a negative number");
// }


// For Loops 

// console.log("Hello mate!");
// for (let index = 1; index <= 5; index++){
//   console.log("Hello mate!", index);
// }
// for (let index = 5; index >= 1; index--){
//   console.log("Hello mate!", index);
// }

// While Loops 
// let index = 1;

// while(index <= 44){
//   console.log("Hello mate", index);
//   index++;
// }

// Do..While Loops 

// let service = 1;

// do{
//   console.log("Hello mate!", service);
//   service++;
// }while(service <= 60);


// For..In Loops

// const objs = {
//   name: "Florin",
//   age: 31,
// }

// for(let key in objs){
//   console.log(key, objs[key]);
// }

// let numbers = [1, 2, 3, 4, 5];

// // console.log(numbers);

// for(let index in numbers){
//   console.log(index,numbers[index]);
// }

// For..of loop

// let letters = ["a", "b", "c", "d", "e"];
// // console.log(letters);

// for(let num of letters){
//   console.log(num);
// }

// for(let key in letters){
//   console.log(key, letters[key]);
// }

// Break & Continue 

// for (let index = 1; index <= 20; index++ ){
  
//   console.log(index);
//   if(index === 10){
//     break;
//   }
// }

// for (let index = 1; index <= 20; index++){
//   if(index === 10){
//     continue;
//   }
//   console.log(index);
// }

// Infinite loop

// for (let index = 1; ;index++){
//   console.log(index);
// }

// Nested loop

// for(let florin = 1; florin <= 3; florin++){
//   for(let dld = 1;dld <= 3; dld++){
//     console.log(florin, dld);
//   }
// }

// String Basics

// let message = "Hi My Name Is Florin";
// console.log(message);
// console.log(message.endsWith("Florin"));
// console.log(message.startsWith("Hi"));
// console.log(message.includes("Florin"));
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.charAt(1));


// let message = "Hi my name is Hi Florin";
// console.log(message);
// console.log(message.search("Hi"));
// console.log(message.indexOf("Hi"));
// console.log(message.lastIndexOf("Hi"));



// let message = "Hi My Name Is Hi Florin";
// let temp = [1,2,3,4];
// console.log(temp.toString());
// console.log(temp[3]);
// let m1 = "Hi";
// let m2 = " My name";
// let m3 = " Is Florin";
// console.log(m1 + " " + m2 + " " + m3);
// let m = m1.concat(m2,m3);
// console.log(m);

// let message = "Hi my name is Florin";
// console.log(message.split(" "));

// let message = "Hi my name is Hi Florin";
// console.log(message.slice(0, 10));
// console.log(message.slice(11, 17));
// console.log(message.slice(3));
// console.log(message.slice(-10,-1));
// console.log(message.substring(0,2));
// console.log(message.substr(0,4));

// let message = "\tHi \\ my name is  \nFlorin 'It's a great day' ";
// console.log(message);

// String Immutability

// let message = "ji Florin";
// message = "Hi Flori" + " " +  "How are you?";
// console.log(message);

// JavaScript Objects 

// let name = "Florin";
// let age = 31;
// let hobby = "Reading";

// const user = {
//   name : "Florin",
//   age : 31,
//   hobby : "Reading"
// };
// console.log(user);
// console.log(user.age);
// console.log(user["name"]);
// console.log(user.name);
// console.log(name + " " + age + " " + hobby);

// JavaScript Manipulation 

// const user = {
//   name: "Florin",
//   age: 31,
//   isMarried: true
// }
// // ADD
// user.email = "florin@email.com"
// user["phone"] = "123-456-789"

// // UPDATE
// user.isMarried = false;
// user.phone = "987-654-321";
// user.age = user.age + 5;

// // DELETE 
// delete user.phone;
// console.log(user); 

// JavaScript Object Methods and This keyword

// const user = {
//   name: "Florin",
//   age: 31,
//   friends: ["Florin", "Misu", "Robert"],
//   selectColor: null,
//   calculateAge: function(){
//     console.log(`I am Florin and I am ${this.age} years old`);
//   }
// };
// console.log(user.calculateAge());

// Traversing Object

// const user = {
//   name: "Florin",
//   age: 31,
//   gender: "male",
//   phone: "123-456-789",
//   email: "florin@email.com",
// }
// // First way
// for (let key in user){
//   console.log(key,user[key]);
// }

// // Second way
// console.log(Object.keys(user));
// console.log(Object.values(user));

// for (let val of Object.values(user)){
//   console.log(val);
// };
// for (let val of Object.keys(user)){
//   console.log(val);
// };

// Exercise Traversing Object

// const salaries = {
//   Florin: 1500,
//   Robert: 3000,
//   Claudiu: 1200,
//   Ovidiu: 1700,
//   Doru: 2800,
// };

// let sum = 0;

// for (let key in salaries){
//   console.log(key,salaries[key]);
//   // sum = sum + salaries[key];
//   sum += salaries[key];
// }
// console.log(sum);

// console.log(Object.values(salaries));

// for (let val of Object.values(salaries)){
//   sum += val;
// }
// console.log(sum);


// Object Destructuring

// const user = {
//   name: "Florin",
//   age: 31,
//   favBook: {
//     bookName : "Count of Monte Cristo",
//     bookAuthor: "Alexandre Dumas",
//   }
// }

// const {name, age , favBook} = user;
// const {bookAuthor, bookName} = favBook;

// console.log(name);
// console.log(age);
// console.log(bookName);
// console.log(bookAuthor);

// Cloning an Object

// const user = {
//   name: "Florin",
//   age: 31,
// };

// const copiedUser = {};
// copiedUser["name"] = user.name;
// copiedUser["age"] = user.age;

// for (let key in user){
//   console.log(key, user[key]);
//   copiedUser[key] = user[key];
// }
// const copiedUser = Object.assign({},user);
// console.log(copiedUser);


// Math Object
// console.log("PI");
// console.log(Math.PI);

// console.log("Random");
// console.log(Math.random());

// console.log("Round");
// console.log(Math.round(4.4));

// console.log("Ceil");
// console.log(Math.ceil(1.5));
// console.log(Math.ceil(-4.5));
// console.log(Math.ceil(3.3));

// console.log("Floor");
// console.log(Math.floor(14.999));
// console.log(Math.floor(-4.5));

// console.log("Trunc");
// console.log(Math.trunc(11.33));

// console.log("Sign");
// console.log(Math.sign(-4));
// console.log(Math.sign(0));
// console.log(Math.sign(4));

// console.log("Pow");
// console.log(Math.pow(2,2));
// console.log(Math.pow(2,5));
// console.log(Math.pow(3,5));

// console.log("Sqrt");
// console.log(Math.sqrt(8));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(32));
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(9));

// console.log("Abs");
// console.log(Math.abs(-5.8));

// console.log("Sin");
// console.log(Math.sin(90 * 180));

// console.log("Math min");
// console.log(Math.min(30, 21, 44, 31, 120, 1001));
// console.log(Math.min(44, 131, 24, 33, 191, 2002));

// console.log("Math max");
// console.log(Math.max(152, 586, 12, 369, 4582, 412, 325));

// console.log("Math log");
// console.log(Math.log(1));
// console.log(Math.log(3));
// console.log(Math.log(12));
// console.log(Math.log(33));
// console.log(Math.log10(33));



// JSON Data Format

// const user = {
//   name: "Florin",
//   age: 31,
// };
// const jsonData = JSON.stringify(user);
// console.log(JSON.parse(jsonData));
// console.log(jsonData);


// Functions - Basics 

// Function Declaration
// function aboutMe(name, age){
//   const message = `I am ${name} and I am ${age} years old`;
//   console.log(message);
  
// };
// Function Call

// aboutMe("Alex", 44);


// let number1 = 20;
// let number2 = 30;

// function calcSum(number1,number2){
//   let sum = number1 + number2;
//   return sum;
// }

// let result = calcSum(10,25)


// console.log(result);

// Default parameters

// function calcSum(number1, number2, number3 = 60){
//   let sum = number1 + number2 +number3;
//   return sum;
// }

// console.log(calcSum(10,50));



// Function expression

// const calSumExp = function(number1,number2){
//   let sum = number1 + number2;
//   return sum
// }

// console.log(calSumExp(50,60));

// Arrow function

// const calSumArr = (number1,number2) => number1 + number2;
// console.log(calSumArr(58,39));

// const mulByTwo = function(number1){
//   return number1 * 2;
// }
// console.log(mulByTwo(1246));

// const mulByTwoArr = (number1) => number1 * 2;
// console.log(mulByTwoArr(16));

// Rest parameter 

// function multiply(...args){
//   console.log(args);
//   let mulp = 1;
//   for(let num of args){
//     mulp = mulp * num;
//   }
//   return mulp;

//   // return number1 * number2 * number3 * number4;
// }
// console.log(multiply(2,5,9,10,2,6,7,8,2,1,34,5));

// Array basics

// let friends = ["Chase", "House","Foreman","Taub","Cameron"];

// console.log(friends);
// console.log(friends[3]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[0]);
// console.log(friends[4]);

// console.log(friends.length);
// console.log(friends.slice(1,4));

// Array - add data


// const numbers = [12,13,14,17,18];
// numbers.push(19,20,21,22,23,24,25);
// numbers.splice(3,0,15,16);
// numbers.unshift(9,10,11);
// console.log(numbers);


// Array - remove data

// const numbers = [1,2,3,4,5,6,7,8];
// numbers.shift();
// numbers.shift();
// numbers.shift();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.splice(2,3);

// console.log(numbers);


// Array - find elements 

// const numbers = [1,2,3,2,5,6,2,8];

// console.log(numbers.includes(6,4));
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(3));
// console.log(numbers.lastIndexOf(2));
// console.log(numbers);

// Finding object in Array

// const doctors = [
//   {name: "House", age: 45},
//   {name: "Chase", age: 26},
//   {name: "Foreman", age: 33},
// ];

// const result = doctors.find(function(doctors){
//   return doctors.age > 30 ;
// });

// console.log(result);


// Iterating in Array

// const numbers = [1,2,3,4,5];


// for(let index = 0; index < numbers.length; index++){
//   console.log(index,numbers[index]);

// };
// for (let num of numbers){
//   console.log(num);
// };

// numbers.forEach(function(num,index){
//   console.log(num,index);
// });

// numbers.forEach((num,index) => console.log(num,index));

// Sorting and Reversing an Array

// const numbers = [6,8,7,2,1,9];
// numbers.sort(); 
// numbers.reverse();

// console.log(numbers);

// let doctors = [
//   {name: "House", age: 45},
//   {name:"Chase", age:31},
// ]

// doctors.sort(function(d1,d2){
//   if(d1.age > d2.age) return +1;
//   if(d1.age == d2.age) return 0;
//   if(d1.age < d2.age) return -1;
// }).reverse();
// console.log(doctors);


// Array method - every , some

// const numbers = [6,8,7,-2,1,9];

// const data = numbers.some(function(num){
//   return num > 0;
// });
// console.log(data);

// Array Method - concat , slice

// const num1 = [1,2,3];
// const num2 = [4,5,6,7];

// const num = num1.concat(num2);
// console.log(num);


// const numbers = [1,2,3,4,5,6,7,8,9];
// const sliceArray = numbers.slice(3,6);
// console.log(sliceArray);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus);

// Spread operator

// numbers = [1,2,3,4,5,6,7,8];
// console.log(...numbers);
// console.log(numbers[0],numbers[1]);
// console.log(numbers);

// const copiedArray = [...numbers];
// console.log(copiedArray);

// const num1 = [1,2,3];
// const num2 = [4,5,6];

// const num = [...num1, ...num2];
// console.log(num);


// Joining Array 
// let numbers = [1,2,3,4];
// let joinArray = numbers.join(' ');
// console.log(joinArray);

// let message = "Hi my name is House";
// let messageSplit = message.split(' ');
// console.log(messageSplit);
// let messageJoin = messageSplit.join('');
// console.log(messageJoin)


// ES6 Feature - Map

// let numbers = [1,2,3,4];
// let mulByTwo = [];
// for(let num of numbers){
//   mulByTwo.push(num * 2);
// }
// console.log(mulByTwo);

// const mulByTwo = numbers.map(function(num){
//   return num * 2;
// });
// console.log(mulByTwo);


// let numbers2 = [2,4,6,8];
// const mulByTwoPractice = numbers2.map(function(num){
//   return num * 2;
// });

// console.log(mulByTwoPractice);

// let numbers3 = [3,6,9,12,15,18,21,24,27];

// let mulByThree = numbers3.map(function(num){
//   return num * 3;
// });
// console.log(mulByThree);

// let numbers4 = [1,2,3,4,5,6,7];
// let mulByFour = numbers4.map((num) => num * 4);
// console.log(mulByFour);

// let doctor = [
//   {name: "House", age: 45},
//   {name: "Chase", age: 31},
//   {name: "Cameron", age: 30}
// ];

// const docName = doctor.map((doc) => doc.name);
// console.log(docName);

// ES6 Feature : Filtering an Array

// let numbers = [1,2,3,4,5,6];
// let onlyOddNumbers = [];
// for (let num of numbers){
//   if(num % 2 !== 1){
//     onlyOddNumbers.push(num);
//   }
// }
// console.log(onlyOddNumbers);

// const onlyOddNumbers = numbers.filter((num) => num % 2 === 1);
// console.log(onlyOddNumbers);


// ES6 Feature : Array Method : Reduce

// let numbers = [10,20,30];
// let sum = 0;
// for (let num of numbers){
//   sum = sum + num;
// };
// console.log(sum);

// const reduceSum = numbers.reduce((sum,num) => sum + num);
// console.log(reduceSum);


// ES6 Feature : Arra and Object Destructuring
// function greeting(user){

//   const {name,age,address} = user;
//   const {street,number} = address;
//   console.log(`Hello ${name} age ${age} from ${street}, ${number}`);
// };
// const user = {
//   name: "House",
//   age: 45,
//   address : {
//     street: "Princetone street",
//     number: 121,
//   },
// };

// greeting(user);

// let [a,b,c,d] = [1,2,3,4];

// console.log(a,b,c,d);

// ES6 Data Structure : Set

// let set = new Set();
// set.add(100);
// set.add(200);
// set.add(300);
// set.add(100);

// console.log(set);
// console.log(set.size);

// set.delete(200);
// console.log(set);
// console.log(set.size);

// for(let el of set){
//   console.log(el);
// }

// set.forEach((el) => console.log(el));
// set.clear();
// console.log(set);


// ES6 Data Structure : Map

// let map = new Map();

// map.set('Mango', 'Ame');
// map.set('Banana', 'Kola');
// map.set('Score', 100);

// console.log(map);

// for(let el of map){
//   console.log(el);
// };
// console.log(map.has('Mango'));

// map.delete('Banana');
// console.log(map);

// console.log(map.values());
// console.log(map.keys());



// Weak set , weak map

// let ws = new WeakSet();

// const object1 = {};
// const object2 = {};

// ws.add(object1);
// ws.add(object2);


// console.log(ws);

// console.log(ws.has(object1));
// console.log(ws.has(object2));

// ws.delete(object1);
// console.log(ws.has(object1));


// const wm = new WeakMap();

// wm.set(object1, 123456);
// console.log(wm.has(object1));
// console.log(wm.get(object1));

// wm.delete(object1);
// console.log(wm.has(object1));

// Module
// import addNumber from "./main.js";



// console.log(addNumber(10,30));

// Pad start , pad end / Trim Start , Trim End

// let minute = '4';
// let hour = '8';

// console.log(minute.padStart(5));
// console.log(hour.padEnd(5,'0'));

// let trimname = '     House     ';

// console.log(trimname.length);

// trimname = trimname.trimEnd();
// console.log(trimname);
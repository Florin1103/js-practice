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
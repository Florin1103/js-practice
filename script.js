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
// console.log(number % 3 === 0 && number % 5 ===0 
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
//   console.log("This is a positive number");
//   break;
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

// while(index <= 5){
//   console.log("Hello mate", index);
//   index++;
// }

// Do..While Loops 

// let service = 100;

// do{
//   console.log("Hello mate!", service);
//   service++;
// }while(service <= 5);


// For..In Loops

const objs = {
  name: "Florin",
  age: 31,
}

for(let key in objs){
  console.log(key, objs[key]);
}

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

for(let index in numbers){
  console.log(index,numbers[index]);
}
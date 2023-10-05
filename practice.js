// function calcSum(number1,number2){
//   let sum = number1 + number2;
//   return sum;
// }

// let result = calcSum(17,28);
// console.log(result);


// let pineaples = 20;
// let lemons = 25;
// let oranges = 30;

// if(pineaples < 20){
//   console.log("Not enough pineaple for juice");
// }else if(lemons < 25){
//   console.log("Not enough lemons for juice");
// }else if(oranges < 30){
//   console.log("Not enough oranges for juice");
// }else {
//   console.log("The juice is ready");
// }


// const person = {
//   name: "House",
//   age: 45,
//   hobbies: "reading",
//   job: "doctor"
// };
// for(let key in person){
//   console.log(key,person[key]);
// };

// const personArray = ["House", "Cameron","Chase","Foreman"];

// for(let num of personArray){
//   console.log(num);
// }
// for(let key in personArray){
//   console.log(key,personArray[key]);
// }


// function isEvendOrOdd(num){
//   if(num % 2 === 0){
//     console.log(`${num} is a Even number`)
//   }else{
//     console.log(`${num} is an Odd number`)
//   }
// };
// isEvendOrOdd(19);
// isEvendOrOdd(20);

// function isValidNumber(num){
//   if(isNaN(num)){
//     console.log(`${num} is not anumber`);
//   }else {
//     console.log(`${num} is a valid number`);
//   }
// }

// isValidNumber(19);
// isValidNumber("asd");


// function findLargest(num1,num2){
//   if(num1 > num2){
//     console.log(`${num1} is largest number`)
//   }else if(num1 < num2){
//     console.log(`${num2} is the largest number`)
//   }else if(num1 === num2){
//     console.log(`${num1} and ${num2} are equal`)
//   }
// };

// findLargest(21,15);


// function findLargest(num1,num2,num3){
//   if(num2 && num1 > num3){
//     console.log(`${num1} is the largest number`)
//   }else if(num2 > num3){
//     console.log(`${num2} is the largest number`)
//   }else{
//     console.log(`${num3} is the largest number`);
//   }
// };

// findLargest(2,10,3);

// Check if a triangle is equilateral, scalene, or isosceles

// function findTriangleType(side1,side2,side3){
//   if(side1 === side2 && side2 === side3){
//     console.log(`Equilateral triangle`);
//   }else if(side1 === side2 && side1 && side2 !== side3){
//     console.log("Isosceles triangle");
//   }else if(side1 !== side2 && side2 !== side3 && side1 !== side3){
//     console.log("Scalene triangle");
//   }
// };

// findTriangleType(2,2,4)

// Find the a number is present in given range

// function checkInRange(num,start,end){
//   if(num >= start && num <= end){
//     console.log(`${num} is between range ${start} and ${end}`);
//   }else{
//     console.log(`${num} is outside range ${start} and ${end}`);
//   }
// }
// checkInRange(6,1,50);
// checkInRange(3,4,20);

// Perform arithmetic operations on two numbers

// function evalNumbers(num1,num2,op){
//   if(op == "add"){
//     console.log(`Sum of ${num1} and ${num2} is ${num1+ num2}`);
//   }else if(op =="substract"){
//     console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`);
//   }else if(op == "multiply"){
//     console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`)
//   }else if(op == "divide"){
//     console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`)
//   }else if(op == "modulus"){
//     console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`)
//   }else {
//     console.log(`${op} is an invalid operation`)
//   }
// };

// evalNumbers(20,10,"add");
// evalNumbers(20,10,"substract");
// evalNumbers(20,10,"multiply");
// evalNumbers(20,10,"divide");
// evalNumbers(20,10,"modulus");
// evalNumbers(20,10,"square");

// Find check if a year is leap year or not

/*Function `checkLeapYear()` find if the given year is a leap year or not by using %, !=, && and || operators in JavaScript.

If year is divisble by 4 and not divisble by 100 then print “leap year”.
Or if year is divisible by 400 then print “leap year”.
Else print “not a leap year”. */

// function checkLeapYear(year){
//   if((year % 4 === 0) && (year % 100 != 0) || (year%400 === 0)){
//     console.log(`${year} is a leap year`);
//   }else{
//     console.log(`${year} is not a leap year`)
//   }
// };

// checkLeapYear(2002);
// checkLeapYear(2000);


/*Function `findGrade()` to find the grade of the student based on the input marks.

Print “S grade” if marks is between 90 and 100.
Print “A grade” if marks is between 80 and 90.
Print “B grade” if marks is between 70 and 80.
Print “C grade” if marks is between 60 and 70.
Print “D grade” if marks is between 50 and 60.
Print “E grade” if marks is between 40 and 50.
Print “Student has failed” if marks is between 0 and 40.
Else print “Invalid marks”. */

// function findGrade(grade){
//   if(grade <=100 && grade >= 90){
//     console.log("S grade");
//   }else if(grade <90 && grade >=80){
//     console.log("A grade");
//   }else if(grade <80 && grade >=70){
//     console.log("B grade");
//   }else if(grade <70 && grade >=60){
//   console.log("C grade");
//   }else if(grade <60 && grade >=50){
//     console.log("D grade");
//   }else if(grade <50 && grade >=40){
//     console.log("E grade");
//   }else if(grade <= 40 && grade >= 0){
//     console.log("Student has failed");
//   }else{
//     console.log("Invalid marks");
//   }
// };

// findGrade(100);
// findGrade(89);
// findGrade(33);


/*Find number of days in a given month
Function `findDaysInMonth()` finds the number of days in a given month of a year.

If month is outside the range of 1 and 12 print “Invalid month”.
If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
Else if month is equal to 4, 6, 9 or 11 print “30 days”.
Else print “31 days”. */


// function findDaysInMonth(year,month){
//   if((year === 12) && (month != year)){
//     console.log("Invalid month");
//   }else if((month === 2) && (year % 4 === 0)){
//     console.log(`February  29`);
//   }else if((month === 2) && (year % 4 !== 0)){
//     console.log("February  28")
//   }else if(month === 4 || month === 6 || month === 9 || month === 11){
//     console.log(`The month is 30 days`)
//   }else{
//     console.log(`The month is 31 days`);
//   }
// };

// findDaysInMonth(2000,2);
// findDaysInMonth(2001,2);
// findDaysInMonth(2001,4);
// findDaysInMonth(2001,5);

/*Write a JavaScript function to print the “Hello World” message
Function `displayMessage()` prints “Hello World” string using console.log() function.*/

// function displayMessage(){
//   console.log("Hello World!");
// };
// displayMessage();

/* Write a function that returns the square of a number
Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.*/

// function findSquare(num){
//   return num * num;
// }

// console.log(findSquare(20));

/* Write a function to convert Celsius to Fahrenheit
Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`*/

// function calFahrenheit(celcius){
//   const fahrenheit = (celcius * 9/5) + 32;
//   return fahrenheit;
// }

// console.log(calFahrenheit(50));
// console.log(calFahrenheit(28.3));
// console.log(calFahrenheit(13.1));
// console.log(calFahrenheit(7));

// function rectangleArea(width,height){
//   const rectangle = width * height;
//   return rectangle;
// };

// console.log(rectangleArea(5,8));

/* Write a function to find the area and perimeter of a Circle
Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call. */

// function circleValues(radius){
//   return `Perimeter is ${2  *Math.PI * radius} ,And area is ${Math.PI * radius * radius}`;
// };

// console.log(circleValues(10));

/* Count number of Vowels in String
Function `countVowel()` returns the number of vowels in input string.  */

// function countVowel(str){
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i =0;i < str.length;i++){
//     if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u"){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("Book"));
// console.log(countVowel("Reading"));
// console.log(countVowel("Biking"));



// let numbers = [2,3,4,5,6,7,8,9,10];
// let multiplyByThree = numbers.map((num) => num * 3);
// console.log(multiplyByThree);

// let set = new Set();
// set.add(230);
// set.add(300);
// set.add(430);
// set.add(510);
// set.add(230);
// console.log(set);

// set.delete(300);
// console.log(set.size);

// for(let el of set){
//   console.log(el);
// };

// set.forEach((el) => console.log(el));


// let multiply = m => m*m*m;
// console.log(multiply(7));

// let add = (m,n) => m+n;
// console.log(add(5,9));

// const Mango = {
//   color: "Yellow",
//   price: 120,
//   weight: 120,
//   about: function(){
//     return `This mango price is ${this.price} USD`
//   }
// }

// console.log(Mango.about());

// class Fruit{
//   constructor(name){
//     this.name = name;
//   }
//   fol(){
//     console.log(this.name+ " Is too tasty");
//   }

//   static jackfruit(){
//     console.log("Jackfruit is a very popular fruit");
//   }
// }

// let add = new Fruit("Mango");

// add.fol();

// Fruit.jackfruit();
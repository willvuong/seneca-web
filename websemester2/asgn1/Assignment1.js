/*******************************************************************************

 *                     WEB222 – Assignment 1

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: William Vuong Student ID: 105165179 Date: September 23, 2017

 *

 ******************************************************************************/
//***********************************Task 1: Student info
var studentName = 'William Vuong';
var numOfCourses = 4;
var program = 'CPA';
var job = false;
console.log("My name is "+studentName+" and I’m in "+program+" program. I’m taking "+numOfCourses+" course in this semester.");
var job = "don't have";
console.log("My name is "+studentName+" and I’m in "+program+" program. I’m taking "+numOfCourses+" course in this semester and I "+job+" a part-time job now.");

//***********************************Task 2: Birth and graduate year
var currentYear = 2017;
var age = prompt("Please enter your age:");
var birthYear = (currentYear - age);
console.log("I was born in the year of "+birthYear+".");
var studyYears = prompt("Enter the number of years you expect to study in the college");
var graduateYear = (parseInt(currentYear) + parseInt(studyYears));
console.log("You will graduate from Seneca college in the year of "+graduateYear+".");

//***********************************Task 3: Celcius and Fahrenheit temperatures
var cTemp = 24;
var cToF = (cTemp * 9/5 + 32);
console.log(""+cTemp+"°C is "+cToF+"°F.");
var fTemp = 32;
var fToC = ((fTemp-32) * 5/9);
console.log(""+fTemp+"°F is "+fToC+"°C.");

//***********************************Task 4: Even and odd numbers
var x;
for(var x = 1; x<=10; x++){
 if ((x&1)==0){
   console.log(""+x+" is even.");
 }
  else console.log(""+x+" is odd");
}

//***********************************Task 5: Larger or largest number
function largerNum(number1, number2){
  if (number1>number2){
    return number1;
  }
  else return number2
}

var greaterNum = function(number1, number2){
    if (number1>number2){
    return number1;
  }
  else return number2
}

console.log("The larger number of 5 and 15 is "+largerNum(5, 15)+".");
console.log("The larger number of 13 and 7 is "+largerNum(13, 7)+".");
console.log("The larger number of 26 and 4 is "+greaterNum(26, 4)+".");
console.log("The larger number of 2 and 18 is "+greaterNum(2, 18)+".");

//***********************************Task 6: Evaluator
function evaluator(arguments){
  var sum = 0;
  for (var i=0; i<arguments.length; i++){
    sum += arguements[i];
  }
  var average = (sum / arguments.length);
  if (average >= 50){
    return 'true';
  }
  else return 'false';
}

console.log("Is 56, 25, 3 average > 50: "+evaluator(56, 25, 3)+".");
console.log("Is 12, 44, 2, 55 average > 50: "+evaluator(12, 44, 2, 55)+".");
console.log("Is 45, 1, average > 50: "+evaluator(45, 1)+".");

//***********************************Task 7: Grader
function grader(numberScore){
  if (numberScore >= 80)
    numberScore='A';
  else if (numberScore >= 70)
    numberScore='B';
  else if (numberScore >= 60)
    numberScore='C';
  else if (numberScore >= 50)
    numberScore='D';
   else 
    numberScore="F";
  
  return numberScore;
}

console.log("A 77 number score is a "+grader(77)+".");
console.log("A 83 number score is an "+grader(83)+".");
console.log("A 45 number score is an "+grader(45)+".");

//***********************************Task 8:
function showMultiples(num, numMultiples){
  for (var i=0; i<=numMultiples; i++){
    console.log(""+num+" x "+numMultiples[i]+" = " + num * numMultiples[i]);
  }
}
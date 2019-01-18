/*******************************************************************************

 *                     WEB222 – Assignment 2

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: William Vuong Student ID: 105165179 Date: October 7, 2017

 *

 ******************************************************************************/
//***********************************Step 1
var e1, e2, e3, e4, e5, e6, e7, str;

//***********************************Step 2
function capFirstLetter(name){
  return (name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
}
e1 = prompt("Please enter your first name: ", "William");
e1 = capFirstLetter(e1);
//console.log(""+e1+"");

//***********************************Step 3
var getAge = function(year){
  return (new Date().getFullYear() - year);
}
e2 = prompt("Please enter your year of birth: ", "1997");
e2 = getAge(e2);
//console.log(""+e2+"");

//***********************************Step 4
e3 = prompt("Please enter the school you are attending: ", "seneca college");
e3 = e3.split(' ');
for (var i = 0; i < e3.length; i++){
  e3[i] = capFirstLetter(e3[i]);
}
e3 = e3.join(' ');
//console.log(""+e3+"");

//***********************************Step 5
e4 = prompt("Please enter your 5 favorite sports (in lower case separated by comma): ", "hockey,football,basketball,tennis,golf");
e4 = e4.replace("football", "soccer");
//console.log(""+e4+"");
e4 = e4.split(',');
e5 = prompt("Please enter an extra favorite sport: ", "formula 1");
e4.push(e5);
//console.log(e4);

//***********************************Step 6
for (var i = 0; i < e4.length; i++){
  e4[i] = e4[i].toUpperCase();
}
e4 = e4.sort();
//console.log(e4)

//***********************************Step 7
function getDateString(date){
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  
  if(day<10){
    day = '0'+ day;
  }
  if(month < 10){
    month = '0' + month;
  }
  return date = day + '-' + month + '-' + year;
}
e6 = new Date();
e7 = ""+e6.getFullYear()+"-"+e6.getMonth()+"-"+e6.getDate()+"";

//***********************************Step 8
str = "User info:\n\nname(e1): "+e1+"\nage (e2): "+e2+"\nschool (e3): "+e3+"\nfavorite sports (e4):\n        "+e4.join('\n        ')+"\ncurrent date (e7): "+e7+"";
console.log(str);
//  MATH METHOD // Chapter 26 to 30 


/*  Q 1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */ 




// 1//
/* var a = prompt("Enter integer");
var a = Math.round(a);
document.write(a) */

// 2//

/* var a = prompt("Enter integer");
var a = Math.floor(a);
document.write(a) */

// 3 //
/* var a = prompt("Enter integer");
var a = Math.ceil(a);
document.write(a) */



/* Q 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */




// 1//

 /* var a = prompt("Enter Here");
 var b = a*-1
var c= Math.round(b);
document.write((c)*-1) */

// 2 //

/* var a = prompt("Enter Here");
 var b = a*-1
var c= Math.floor(b);
document.write((c)*-1) */

// 3 //

/* var a = prompt("Enter Here");
 var b = a*-1
var c= Math.ceil(b);
document.write((c)*-1) */





/* Q 3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */






/* Q 4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.: */




/* var a = Math.random();
var b = (a*6)+1;
var c = Math.floor(b);
document.write(c) */

/* Q  5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */



/* var a = Math.random();
var b = (a*2)+1;
var c = Math.floor(b);
if ( c===1)document.write(" Random coin value : tail")
if ( c===2)document.write("Random coin value : Head")
document.write(c) */

/* Q 6. Write a program that shows a random number between 1
and 100 in your browser. */




/* var a = Math.random();
var b = (a*100)+1;
var c = Math.floor(b);
document.write("Random Number between 1 and 100 : " +c); */

/* Q 7. Write a program that asks the user about his weight. Parse
the user input and display his weight in your browser.
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms */



/* var a = prompt("Enter your weight in kilogram");
document.write(a); */



/* Q 8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */





/* var e = prompt("Secret Number")
var a = Math.random();
var b = (a*2)+1;
var c = Math.floor(b);
if (e===c)
document.write("You won")
document.write(c) */








// DATE AND TIME //



/* Q 1. Write a program that displays current date and time in
your browser. */



 // var today = new Date()
//  document.write(today); 

/* Q 2. Write a program that alerts the current month in words.
For example December. */



/* var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var a = new Date();
var b = a.getMonth();
var thismonth =m[b];
document.write ( thismonth ); */



/* Q 3 Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show SUN. */



/* var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var a = new Date();
var b = a.getDay();
var d = week[b].slice(0,3)
document.write(d); */



/* Q4 Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */



/* var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var a = new Date();
var b = a.getDay();
var d = week[b];
if (week[b] === 'Sunday' || week[b] === 'Saturday')
document.write("Its Fun day")
else
document.write(week[b]) */



/* Q 5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”. */




/* var a = new Date();
var b = a.getDate();
if (b <16)
document.write('first fifteen days of the Month')
else
document.write('Last  days of the Month') */




/* Q6 : Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.*/




 /* var today = new Date()
var a = [1,1,1970]
var b= today.getDate()-a[0]
var c=today.getMonth()-a[1]
var d=today.getFullYear()-a[2]
alert(d*365+c*30*24*60*60*1000); */




/* Q 7 Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */



/* var a = new Date();
var b = a.getHours();
if ( b >12)
document.write('Its AM');
else
document.write('Its PM') */



/* 9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */



 /* var Ramadan=[6,18,2015]
var a = new Date();
var b = a.getFullYear()-Ramadan[2];
var c = a.getMonth()-Ramadan[0];
var d = a.getDate()-Ramadan[1];
alert(b*365+c*30+d);  */




/* Q 10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015. */



/* var year = 2015
var a = new Date();
var b =a.getFullYear()-year;
document.write(b*365*24*60*60); */




/* Q 11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser. */




/* var a = new Date();
document.write('Current Date :')
document.write(a);
document.write("<p></p>"); 
a.setHours(a.getHours() - 1);
document.write('1 hour ago :')
document.write(a); */



/* Q 12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */




/*  var a = new Date();
document.write('Current Date :')
document.write(a);
document.write("<p></p>"); 
a.setHours(a.getHours() - 100*365*24);
document.write('100 years back:')
document.write(a);  */



/* Q 13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */



/* var a = prompt("Enter your age ");
var b= new Date();
var c =b.getFullYear()
var d =c-a
document.write("your age is " + a);
document.write("<p></p>"); 
document.write("Your birth year is " +d); */



















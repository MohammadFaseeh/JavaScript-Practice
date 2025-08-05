//* =========================================
//* Date & Time in JavaScript
//* =========================================

//? What is the Date Object in JavaScript?
// JavaScript has a built-in object called Date that helps you work with dates and times.
// You can get, set, and format the current date, time, or even calculate differences between dates.

//? Date() constructor: The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//? Creating a Date Object:
// You can create a new Date object using the new keyword. It can be done in several ways:

// Syntax
// new Date();
// new Date(value)
// new Date(date string)
// new Date(milliseconds);
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

//todo Note:
//? 1: JavaScript counts months from 0 to 11:
// ?January = 0, December = 11

//? 2: JavaScript Stores Dates as Milliseconds: JavaScript stores dates as number of milliseconds since January 01, 1970.

// -----------------------------------------------
// Common Date Methods
// -----------------------------------------------
// 1. getFullYear()	
// Returns year	
// now.getFullYear() → 2025
 
// 2. getMonth()	
// Returns month (0-11)	
// now.getMonth() → 7 (August)

// 3. getDate()	
// Returns day of the month (1-31)	
// now.getDate() → 5

// 4. getDay()	
// Returns weekday (0-6, Sunday = 0)	
// now.getDay() → 2 (Tuesday)

// 5. getHours()	
// Returns hour (0-23)	
// now.getHours() → 23

// 6. getMinutes()	
// Returns minutes	
// now.getMinutes() → 45

// 7. getSeconds()	
// Returns seconds	
// now.getSeconds() → 10

// 8. toDateString()	
// Date only as string	
// now.toDateString() → Tue Aug 5 2025

// 9. toTimeString() 
// Time only as string	
// now.toTimeString() → 23:45:10 GMT+0500
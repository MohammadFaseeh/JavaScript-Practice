//* =========================================
//* Date & Time Objects in JavaScript
//* =========================================

//? Date() constructor: The Date() constructor creates "Date objects"(typeOf(date) is object). When called as a function, it returns a string representing the current time.

//? Creating a Date Object:
// You can create a new Date object using the new keyword. It can be done in several ways:
// todo There are 9 ways to create a new date object:

// Syntax
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

//? Current date and time
//? new Date(): Creates a Date object representing the current date and time "without provided date string" in ().
// const currentDate = new Date();
// console.log(currentDate); // 2025-08-17T11:08:43.685Z
//todo  This is the ISO 8601 format, which is a standard for representing dates and times. In this format, the date and time are represented together, separated by the letter "T". The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

// But the same when you run on browser it will return more human-readable format.
// Sun Aug 17 2025 16:10:15 GMT+0500 (Pakistan Standard Time)

//? 2: new Date(dateString): Creates a Date object based on the "provided date string" in ().
// const dateString = "2025-08-17T11:08:43.685Z";
// const dateFromString = new Date(dateString);
// console.log(dateFromString); //2025-08-17T11:08:43.685Z

//? 3: new Date(year, month): Creates a Date object with the specified year and month.
//const date1 = new Date(2025); // if only write year then it take it as millisecond 1970-01-01T00:00:02.025Z so we start from year and month both
// const date1 = new Date(2025, 8); // 2025-08-31T19:00:00.000Z
// console.log(date1);
// in this 19 instead of 00.00(mean night 12) because Local: 2025-09-01 00:00:00 but it show according to universal time so Convert to UTC: subtract 5 hours → 2025-08-31 19:00:00Z

//? 4: new Date(year, monthIndex, day): Creates a Date object with the specified year, month, and day.
// const date2 = new Date(2025, 8, 17); // 2025-09-16T19:00:00.000Z in this month → 0-based index So when write 8, it doesn’t mean August, it means the 9th month, which is September.
// console.log(date2);

//? 5: new Date(year, month, day, hours): Creates a Date object with the specified year, month, day, and hours.
// const date3 = new Date(2025, 1, 19, 10); // 2025-02-19T05:00:00.000Z now only month is 2 and hours is -5 from given hours remaning same.
// console.log(date3);

//? 6: new Date(year, month, day, hours, minutes): Creates a Date object with the specified year, month, day, hours, and minutes.
// const date4 = new Date(2025, 1, 19, 10, 44); // 2025-02-19T05:44:00.000Z
// console.log(date4);

//? 7: new Date(year, month, day, hours, minutes, seconds): Creates a Date object with the specified year, month, day, hours, minutes, and seconds.
// const date5 = new Date(2025, 1, 19, 10, 44, 9); // 2025-02-19T05:44:09.000Z
// console.log(date5);

//? 8: new Date(year, month, day, hours, minutes, seconds, ms): Creates a Date object with the specified year, month, day, hours, minutes, seconds, and milliseconds.
// const date6 = new Date(2025, 1, 19, 10, 44, 9, 274); // 2025-02-19T05:44:09.274Z
// console.log(date6);

//? 9: new Date(milliseconds): When you use new Date(milliseconds), you are creating a date object based on the number of milliseconds passed since January 1, 1970, 00:00:00 UTC (the Unix Epoch).

// 0 milliseconds → Thu Jan 01 1970 00:00:00 UTC
// const d1 = new Date(0);
// console.log(d1); // 1970-01-01T00:00:00.000Z

// 1000 milliseconds → Thu Jan 01 1970 00:00:01 UTC (1 second later)
// const d2 = new Date(1000);
// console.log(d2); // 1970-01-01T00:00:01.000Z

// 86400000 milliseconds → Fri Jan 02 1970 00:00:00 UTC (1 day later, because 24×60×60×1000 = 86400000 ms)
// const d3 = new Date(86400000);
// console.log(d3); // 1970-01-02T00:00:00.000Z

//todo Note:
//? 1: JavaScript counts months from 0 to 11:
// ?January = 0, December = 11

//? 2: JavaScript Stores Dates as Milliseconds: JavaScript stores dates as number of milliseconds since January 01, 1970.

//* Date String Format: If the dateString is in a recognizable format, the Date object will be created accordingly.
//? new Date(date string) creates a date object from a date string
// const date1 = new Date("2025-01-05"); // Output:2025-01-05T00:00:00.000Z its not have change in date and month because it is treated as UTC
// const date2 = new Date("January 5, 2025"); // Output:2025-01-04T19:00:00.000Z its not have change in date and time because it is treated as local-time
// console.log(date1);
// console.log(date2);

//* ==================================================
//* JavaScript Get Date Methods / Getting Components:
//* ===================================================

// You can get various components of a date using the methods of the Date object:
// //? In a date object, the time is static.

// const currentDate = new Date();
// console.log(currentDate); //2025-08-17T13:21:38.469Z

// const year = currentDate.getFullYear(); //2025
// const month = currentDate.getMonth(); // 7(0-based index)
// const date = currentDate.getDate(); //17
// const day = currentDate.getDay(); // Output:0 because today is sunday(0 for Sunday, 1 for Monday, ..., 6 for Saturday)

// console.log(day);

//* ==================================================
//* JavaScript Set Date Methods / Setting Components:
//* ===================================================

//? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.

// const date = new Date();
// console.log(date); // 2025-08-17T13:25:20.754Z

// date.setFullYear(2026);
// console.log(date); // 2026-08-17T13:27:12.502Z

//? setMonth(monthIndex): Sets the month for a specified date according to local time.
// date.setMonth(9);
// console.log(date); // 2025-10-17T13:29:05.834Z(0-based index)

//? setDate(dayValue): Sets the day of the month for a specified date according to local time.
// date.setDate(18);
// console.log(date); // 2025-08-18T13:30:40.560Z

//* ==================================================
//* JavaScript Get Time Methods / Getting Components:
//* ===================================================
// const currentTime = new Date();
// console.log(currentTime); // 2025-08-17T13:32:09.515Z

// const hours = currentTime.getHours(); //18(not according to local time give exact time)
// const minutes = currentTime.getMinutes(); //32
// const seconds = currentTime.getSeconds(); //43
// const time = currentTime.getTime(); // 1755437654850millisecond (.getTime() convert time in millisecond since January 01, 1970)
// console.log(time);

//* ==================================================
//* JavaScript Set Time Methods / Getting Components:
//* ===================================================

// const date = new Date(); // 2025-08-17T13:36:19.362Z
// console.log(date);

//? setHours(hourValue): Sets the hours for a specified date according to local time.
// date.setHours(10);
// console.log(date); // 2025-08-17T05:36:47.851Z (according to local time -5 hours)

//? setMinutes(minuteValue): Sets the minutes for a specified date according to local time.
// date.setMinutes(30);
// console.log(date); // 2025-08-17T13:30:52.204Z

//? setSeconds(secondValue[, millisecondValue]): Sets the seconds for a specified date according to local time.
// date.setSeconds(45);
// console.log(date); // 2025-08-17T13:38:45.653Z

//? setMilliseconds(millisecondValue): Sets the milliseconds for a specified date according to local time.
// date.setMilliseconds(500);
// console.log(date); // 2025-08-17T13:38:46.500Z

//? setTime(timeValue): Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
// date.setTime(1832090690883);
// console.log(date); // 2028-01-21T18:04:50.883Z(accroding to given millisecond since January 01, 1970)

//* =====================================================
//* A few useful methods of the Date object in JavaScript
//* =====================================================
// let date = new Date();
// console.log(date); // 2025-08-17T14:17:24.116Z

//? 1: toString(): Returns Date object into a full string representation. It uses local time.
// let newDate = date.toString();
// console.log(newDate); // Sun Aug 17 2025 19:17:24 GMT+0500 (Pakistan Standard Time)

//? 2: toDateString(): Converts a Date object into a date-only string. Also in local time.
// let newDate = date.toDateString();
// console.log(newDate); // Sun Aug 17 2025

//? 3: toLocaleString(): Shows both date and time in local format. Takes your computer’s region/language and timezone.
// const localString = date.toLocaleString();
// console.log(localString); // 8/17/2025, 7:26:07 PM

//? 4: toLocaleDateString(): Returns a string representing the date portion of a Date object using the current locale's conventions.
// const localDateString = date.toLocaleDateString();
// console.log(localDateString); // 8/17/2025

//? 5: toLocaleTimeString(): Returns a string representing the time portion of a Date object using the current locale's conventions.
// const localTimeString = date.toLocaleTimeString();
// console.log(localTimeString); // 7:28:02 PM

//todo: These all depending on local date and time

//? 6: parse(): Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// If the string is invalid → it returns NaN.

// const parsedDate = Date.parse(date);
// console.log(parsedDate); // 1755441028000(in millisecond since January 1, 1970, 00:00:00 UTC to Now)
// Also give like this
// const dateString = "2025-08-17T14:17:24.116Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate); // 1755440244116

//* ==================
//* //* Bonus
//* =================

//? Date.now(): It is a static method of the Date object. It returns the current time in milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).
// Unlike new Date(), it does not create a Date object — it just gives you a number.
// console.log(Date.now()); //1755441592590

// if we want to convert that milliseconds in seconds simply do
// console.log(Math.floor(Date.now()/1000)); //1755442332

//? Date.getTime(): but in this we create a Date object first not directly like Date.now()

// let newDate = new Date();
// console.log(newDate.getTime()); // 1755441870466

// we also give specific date in this
// let newDate = new Date("2025-08-17T14:17:24.116Z");
// console.log(newDate.getTime());  // 1755440244116

//? todo:
//? Use Date.now() if you want the timestamp right this second.
//? Use new Date().getTime() if you have an existing Date object from elsewhere and want its timestamp.

//! ==================
//! Interview Questions
//! =================

//! 1: Write a function to add a specified number of days to a given date.

// function addDays(date,days){
// let result = new Date(date);
// result.setDate(result.getDate() + 5);
// return result;
// }

// let currentDate = new Date ("2025-08-10");
// let newDate = addDays(currentDate,5);

// console.log("Original Date:",currentDate.toDateString());
// console.log("New Date:",newDate.toDateString());

//! Question: Write a function to calculate the difference in days between two given dates.

// function dateDifference(date1,date2){
//     let oneDay = 24 * 60 * 60 * 1000; //converts milliseconds into days.
//     let dateDiffer = Math.abs(date2 - date1);
//     return Math.round(dateDiffer/oneDay);
// }

// let date1 = new Date("2025-08-10");
// let date2 = new Date("2025-08-15");

// console.log(dateDifference(date1,date2));

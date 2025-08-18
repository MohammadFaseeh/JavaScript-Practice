//* =====================
//* ARRAYS IN JAVASCRIPT
//* =====================

//! Iterable - object where you can use the for-of loop.Example: Arrays, Strings, Maps, Sets.
//! Array-like object - Any object that looks like an array (has length + numeric keys) but is not a real array.
//! Arrays as Objects -  Arrays in JavaScript are a specific type of object that has numeric keys + length + array methods. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator - The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ==================
//*  Creating Arrays:
//* ==================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
// let fruits = new Array('apple', 'orange', 'banana')
// console.log(fruits); // [ 'apple', 'orange', 'banana' ]

//? Using array literal
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits); // [ 'apple', 'orange', 'banana' ]

//? we can also create an empty array
// let arr = [];
// console.log(typeof arr); //object

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let fruits = ["apple", "orange", "banana"];
// console.log(fruits[1]); // orange
// console.log(fruits[3]); // undefined becasue it is only from 0 to 2 index
// console.log(fruits["apple"]); // undefined because we not access directly by element only access by indexes

//* =====================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["apple", "orange", "banana"];
// fruits[2] = "mango";
// console.log(fruits); //[ 'apple', 'orange', 'mango' ]

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, map and set.
// not work with objects

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// for (let item of fruits) {
//   console.log(item); // apple orange mango grapes banana(horizentally in output)
// }

// simple for-loop
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// for (let item = 0; item < fruits.length; item++) {
//   console.log(fruits[item]); // apple orange mango grapes banana(horizentally in output)
// }

//Note: for-of and simple for-loop give same output but in simple for-loop we get index + value but in for-of only value(when you only care about values.)
// like this
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// for (let item = 0; item < fruits.length; item++) {
//   console.log(item,fruits[item]); // 0 apple 1 orange 2 mango 3 grapes 4 banana(horizentally in output)
// }

// for-of → remember its loop and more powerful (works on more data types + can break/continue).

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// for (let item in fruits) {
//   console.log(item); //0 1 2 3 4
// }

//Note: for-in loop is ❌ Bad for arrays → order not guaranteed, also loops inherited props. ✅ Good for objects.

// ? 3: forEach Method: It is an array method not loop, used only with arrays.It runs a function once for each element in the array.

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// fruits.forEach(function(curElem, index, arr) {
//     console.log(`${curElem} ${index}`);
// });

// //* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// const myForEachArr = fruits.forEach((curElem, index, arr) => {
// // return `${curElem} ${index}`; //it return undefine because for-each not return anything
// console.log(arr); // [ 'apple', 'orange', 'mango', 'grapes', 'banana' ] it give same like this array 5 time including this because for-each it calls that function on each item in array seprately.
// });
// console.log(myForEachArr); // undefined because nothing return

// forEach → remember its array method not loop and only limited to arrays, no break/continue, forEach cannot work without a function, because forEach is a method that expects a callback function as an argument.

// ? 4: map function
//* .map() is also an array method.map() creates a new array from calling a function for every array element. map() does not change the original array.
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// fruits.map(function(curElem){
//     console.log(curElem); // apple orange mango grapes banana(horizentally in output)
// })

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// const myMapArr = fruits.map((curElem, index, arr) => {
//     fruits[1] = 'pome';
//   return ` my fav fruit is ${curElem} `;
//     // console.log(arr); // [ 'apple', 'pome', 'mango', 'grapes', 'banana' ] it give same like this 5 times including this.
// });

// // console.log(myMapArr); // [' my fav fruit is apple ', ' my fav fruit is pome ', ' my fav fruit is mango ', ' my fav fruit is grapes ', ' my fav fruit is banana ']
// console.log(fruits); // [ 'apple', 'pome', 'mango', 'grapes', 'banana' ] because .map() itself doesn’t mutate the original. But if you mutate the original inside .map(), then it will change.

//todo Practice Time
//! write a program to Multiply each element with 2
// // forEach -  Performs an action on each element
// // map -  Creates a new array with transformed elements

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((curElem) => {
//   console.log(curElem * 2); // 2, 4, 6, 8, 10 - Performs an action on each element
// });

// const numbers = [1, 2, 3, 4, 5];
// const doubleValue = numbers.map((curElem) => {
//   return curElem * 2;
// });

// console.log(doubleValue); // [ 2, 4, 6, 8, 10 ] - Creates a new array with transformed elements

//* Key Differences
//! Return Value:
//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:
//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.
//? map: Since it returns a new array, you can chain other array methods after using map.

// REMEMBER THIS:
// Mutating vs Non-Mutating Array Methods
// Mutating methods(change the original array): push(), pop(), shift(), unshift(), splice(), sort(), reverse()
// Non-mutating methods(return a new array): map(), filter(), slice(), concat(), flat(), toString()(But it give string in output not array but original array unchanged),join()

//* ==========================================================================
//*  How to Add, Insert, remove and Replace Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 Add → Usually means putting a new element at the end/start of the array.
// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("guava")); // 6
// console.log(fruits); // [ 'apple', 'orange', 'mango', 'grapes', 'banana', 'guava' ]
// The push() method returns the new length.

//? 2: pop(): Method that removes the last element from an array.
// console.log(fruits.pop()); // banana
// console.log(fruits); // [ 'apple', 'orange', 'mango', 'grapes' ]
// The pop() method returns the element which pop.

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("guava")); // 6
// console.log(fruits); // [ 'guava', 'apple', 'orange', 'mango', 'grapes', 'banana' ]

//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift()); // apple
// console.log(fruits); // [ 'orange', 'mango', 'grapes', 'banana' ]

//* ==========================================================================
//*  what if, we want to insert or remove anywhere in an elements - p2
//* ==========================================================================

//? 👉 Insert → means putting an element at a specific index, also at the start or end.(not just at the start or end)

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 1, "grapes");
// console.log(fruits); // [ 'apple', 'grapes', 'banana', 'mango' ]

// //! what if you want to add the element at the end
// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 0, "grapes"); // [ 'apple', 'grapes', 'orange', 'banana', 'mango' ]
// fruits.splice(-1, 0, "grapes"); // [ 'apple', 'orange', 'banana', 'grapes', 'mango' ]
// console.log(fruits);

//? Concatination 
// let arr1 = [1,2,3,4];
// let arr2 = ["faseeh","sabeeh"];
// arr3 = arr1.concat(arr2);
// console.log(arr3); // [ 1, 2, 3, 4, 'faseeh', 'sabeeh' ]

// we also used spread operator(...).it also give new array not change in original but "it is operator not method".
// let arr1 = [1,2,3,4];
// let arr2 = ["faseeh","sabeeh"];
// arr3 = [...arr1, ...arr2];
// console.log(arr3); // [ 1, 2, 3, 4, 'faseeh', 'sabeeh' ]

//Note: one benifit of using spread over concat is that it can also add extra elements easily which in concat not possible:
// let arr1 = [1,2,3,4];
// let arr2 = ["faseeh","sabeeh"];
// let combined = [0, ...arr1, 7, ...arr2];
// console.log(combined); //[ 0, 1, 2, 3, 4, 7, 'faseeh', 'sabeeh' ]

//? toString(): Converts an array (or other object) into a string. Joins elements with commas by default. Does not change the original array.
// let fruits = ["apple", "orange", "banana", "mango"];
// let result = fruits.toString();
// console.log(result); // apple,orange,banana,mango
// console.log(fruits); // [ 'apple', 'orange', 'banana', 'mango' ] - remain same

//? join(): Converts an array into a string. You can choose any separator (-, space, /, etc.). Original array is not changed.
// let fruits = ["apple", "banana", "mango"];
// console.log(fruits.join(" - ")); // apple - banana - mango

//? array.from("Faseeh") -> convert from string to an array 
// const another_arr = Array.from("Faseeh");
// console.log(another_arr); // [ 'F', 'a', 's', 'e', 'e', 'h' ]

//? array.of() -> number to array
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// let another_arr = Array.of(score1, score2, score3);
// console.log(another_arr); // [ 100, 200, 300 ]

//? Slice
// let fruits = ["apple", "orange", "banana", "mango"];
// let slicedfruit = fruits.slice(1,2);
// console.log(slicedfruit); // [ 'orange' ]

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// console.log(numbers.indexOf(6)); //3
// console.log(numbers.indexOf(4, 5)); // -1 because not found from left to right

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result1 = numbers.lastIndexOf(6); //6
// console.log(result1);
// const result = numbers.lastIndexOf(6, 5); //3
// console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(5,3); //true
// const result = numbers.includes(5,7); // false because it move from only left to right to search
// console.log(result);

//todo Challenge time
// 1: Add Dec at the end of an array?
// const months = ["Jan", "march", "April", "June", "July"];
// months.push("Dec");
// console.log(months); // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

// 2: What is the return value of splice method?
// splice() returns an array of deleted elements.
// const months = ["Jan", "march", "April", "June", "July"];
// let removed = months.splice(3, 1); // remove "June"
// console.log(removed); // ["June"]
// console.log(months);  // ["Jan", "march", "April", "July"]

// 3: Update march to March (update)?
// const months = ["Jan", "march", "April", "June", "July"];
// months.splice(1, 1, "March");
// console.log(months); // [ 'Jan', 'March', 'April', 'June', 'July' ]

// 4: Delete June from an array?
// const months = ["Jan", "march", "April", "June", "July"];
// months.splice(3, 1);
// console.log(months); // [ 'Jan', 'march', 'April', 'July' ]

//* ===========================================
//*  Search By Conditons and Filter in an Array
//* ===========================================
//? Search +  Filter

//? 1: find Method: Returns the first matching element only. Does not change the original array. Stops iterating once it finds the first match (efficient). If nothing matches → returns undefined.

// syntax
// array.find((element, index, array) => {
//   // return true if this element matches the condition
// });

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// const result = numbers.find((curElem) => {
//   return curElem > 6;
// });
// console.log(result); // 7

//? 2: findIndex Method: Returns index, not element. Stops at first match. Returns -1 if no match. Does not mutate the original array. Just give match not array.

// syntax
// array.findIndex((element, index, array) => {
//   // return true if this element matches the condition
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.map((curElem) => curElem * 5);
// console.log(result); // [ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]

// const result2 = result.findIndex((curElem) => {
//   return curElem > 15;
// });
// console.log(result2); // 3 mean 3rd index from this array [ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]

//* 3:  filter Method: Returns a new array → immutable. Keeps all elements that pass the condition in new array. Original array does not change. Can return empty array if nothing matches.

//syntax
// array.filter((element, index, array) => {
//   // return true to keep the element
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });

// console.log(result); // [ 5, 6, 7, 8, 9 ]

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let updatedCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });
// console.log(updatedCart); // [ 1, 2, 3, 4, 5, 7, 8, 9 ]

// Practice time
// !Example 2: Filter products with a price less than or equal to 500
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];
// const filterProducts = products.filter((curElem) => {
//   return curElem.price <= 500;
// });
// console.log(filterProducts); // [ { name: 'Tablet', price: 300 }, { name: 'Smartwatch', price: 150 } ]

// //! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//     // console.log(index);
//   //   console.log(arr.indexOf(curElem));
//   return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues); // [ 1, 2, 3, 4, 6, 5, 7, 8, 9 ] now unique by removing 6 that is two time in original array

// Remember these all are work with the array and also with the object in array [{name: "Alice", age: 25}, {name: "Alice", age: 25}] like that

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort();
// console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];
// numbers.sort().reverse();
// console.log(numbers); // [ 9, 8, 7, 6, 6, 5, 4, 4, 3, 2, 1 ]

//? compare callback function
// syntax 
// const sortedNumbers = numbers.sort((a, b) => {
// if(a>b) return 1 => switch the order 
// if(b>a) return -1 => keep the order
// }); 

//1. For Ascending order

//const numbers = [3, 1, 4, 2];
// numbers.sort((a, b) => {
//   if (a > b) return 1;   // a after b
//   if (b > a) return -1;  // a before b
// });
// console.log(numbers); // [1, 2, 3, 4]

//2. For Descending order

// const numbers = [3, 1, 4, 2];
// numbers.sort((a, b) => {
//   if (a > b) return -1;  // a before b
//   if (b > a) return 1;   // a after b
// });
// console.log(numbers); // [4, 3, 2, 1]

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() and filter() both does not change the original array.

// 1: Using map to square each number and create a new array

// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result); // [ 1, 4, 9, 16, 25 ]

// 2: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// const words = ["APPLE", "banana", "cherry", "date"];
// const result = words.map((curElem) => curElem.toUpperCase());
// console.log(result); // [ 'APPLE', 'BANANA', 'CHERRY', 'DATE' ]

// 3: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((curElem) => {
//     if (curElem % 2 === 0) {
//       return curElem * curElem; // [ undefined, 4, undefined, 16, undefined ]
//     }
//   }).filter((curElem) => curElem !== undefined); // [ 4, 16 ]
// console.log(result);

// Professional way to solve this same
// const numbers = [1, 2, 3, 4, 5];
// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined)) // [ undefined, 4, undefined, 16, undefined ]
//   .filter((curElem) => curElem !== undefined); // [ 4, 16 ]
// console.log(evenSquare); 

// 4: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

// const names = ["ram", "vinod", "laxman"];
// const prefixName = names.map((curName) => `Mr. ${curName}`);
// console.log(prefixName); // [ 'Mr. ram', 'Mr. vinod', 'Mr. laxman' ]

//? Reduce method: .reduce() reduces an array to a single value. It iterates through all elements and accumulates a result. Original array not changed (immutable).
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

// const productPrice = [100, 200, 300, 400, 500];
// const totalPrice = productPrice.reduce((accum, currValue) => {
//   return accum + currentValue;
// }, 0);

// console.log(totalPrice); // 1500

//===============
// Bonus: Methods
//===============
//? Flat method(): to remove the nested array in array -> array.flat(depth)
// const arr = [1,2,[3,4,5],[4,[5,6]]];
// const another_arr = arr.flat(Infinity);
// console.log(another_arr); //[ 1, 2, 3, 4, 5, 4, 5, 6 ]

//? array.isArray("Faseeh") -> to check is it array or not it give true or false in this case its false because its string.

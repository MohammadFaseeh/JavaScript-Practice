//* ==============================
//* Object in JavaScript
//* ==============================
//? An object in JavaScript is a collection of key-value pairs. Keys are usually strings (or symbols). Values can be any data type (numbers, strings, arrays, even other objects). Objects can store both data (properties) and functions (methods), making them very useful for organizing related information.

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript.

// 1. The most common one is using object literals:
// let person = {
//   name: "Vinod",
//   "full name": "vinod thapa",
//   age: 30,
//   isStudent: false,
//   lastLoginDays: ["Monday", "Saturday"],
//   greet: function () {
//     console.log("Welcome to World Best JS Course");
//   },
// };

// 2. Using ES6 Class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let obj = new Person("Ali", 22);

// 3. Using Constructor Function -> (Old style, replaced by class)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let obj = new Person("Ali", 22);

// 4. Using new Object() -> (Avoid, just use {})
// let obj = new Object();
// obj.name = "Ali";
// obj.age = 22;

// 5. Using Object.create() -> (Useful for prototyping, but not for everyday use.)
// let proto = {
//   greet() {
//     console.log("Hello");
//   },
// };
// let obj = Object.create(proto);
// obj.name = "Ali";

//Note: For simple objects → Use Object Literal {} And For multiple objects with shared structure → Use Class (or Factory function).
// Factory Function: Alternative to class. Good for flexible and reusable object creation.
// function createUser(name, age) {
//   return { name, age };
// }
// const user2 = createUser("Ali", 22);

//* ==============================
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

// console.log(person.age);
// console.log(person["age"]); for accessing keys which are with string like full name in above no chance to access using dot

// Note: we also use object destructuring which makes code shorter, cleaner, and easier to read.
//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
// person.age = 18;
// person["full name"] = "Hassan";

//* =================================
//* Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:
// let car = {
//   start: function() {              // property, but since value is a function → method
//     console.log("Car started");
//   }
// };
// car.start(); //for accessing method

// Note:
// Normal function methods → Best for using this.
// Anonymous functions → Just functions without a name, very common in objects.
// Arrow functions → Good for short functions, avoid when you need "this".
// Callback functions → Work well inside objects for async or custom execution.
// IIFEs → Rarely used inside objects, but possible to set default values.

//* ========================================
//* We can add dynamic keys in an object
//* ========================================
// Dynamic keys mean you don’t know the property name before, and you create it at runtime (while the program is running).
// Example: user input, API response, or database value.

// let idType = "studentId";
// let student = {
//   [idType]: "A123456", // Dynamic key based on idType
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet(); // Hey, my studentId is A123456 and my name is Vinod.

//? useCase: when we want to get the user name and value in react

//* =================================
//* Data Modeling:
//* =================================
//? Data modeling in objects is used to represent real-world things in a structured, easy-to-use way in code.
// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine started!");
//   },
// };

//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.

//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.
// function changeNumber(num) {
//   num = 10;  // changes only the copy
// }
// let x = 5;
// changeNumber(x);
// console.log(x); // 5 (original didn’t change)

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

// function changePersonName(person) {
//   person.name = "Ali";  // changes the original
// }

// let student = { name: "Faseeh" };
// changePersonName(student);
// console.log(student.name); // "Ali" (original changed)

//By default, if you assign one object to another, it doesn’t create a new copy — instead, both variables point to the same object in memory.This means changing one will also change the other (this is called a shallow reference).
// let obj1 = { name: "Ali", age: 20 };
// let obj2 = obj1;  // Not a copy! Just another reference to same object
// obj2.age = 25;
// console.log(obj1.age); // 25 (changed)
// console.log(obj2.age); // 25

// To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

//? Object.assign() is used to copy properties from one or more source objects to a target object.
// Syntax: Object.assign(target, source1, source2, ...)
// target → The object where properties will be copied And source → The object(s) from which properties are taken.

// let obj = { id: 5, name: "kodyfier" };
// let obj1 = {};
// let newObj = Object.assign(obj1, obj);
// newObj.name = "thapa technical";
// console.log(newObj); // { id: 5, name: 'thapa technical' }
// console.log("original:", obj); // original: { id: 5, name: 'kodyfier' }

// one important thing is that:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 4, c: 5 };
// const result = Object.assign({}, obj1, obj2);
// console.log(result); // { a: 1, b: 4, c: 5 } b in both but we take value of that which come after

//Object.assign() → bit older, more verbose, but works the same way, so Spread (...) → modern, cleaner, and often preferred in ES6+ code.
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const result = { ...obj1, ...obj2 };
// console.log(result); // { a: 1, b: 3, c: 4 }

//* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

// const obj1 = { name: "vinod" };
// const obj2 = { name: "vinod" };
// const obj3 = obj1;
// const isEqual = obj1 == obj2 ? true : false; // false
// const isEqual = obj1 == obj3 ? true : false; // true because they refer to the same object.(reference is important in this case not properties in object)
// console.log(isEqual);

//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//? JSON is a lightweight data format used for storing and exchanging data. It looks like JavaScript objects, but it is text-based (a string) not object.

// Why we use JSON?
// Data exchange: sending/receiving data between frontend (browser) and backend (server).
// APIs: almost all APIs return data in JSON. and it is used as array of object [{},{}] like that
// Storage: saving structured data in files or localStorage.

// this is normal object
// let student = {
//   id: 1,
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: false,
//   greet: function () {
//     console.log(
//       `hey my id is ${student.identity} & my name is ${student.sName}`
//     );
//   },
// };

// in json 
// {
//   "id": 1,
//   "sName": "Vinod",
//   "sAge": 29,
//   "isStudent": false
// } // ❌ The greet function is removed, because JSON cannot contain functions.

//Convert object → JSON string (for sending/storing):
// let jsonData = JSON.stringify(student);
// console.log(jsonData); // {"id":1,"sName":"Vinod","sAge":29,"isStudent":false}

// Convert JSON string → object (for using in JS):
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject); // { id: 1, sName: 'Vinod', sAge: 29, isStudent: false }

//* ==============
//* "this" Object
//* ==============
// this is NOT about where a function is written. It’s about HOW the function is CALLED.So this is simply: “Who is calling the function right now?”

//1. Global Context
// console.log(this); //{}
// In browser → this = window And In Node.js → this = {} (empty object in module), this in global scope = global object (depends on environment).

//2. Inside a Function
// function normalFunc() {
//   console.log(this);
// }
// normalFunc(); // output as global object

//And in modern

//"use strict"; // Avoids mistakes → instead of guessing "global object", it gives undefined so you clearly see something is wrong.
// function normalFunc() {
//   console.log(this);
// }
// normalFunc(); // undefined
// In strict mode → this = undefined And In non-strict mode → this = window (browser)

//3. Inside an Object Method
// const obj = {
//   name: "Faseeh",
//   sayHi() {
//     console.log(this.name);
//   }
// };
// obj.sayHi(); // Faseeh - so When a function is called as a method → this = the object before the dot.

//4. Borrowing Methods
// const person = {
// name: "Ali",
// greet() { console.log(this.name); }
// };
// const another = {
// name: "Ahmed"
// };
// another.greet = person.greet;
// another.greet(); // "Ahmed" - so this depends on who calls the function, not where it was created.

//5. Constructor Functions / Classes
// function Person(name) {
//   this.name = name;
// }
// const p = new Person("Faseeh");
// console.log(p.name); // "Faseeh"
// With new, this = the newly created object. When we use new, JavaScript automatically creates a new empty object and sets this to point to that new object inside the function.

//How it work?
// function Person(name) {
//   // Step 1: JS secretly creates an empty object → {}
//   // Step 2: JS sets this = {} (the new object)
//   this.name = name;
//   // Step 3: Adds property → { name: "Faseeh" }
//   // Step 4: JS automatically returns the new object
// }
// const p = new Person("Faseeh");
// console.log(p.name); // "Faseeh"

//6. Arrow Functions (⚡special case)
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this); //{}
// console.log(this.name); // // undefined - Arrow functions don’t have their own this. They use this from the surrounding scope (lexical this). takes parent’s this which is {}
//   },
// };

// obj.greet(); //{}

//And
// this.name = "Faseeh"; // if we declare it outside then so now arrow use this of global that we declare here this is not undefined
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// obj.greet(); // Faseeh

//* =====================================
//* Objects Useful Methods
//* ======================================

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
//   image: "image link will be added during projects",
// };

//? 1: Object.keys(): Returns an array of all the keys of an object.

// let keys = Object.keys(product);
// console.log(keys); // [ 'id', 'name', 'category', 'brand', 'price', 'stock', 'description', 'image' ] Remember: it give keys of object in array so we also use loop on it

//? 2: Object.values(): Returns an array of all the values of an object.
// let values = Object.values(product);
// console.log(values); // [ 1, 'Laptop', 'Computers', 'ExampleBrand', 999.99, 50, 'Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.', 'image link will be added during projects' ] same in this values are in array

//? 3: Object.entries(): Returns an array of [key, value] pairs.
// let entries = Object.entries(product);
// console.log(entries); // [[ 'id', 1 ], [ 'name', 'Laptop' ], [ 'category', 'Computers' ], [ 'brand', 'ExampleBrand' ], [ 'price', 999.99 ], [ 'stock', 50 ], ['description', 'Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.' ], [ 'image', 'image link will be added during projects' ]]

//? 4: Object.hasOwnProperty(): Checks if the object has the given property directly (not from prototype).
// console.log(product.hasOwnProperty("name")); // Output: true
// console.log(product.hasOwnProperty("isStudent")); // Output: false

//? 5: Object.assign(): Already covered above

//? 6: Object.freeze(): Makes the object immutable (you cannot add, delete, or modify properties).
// Object.freeze(product);
// product.id = "5656";
// console.log(product);

//* =====================================
//* Interview Question - Objects
//* =====================================

//! 1: What will be the output?

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);

//* ===============================================
//* Interview Question - Object Manipulation(means changing, accessing, or working with objects in different ways):
//* ===============================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// function addSubject(student, subject, grade) {
//   // check if grades property exists
//   if (!student.hasOwnProperty("grades")) {
//     student.grades = {}; // create grades object
//   }

//   // add subject with grade
//   student.grades[subject] = grade;

//   return student;
// }

// console.log(addSubject(student, "Math", "A"));
// console.log(addSubject(student, "Physics", "B+"));

//* ===============================================
//* Interview Question - Object Comparison:
//* ===============================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1, obj2) => {

  //   if (obj1.length != obj2.length) {
  //     return false;
  //   } // its not work because in object obj1.length & obj2.length not suppport. length is only available on array-like structures (arrays, strings, function arguments, etc.).

// so use this approach

// const a = { name: "Faseeh", age: 25 };
// const b = { name: "Faseeh", age: 25 };
// const c = { name: "Ali", age: 25 };

// function isEqual(obj1, obj2) {
//   // Step 1: Get keys of both objects
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   // Step 2: Compare lengths of keys
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   // Step 3: Check each key & value
//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isEqual(a, b)); // true
// console.log(isEqual(a, c)); // false


// * ===============================================
// * Interview Question - Object Transformation:
// * ===============================================
// ! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

// let inputArray = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const arrayToObj = (arr) => {
//   let obj = {};
//   for (let key of arr) {
//     obj[key.id] = key; // // Use id as the key
//   }
//   return obj;
// };
// console.log(arrayToObj(inputArray)); // { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }

// ========================================
// Bonus Topic: for using symbol in Object
// ========================================
// const mySym = Symbol("key1"); //its for only symbol used in object
// let person = {
//   name: "Vinod",
//   "full name": "vinod thapa",
//   age: 30,
//   isStudent: false,
//   lastLoginDays: ["Monday", "Saturday"],
//   [mySym]: "mykey1",
//   greet: function () {
//     console.log("Welcome to World Best JS Course");
//   },
// };
// console.log(person[mySym]); // mykey1 in this in [] this "" quotations not used like in normal object accessing

// Remember:
// Symbol keys = unique & private.
// Dynamic keys = flexible & runtime-generated.

//? singleton and non singleton
// const person ={} //it is non singleton
// const person = new Object() // its singleton

//? if we have object in object then we use
// regularUser.fullName.firstName(just use dots for accessing the objects in objects)

//* ====================
//* Object Destructuring
//* ====================
//It’s a way to unpack values from an object into variables in a shorter and cleaner way.

// Example without destructuring:
// const student = {
//   name: "Ali",
//   age: 21,
//   city: "Lahore"
// };

// const name = student.name;
// const age = student.age;
// const city = student.city;

// console.log(name, age, city); // Ali 21 Lahore

// Example with destructuring:
// const student = {
//   name: "Ali",
//   age: 21,
//   city: "Lahore"
// };

// const { name, age, city } = student;
// console.log(name, age, city); // Ali 21 Lahore

// Renaming variables while destructuring:
// const student = {
//   name: "Ali",
//   age: 21,
//   city: "Lahore"
// };

// const { name: studentName, age: studentAge } = student;
// console.log(studentName, studentAge); // Ali 21

// Default values:
// const student = {
//   name: "Ali",
//   age: 21
// };
// const { name, city = "Unknown" } = student;
// console.log(name, city); // Ali Unknown

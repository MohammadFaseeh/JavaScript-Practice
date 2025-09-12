//* ==========================================
//*  Promise in JavaScript
//* ==========================================

//? What is a Promise?
// A Promise is an object that represents a value that you’ll get now, later, or never.

//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.
//  It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//todo 👉 In simpler terms, a promise is like a placeholder for the result of an asynchronous operation.
// Or A container for the future result or value.

//* It can be in one of three states:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled(Resolved): The operation completed successfully.
// Rejected: The operation failed or encountered an error.

//? Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.

//* real life example
//todo 1: Default state is pending
//todo 2: Promise Made:  Your friend promises to call you after 2 days at 6 pm. This is similar to creating a promise in JavaScript.
//todo 3: Pending Stage:  During the 2-day period, you're in a "pending" stage. You're not sure whether your friend will fulfill the promise (call you) or break the promise (not call you). Similarly, when you create a promise in JavaScript, it starts in a pending state until it either resolves (fulfills) or rejects.
//todo 4: Resolution at a Specific Time:  After 2 days and exactly at 6 pm, you'll know whether the promise is fulfilled (resolved) if your friend calls you, or if it's broken (rejected) if your friend doesn't call. This aligns with the idea that promises in JavaScript resolve or reject, often triggered by asynchronous operations, at a specific point in time.

//* ====================
//* Creating a Promise
//* ====================

//? You can create a promise using the Promise constructor. This involves creating a new instance of the Promise class, which takes a function as an argument. This function, often referred to as the "executor function," takes two parameters: resolve and reject. You call resolve when the asynchronous operation is successful and reject when it encounters an error.

// syntax
// const p = new Promise((resolve, reject) => {
//     // Asynchronous operations here
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });

// const p = new Promise((resolve, reject) => {
    
// // executor runs immediately (Promise is eager)
//   setTimeout(() => {
//     const ok = true;
//     if (ok) resolve("Data ready");
//     else reject(new Error("Something went wrong"));
//   }, 1000);
// });

// // Consuming a Promise: then, catch, finally
// p
//   .then(value => {            // runs on resolve
//     console.log(value);       // "Data ready"
//     return "next";            // important: returns a NEW promise
//   })
//   .catch(err => {             // runs on reject (or thrown error above)
//     console.error(err.message);
//     return "recovered";
//   })
//   .finally(() => {            // runs either way
//     console.log("cleanup / always runs");
//   });

//* ==========================================
//* 2: Using a Function (Promise Wrapper):
//* ==========================================

//? You can also create a promise by defining a function that returns a promise. This function usually encapsulates some asynchronous operation. Inside this function, you manually create a promise and resolve or reject it based on the result of the asynchronous operation.

// syntax
// function myPromiseFunction() {
//   return new Promise((resolve, reject) => {
//     // Asynchronous operations here
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
//   });
// }

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Sorry, I can't");
//   }, 2000);
// })

// myPromise.then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Don't worry, We all miss you and keep smiling");
//   });

// ==============
// if use return
// ==============
// const myPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Sorry, I can't");
//     }, 2000);
//   });
// };

// myPromise() //here use ()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Don't worry, We all miss you and keep smiling");
//   });
// 1: By default promise has the pending state
// 2: the moment we use setTimeout, we need to handle promises, we can do using then and catch

//* ================
//* Promise Methods
//* ================

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.

// Example usage:

// The enrollStudent function returns a promise that resolves or rejects based on the success or failure of the enrollment process.
// The then method is used to handle the success case, printing a success message.
// The catch method is used to handle the failure case, printing an error message.
// The finally method is used to print a message indicating the completion of the enrollment process, whether successful or not.

// Example usage:
// ==========
// Example:1
// ==========
// const studentName = "Faseeh";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
//     // Simulating asynchronous enrollment process
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;

//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

// ==========
// Example:2
// ==========
// // Function returning a Promise
// const orderPizza = (isPizzaAvailable) => {
//   return new Promise((resolve, reject) => {
//     console.log("1. Promise State: PENDING... 🍕");

//     setTimeout(() => {
//       if (isPizzaAvailable) {
//         resolve("Pizza is ready! ✅");
//       } else {
//         reject("Sorry, no pizza today ❌");
//       }
//     }, 2000); // Wait 2 seconds
//   });
// };

// // Using the promise
// orderPizza(true) // Change to false to see rejection
//   .then((successMessage) => {
//     console.log("2. Promise State: FULFILLED 🎉");
//     console.log("Message:", successMessage);
//   })
//   .catch((errorMessage) => {
//     console.log("2. Promise State: REJECTED 😢");
//     console.log("Error:", errorMessage);
//   })
//   .finally(() => {
//     console.log("3. Promise Completed ✅ (Fulfilled or Rejected)");
//   });

//=========================
// Promise methods example:
//=========================
// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve("First"), 2000)
// );

// // const promise2 = new Promise((resolve) =>
// //   setTimeout(() => resolve("Second"), 5000)
// // );

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Failed"), 100)
// );

// const promise3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Third"), 1000)
// );

// Promise.all([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.race([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


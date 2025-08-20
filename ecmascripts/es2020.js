//* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//? Creating BigInts:
//? - Using the `n` suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

//* =======================================
//*  Nullish Coalescing Operator ??
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let username = null;
// let defaultName = "Guest";
// let finalName = username ?? defaultName;
// console.log(finalName); // "Guest"

// Explanation: username is null. ?? checks → is it null or undefined? Yes → so use "Guest".

// And
// let count = 0;
// console.log(count ?? 100); // 0

// Explanation: Here count = 0 and 0 is not null/undefined, so it keeps 0. (If you had used ||, it would give 100 because 0 is falsy).


//* ===================================
//*  Optional Chaining Operator (?.)
//* ===================================
//? It helps you safely access nested properties of an object without getting errors if something is undefined or null.

//? With or Without optional Chaining operator(?.)
// let user = {
//   name: "Ali",
//   address: { city: "Lahore" }
// };

// // Without ?. (works fine if property exists)
// console.log(user.address.city); // Lahore

// // With ?. (still works fine if property exists)
// console.log(user?.address?.city); // Lahore

// // If address doesn’t exist
// let user2 = { name: "Ahmed" };

// // ❌ Without ?.
// console.log(user2.address.city); // Error

// // ✅ With ?.
// console.log(user2?.address?.city); // undefined

// Why important?
// Without ?. → You risk an error if property is missing.
// With ?. → You safely get undefined instead of an error.

//* =======================================
//*  Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.

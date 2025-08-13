// Object.groupBy()
// Map.groupBy()
// String isWellFormed()
// String toWellFormed()
// Promise.withResolvers()
// Atomics.waitAsync

// ============================================
//? JavaScript Object.groupBy() & Map.groupBy()
// ============================================
// Group array items by a key determined from each element—like SQL’s GROUP BY.

// 1. Object.groupBy()
// Groups an array’s items into an object, based on a function you give.

// const numbers = [1, 2, 3, 4, 5, 6];
// const grouped = Object.groupBy(numbers, num => num % 2 === 0 ? "even" : "odd");
// console.log(grouped);

// 2. Map.groupBy()
// Same idea as Object.groupBy() but it stores results in a Map instead of an object.

// const words = ["hi", "sun", "cat", "hello", "sky"];
// const grouped = Map.groupBy(words, word => word.length);
// console.log(grouped);

// ==============================================
//? String.isWellFormed() & String.toWellFormed()
// ==============================================

// let bad = "ab\uD800";          // lone high surrogate
// bad.isWellFormed();           // false
// bad = bad.toWellFormed();     // replaces bad part
// bad.isWellFormed();           // true

// RegExp /v Flag()
// RegExp.escape()
// Float16Array
// Math.f16round()
// Promise.try()
// Set union()
// Set intersection()
// Set difference()
// Set symmetricDifference()
// Set isSubsetOf()
// Set isSupersetOf()
// Set isDisjointFrom()
// Import Attributes

//? RegExp /v flag
// The new Unicode-sets flag for regular expressions, enhancing \p{…} support and allowing set intersection, union, subtraction.

// const isEmoji = /\p{RGI_Emoji}/v;
// console.log(isEmoji.test("😄")); // true

//? RegExp.escape()
// Safely escapes a string so it can be used literally inside a regex—no syntax issues.

// const safe = RegExp.escape("[Hello].*?");
// console.log(new RegExp(safe).test("[Hello].*?")); // true

//? Float16Array
// A typed array storing half-precision (16-bit) floats—great for memory-optimized numeric data, like GPU use.

// const f16 = new Float16Array([1.5, 2.5]);
// console.log(f16[1]); // 2.5

//? Math.f16round()
// Rounds a Number to the nearest 16-bit float representation.

// console.log(Math.f16round(1.337)); // ~1.3369140625

//? Promise.try()
// Wraps a synchronous or async callback into a Promise and catches thrown errors automatically.

//? Promise.try(() => JSON.parse("x"))
//  .catch(err => console.log("Caught:", err.message));

//? Set.prototype.union()
// Returns a new Set containing all elements from both sets.

// const a = new Set([1,2]), b = new Set([2,3]);
// console.log(a.union(b)); // Set {1,2,3}

//? Set.prototype.intersection()
// Returns a new Set with only elements common to both sets.

// console.log(a.intersection(b)); // Set {2}

//? Set.prototype.difference()
// Returns a Set of elements in the first set not present in the second.

// console.log(a.difference(b)); // Set {1}

//? Set.prototype.symmetricDifference()
// Returns a Set of items in either set, but not in both.

// console.log(a.symmetricDifference(b)); // Set {1,3}

//? Set.prototype.isSubsetOf()
// Checks if all elements of this set are in another.

// console.log(new Set([1,2]).isSubsetOf(a)); // true

//? Set.prototype.isSupersetOf()
// Checks if this set contains all elements of another set.

// console.log(a.isSupersetOf(new Set([2]))); // true

//? Set.prototype.isDisjointFrom()
// Returns true if two sets share no common elements.

// console.log(a.isDisjointFrom(new Set([3,4]))); // true

//? Import Attributes
// Adds extra metadata (like type) to module imports using new inline syntax.
// import config from "./config.json" with { type: "json" };
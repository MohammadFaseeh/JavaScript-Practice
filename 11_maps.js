//* ==============================
//* Maps
//* ==============================
// A Map is a built-in object in JavaScript that stores key-value pairs.
// Unlike normal objects, keys in a Map can be of any type (string, number, object, function, etc.).
// Maps maintain the insertion order of keys.
// Maps must have unique values(repetation no allowed or accept)

//? Syntax
// const myMap = new Map();

//We can also pass an array of key-value pairs:
// const myMap = new Map([
//   ["name", "Faseeh"],
//   ["age", 22],
//   ["isStudent", true]
// ]);

//* ==============================
//* Important Methods of Map
//* ==============================

//? 1. set(key, value) → adds/updates an entry
// const myMap = new Map();
// myMap.set("name", "Ali");
// myMap.set("age", 25);
// myMap.set(1, "one");  // number key
// myMap.set({x:10}, "object key"); // object key

// console.log(myMap); // Map(4) { 'name' => 'Ali', 'age' => 25, 1 => 'one', { x: 10 } => 'object key' }


//? 2. get(key) → retrieves the value
// console.log(myMap.get("name"));  // Ali
// console.log(myMap.get(1));       // one


//? 3. has(key) → checks if a key exists
// console.log(myMap.has("age"));  // true
// console.log(myMap.has("class")); // false


//? 4. delete(key) → removes an entry
// myMap.delete("age");
// console.log(myMap); // Map(3) { 'name' => 'Ali', 1 => 'one', { x: 10 } => 'object key' }

//? 5. clear() → removes all entries
// myMap.clear();
// console.log(myMap); // Map(0) {}

//? 6. size → returns the number of elements
// console.log(myMap.size); // 4

// Iterating over a Map
// You can loop through a Map using:

//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, map and set.
// (a) for…of loop (unlike object that not work with for-of map work with for-of)
// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);

// for (const [key, value] of map) { //without [] it give [ 'a', 1 ] [ 'b', 2 ] [ 'c', 3 ] like that so use [] always in map

//   console.log(key, value); // a 1 b 2 c 3(Horizentally)
// }

//? 2. forEach
// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);
// map.forEach((value, key) => {
//   console.log(`${key} : ${value}`); // a : 1 b : 2 c : 3(Horizentally)
// });

//? 3. keys(), values(), entries()
// console.log([...map.keys()]);    // ["a", "b", "c"]
// console.log([...map.values()]);  // [1, 2, 3]
// console.log([...map.entries()]); // [["a",1],["b",2],["c",3]]

//?Difference Between Map and Object
// In object only string & symbol But in Maps any type (string, number, object, etc.)
// In object order Not guaranteed But in Maps Maintains insertion order
// In object iteration is Manual (for…in) but in Maps easy with for…of, forEach
// In object performance is Slower for frequent additions/removals but in Maps Faster for key-value operations
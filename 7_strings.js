//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.
// typeof(string) is string

//* String Properties:
//? length: Property that returns the length of the string (number of characters).
// const str = "Hello,    World!";
// console.log(str.length);
// including space n all

//=====================================
// Ways to Create Strings in JavaScript
//=====================================
// 1. String Literal (Normal Way ✅)
// let str1 = "Hello World";
// let str2 = 'JavaScript';
// let str3 = `Template Literal`;

// 2. String Constructor (Object Form ❌ not recommended usually)
// let str4 = new String("Hello");
// console.log(str4);        // [String: 'Hello']  (an object)
// console.log(typeof str4); // "object"

//Problem:
// let a = "Hello";
// let b = new String("Hello");
// console.log(a === b); // false (one is primitive, other is object)

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Thapa Technical " & I am a Full Stack Developer. ";
// let text = "My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";
// let text = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';

// console.log(text);

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// left to right
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

// let text = "Vinod Thapa";
// console.log(text.indexOf("thapa")); // indexOf() method is case sensitive so it give error
// console.log(text.indexOf("Thapa",2));
// In position in upper-example mean after the 2 check if found give index value otherwise if not after given position output is -1

//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string AND if not after given position output is -1
// right to left
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = text.indexOf("JavaScript"); //6
// let index = text.lastIndexOf("JavaScript"); //44
// let index = text.lastIndexOf("JavaScript", 40); //6
// console.log(index);

//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i); //6 and if i not write it give -1 mean not found so i is necessary for checking index
// console.log(result);

//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value

//? match() : "Returns an array" of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript"); // NULL because Script "S" is small its case sensitive
// let result = text.match("JavaScript"); // it give value in new array of only first which match with other info
// let result = text.match(/Javascript/i); //same as above output

// todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/Javascript/gi); // [ 'JavaScript', 'JavaScript' ] write both which match because of g

// console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.use spread(..) or loop
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("javascript"); //Object [RegExp String Iterator] {} it give this because it convert it to regExpr(regular expression) "/javascript/"
// let matchResult = text.matchAll("JavaScript"); //same as above
// console.log(matchResult);

// TODO: here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end
// so for solving one step is (...)
// let matchResult = text.matchAll("javascript");//this give no output just blank because of case-sensitivity
 // let matchResult = text.matchAll(/JavaScript/i); //error
// text.matchAll(/JavaScript/gi); OR text.matchAll(/JavaScript/g); //same work if we write normal text so we dont need to write in regular expression it automatically convert it with g
// let matchResult = text.matchAll("JavaScript"); // it give value in new array but in two array because two JavaScript matched with other info
// console.log(... matchResult);

// second way is loop
// for (let item of matchResult) {
//   console.log(item); // same output as let matchResult = text.matchAll("JavaScript");
// } 

// for (let item of matchResult) {
//   console.log(item[0]); //it give only index 0 values of bth arrays
// } 

//? includes(): Returns true if the string contains the specified value, and false otherwise.
// includes(searchString);
// includes(searchString, Position);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes("java"); // false becasuse case sensitive
// let includeResult = text.includes("Java"); // true if we not write complete JavaScript then also its true because which enter is their
// let includeResult = text.includes(/java/i); // error because regular expression not used in includes
// let includeResult = text.includes("J"); // true
// let includeResult = text.includes("J",45); // false because after 45 no J is found
// console.log(includeResult);

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome"); // false
// let result = text.startsWith("Hello"); // true
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome"); // false
// let result = text.endsWith("course"); // true
// console.log(result);

//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6); // print all from 6 to end because end is not give
// let result = text.slice(6, 15); // 6 to 14 print 15 not included
// let result = text.slice(-61, 4); // Hell because it also accept negative value and count backward when -ve value
// console.log(result);

// b: substring()

//* Substring() and subString() not allowed only write in small alphabets like thus substring()
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6); //it give string "ourse" from backward
// let result = text.substring(-6);  //it give all string
// let result = text.substring(4,8); // o Ja neglect 8th index
// console.log(result);

//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0); // Hello JavaScript, welcome to our world best JavaScript course
// let result = text.substring(1); // ello JavaScript, welcome to our world best JavaScript course
// let result = text.substring(-5); // Hello JavaScript, welcome to our world best JavaScript course
// let result = text.slice(-5); // ourse
// console.log(result);

//! similarities
//TODO: In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1); // ello JavaScript, welcome to our world best JavaScript course
// let result = text.substring(1); // ello JavaScript, welcome to our world best JavaScript course
// console.log(result);

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(); //H
// let result = text.charAt(6); //J
// let result = text.charAt(-6); // EMPTY because not support -ve values
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6); //74 Because charCode start from A=65 to Z=90 and for a=97 to z=122
// let result = text.charCodeAt(-6); //NaN because not support -ve values
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as charAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6); // c because at support -ve
// console.log(result);

//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("world", "JavaScript"); // Hello, World! same because it is case-sensitive
// const newStr = str.replace("World", "JavaScript"); // Hello, JavaScript!
// const newStr = str.replaceAll("World", "JavaScript"); //Change all in string not only one
// console.log(newStr);

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/i, "vinod"); // Hello, vinod! How are you, World?
// let replacedString = originalString.replace(/world/gi, "vinod"); //so using this now we dont need replaceAll
// console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? 1. toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? 2. trim: Removes whitespace only from both ends of the string not between
// const str = "   Hello, World!   ";
// console.log(str.trim());// Output: "Hello, World!"

//Also used trimStart and trimEnd
// const str = "   Hello, World!   ";
// console.log(str.trimStart()); // Output: "Hello, World!   "
// console.log(str.trimEnd()); // Output: "   Hello, World!"

//? 3. split: split() is a string method that splits a string into an array of substrings, based on a separator (like space " ", comma ",", or any character/pattern).
// Syntax
// str.split(separator, limit);

// Examples
// 1. if nothing enter then copy same as it is
// const str = "apple,orange,banana";
// let strArr = str.split() // [ 'apple,orange,banana' ]

// 2. Split by space
// let str = "Hello JavaScript World";
// let result = str.split(" ");
// console.log(result); // Output:["Hello", "JavaScript", "World"]

// 3. Split by comma
// let str = "apple,banana,grapes,orange";
// let result = str.split(",");
// console.log(result); // Output:["apple", "banana", "grapes", "orange"]

// 4. Split every character
// let str = "abc";
// let result = str.split("");
// console.log(result); // Output:["a", "b", "c"]

// 5. Split with limit
// let str = "a b c d e";
// let result = str.split(" ", 3);
// console.log(result); // Output:["a", "b", "c"] (only 3 splits allowed)

// 4. Also reverse string but write like this
// let str = "Hello";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr); Output:olleH

// In this
// Explanation:
// str.split("") → converts "Hello" into ["H", "e", "l", "l", "o"].
// .reverse() → reverses the array to ["o", "l", "l", "e", "H"].
// .join("") → joins back into "olleH".
// ✅ So, .reverse() works on arrays, not directly on strings.


// String.fromCharCode()
// It is a static method of the String object, not a method of string values.
// Purpose:
// Works in the opposite way of charCodeAt(). It takes a Unicode number and gives back the character.

// Example:
// console.log(String.fromCharCode(97));  // "a"
// console.log(String.fromCharCode(65));  // "A"
// console.log(String.fromCharCode(48));  // "0"


//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("A".charCodeAt(0)); //65
// console.log("a".charCodeAt(0)); //97
// console.log("z".charCodeAt(0)); //122

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

//! 2: Write a function to count the number of vowels in a string?

// const countVowels = (str) => {
//   const vowels = "aeiou";
//   let count = 0;
//   for (let char of str) {
//     console.log(char);
//     // console.log(str.includes(char));
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
//   console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
// console.log(countVowels("Hello a i o u world"));

//! 3: Write a function to check if all the vowels presents in a string or not?

// const checkAllVowelPresentOrNot = (str) => {
//   const vowels = "aeiou";
//   for (let char of vowels) {
//     // console.log(char); //a,e,i,o,u
//     console.log(str.includes(char)); //true or false
//     if (!str.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));

//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

// function isPangram(str) {
//   // Convert string to lowercase to make it case-insensitive
//   str = str.toLowerCase();

//   // Loop through all letters from a to z
//   for (let i = 0; i < 26; i++) {
//     let letter = String.fromCharCode(97 + i); // 'a' is 97 in ASCII
//     // Check if current letter is missing
//     if (!str.includes(letter)) {
//       return false; // Not a pangram
//     }
//   }
//   return true; // All letters found → it's a pangram
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
// console.log(isPangram("Hello world")); // false





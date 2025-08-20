//* =======================================
//*  How JavaScript Works?
//* ===================================

// https://www.jointjs.com/demos/abstract-syntax-tree

//! 1: Parsing Phase
//* 1. Lexical analysis
//?Lexical analyzer, also known as a lexer, is the first step in the process of compiling a JavaScript program. It breaks the program down into tokens, which are the basic building blocks of the language.

//* 2. Syntax analysis
//? Takes the stream of tokens from lexical analysis and checks them for correct syntax. If the syntax is correct, syntax analysis generates a tree-like structure called a parse tree or abstract syntax tree (AST). The AST represents the hierarchical structure of the program.

//* 2. Compilation (JIT - Just-In-Time Compilation):
//? After the AST is created, the JavaScript engine typically goes through a compilation phase. In modern engines, like V8 in Chrome, SpiderMonkey in Firefox, or JavaScriptCore in Safari, this compilation often involves a combination of two approaches:

//? Parse and Compile: The engine parses the code and compiles it into an intermediate form, such as bytecode or machine code.

//? Just-In-Time Compilation (JIT): Some engines use JIT compilation, where the intermediate code is compiled just before execution. This allows the engine to optimize the code based on runtime information, improving performance.

//* 3. Execution:
//? Once the code is compiled, the JavaScript engine executes it. During execution, the engine creates execution contexts((basically an environment to execute code).), manages the scope chain, handles variable assignments, and calls functions.

//? The execution context consists of two phases: 
// 1. the Memory creation phase (where variables and functions are hoisted)
// 2. the execution phase (where the code is actually run).

//?Two main types of Execution Context:
// 1. Global Execution Context (GEC): created when your JS file starts.(this is cumpulsory)
// 2. Function Execution Context (FEC): created every time a function is called. When a function is called, a new Execution Context is created (its own creation + execution phases). After function finishes, its context is destroyed and control goes back to the parent context(which is global execution context).

//* More on inside execution phase

//! Call Stack
//? In order to manage the execution contexts, the JavaScript engine uses a call stack.
//? The call stack is a data structure that keeps track of the currently executing functions in a program. It operates on the Last In, First Out (LIFO) principle, meaning that the last function added to the stack is the first one to be executed and completed.

//! Heap Memory:
//? The heap memory is where dynamically allocated memory resides. This is where objects, closures, and other dynamically allocated data are stored. While the call stack manages the flow of execution and function contexts, the heap memory holds data that is referenced by these execution contexts.

//todo:  Key activities during the creation phase include:
// var are hoisted → set to undefined.
// let/const are hoisted but uninitialized (Temporal Dead Zone).
// Function declarations are hoisted with their full bodies.
// Creates the global object (window in browsers, global in Node).
// Sets "this": Browser script: this === window And Node (CommonJS): this === {} in modules.

//! Execution Phase:
//? After the creation phase, the actual code execution takes place. This is when the JavaScript engine goes through the code line by line.
//? Variables are assigned their values, functions are executed, and the program's logic is carried out.

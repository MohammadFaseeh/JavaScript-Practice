//* -------------------------------
//*  Closure:
//* -------------------------------

//? A closure is created when an inner function has access to the variables of its outer function, even after the outer function has finished executing.

// function outerFunction() {
//   var outerVariable = "I'm from outer";

//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction; // here outer function return the inner function not value so it is ok to use it out of inner scope because function not return in its scope its value that return in scope
// }
// var closureFunction = outerFunction();
// closureFunction(); // I'm from outer

//Why closures are useful?
// 1. Data Privacy → You can hide variables inside closures.like outerVariable in above example
// 2. State Management → Useful for counters, caching, etc.
// 3. Callbacks & Event Listeners → Often use closures.

//===================
// Real-life Example
//===================

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit: function(amount) {
//       balance += amount;
//       console.log(`Deposited: ${amount}, Balance: ${balance}`);
//     },
//     withdraw: function(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         console.log(`Withdrew: ${amount}, Balance: ${balance}`);
//       } else {
//         console.log("Insufficient balance!");
//       }
//     },
//     checkBalance: function() {
//       console.log(`Current Balance: ${balance}`);
//     }
//   };
// }

// const myAccount = createBankAccount(100);
// myAccount.deposit(50);   // Deposited: 50, Balance: 150
// myAccount.withdraw(30);  // Withdrew: 30, Balance: 120
// myAccount.checkBalance();// Current Balance: 120

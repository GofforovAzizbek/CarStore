// 1-
// function createValidator(pass) {
//   return function (input) {
//     return input === pass;
//   };
// }

// const check = createValidator("1234");

// console.log(check("1234")); // true
// console.log(check("1231")); // false

// 2-
// function createLimitedCall(fn, limit) {
//   let count = 0;

//   return function () {
//     if (count < limit) {
//       count++;
//       fn();
//     } else {
//       console.log("Limit tugadi");
//     }
//   };
// }

// const sayHi = createLimitedCall(() => {
//   console.log("Salom");
// }, 2);

// sayHi(); // Salom
// sayHi(); // Salom
// sayHi(); // Limit tugadi

// 3-
// function createAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit(amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw(amount) {
//       if (amount > balance) {
//         return "Pul yetarli emas";
//       }
//       balance -= amount;
//       return balance;
//     }
//   };
// }

// const account = createAccount(100);

// console.log(account.deposit(50));  // 150
// console.log(account.withdraw(30)); // 120

// 4-
// function createSentence() {
//   let text = "";

//   return function (word) {
//     text += (text ? " " : "") + word;
//     return text;
//   };
// }

// const add = createSentence();

// console.log(add("Salom")); // Salom
// console.log(add("dunyo")); // Salom dunyo

// 5-
// function guessGame(secretNumber) {
//   let attempts = 0;

//   return function (guess) {
//     attempts++;

//     if (guess > secretNumber) return "Katta";
//     if (guess < secretNumber) return "Kichik";
//     return `Topdingiz! Urinishlar: ${attempts}`;
//   };
// }

// const game = guessGame(7);

// console.log(game(5));
// console.log(game(10));
// console.log(game(7));

// 6-
// function createAverage() {
//   let sum = 0;
//   let count = 0;

//   return function (num) {
//     sum += num;
//     count++;
//     return sum / count;
//   };
// }

// const avg = createAverage();

// console.log(avg(10)); // 10
// console.log(avg(20)); // 15
// console.log(avg(30)); // 20

// 7-
// function colorGenerator(colors) {
//   let index = 0;

//   return function () {
//     const color = colors[index];
//     index = (index + 1) % colors.length;
//     return color;
//   };
// }

// const nextColor = colorGenerator(["red", "green", "blue"]);

// console.log(nextColor()); // red
// console.log(nextColor()); // green
// console.log(nextColor()); // blue
// console.log(nextColor()); // red

// 8-
// function createTimer() {
//   const start = Date.now();

//   return function () {
//     const now = Date.now();
//     return Math.floor((now - start) / 1000) + " soniya o'tdi";
//   };
// }

// const timer = createTimer();

// // biroz kutib
// console.log(timer());
// 8 - ni tushunmadim > Hasan aka Kechroq tekshirib berarsizda :)

// 9-
// function createPrefixer(prefix) {
//   return function (word) {
//     return prefix + word;
//   };
// }

// const helloer = createPrefixer("Salom ");

// console.log(helloer("Ali")); // Salom Ali

// 10-
// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// console.log(multiply(2)(4)(4)); // 24

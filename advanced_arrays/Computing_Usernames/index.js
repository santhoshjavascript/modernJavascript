"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

//  const hell = new Map([
//   [account1.owner, account1],
//   [account2.owner, account2],
//   [account3.owner, account3],
// ]);
// hell.forEach((hell) => {
//   console.log(hell);
// });-

const accounts = [account1, account2, account3, account4];
// console.log(accounts);

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/**
Map - The usage of map is if we want something newly. Let's say we already have a array but instead of that we want new array in that case using map can return a new array.
forEach - We can use forEach to mutate the original and modify it.
The difference between map and forEach is 'Side Effect'
 */

// Using With Map here

const pure_Finction = (names) => {
  const storing = names
    .split(" ")
    .map((closer_Working) => closer_Working[0].toUpperCase())
    .join(" ");

  return storing;
};

// Using with forEach Here

const side_Effect = (names) => {
  names.forEach((closure_Working) => {
    closure_Working.userName = closure_Working.owner
      .split(" ")
      .map((closure_Working) => console.log(closure_Working));
  });
};

// Higher Order Function Now

const transform = (str, fn) => fn(str);

console.log(transform("Santhosh Hack Woeld", pure_Finction));
transform(accounts, side_Effect);

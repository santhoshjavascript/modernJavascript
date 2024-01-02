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

const storing = accounts.find(
  (first_Value) => first_Value.owner === "Steven Thomas Williams"
);

const using_Index = accounts.find((first_Acuurate, index) => index === 2);

const using_ForEach = accounts.forEach((loading) => {
   loading.owner === "Sarah Smith" ? console.log(loading) : null;
});


console.log(using_Index);
console.log(storing);

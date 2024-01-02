// Using Normal Method  for of

const amounts = [100, 90, -200, -78, -67, -10, 78, 56, 2];

for (const values of amounts)
  values < 0 ? console.log(" Result Sucess", values) : null;

//   Using with Filter And its aviod else value

const storing = amounts.filter((callback) => console.log(callback < 0));
console.log(storing);

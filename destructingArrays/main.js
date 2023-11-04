//..........................................................Destructing with arrays................................................................

//this my family but some another pepole here now go extract that pepoles
let myFamily = [
  "murugesan",
  "vijayakodi",
  "santhosh",
  "ajay",
  "harish",
  "nadiya",
];

let [, , , , anotherMan, anotherGirl] = myFamily;

console.log(
  `This guy ${anotherMan}, and This girl ${anotherGirl} not on my Family`
);

// this type def using ...restOperator getting a balance value
const [dad, mom, bigBrother, sumallBrother, ...restInpeace] = myFamily;
console.log(dad, mom, bigBrother, sumallBrother, restInpeace);

//swab to mom dad place
let [main, sub] = myFamily;

[main, sub] = [sub, main];

console.log(main, sub);

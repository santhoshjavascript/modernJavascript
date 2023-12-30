// Using With Map Method Here

const mobile_Phones = [
  { name: "OPPO", price: 15000 },
  { name: "VIVO", price: 17000 },
  { name: "MOTO", price: 2000 },
  { name: "NOKIA", price: 1100 },
  { name: "APPLE", price: 100000 },
];

// map Method
const storing = mobile_Phones.map((items) => {
  return items;
});
// So Its Return Array
console.log(storing);

// forEach Method cant return anything its only perform
const recived = mobile_Phones.forEach((item) => {
  return item.price;
});
// Loops are run one by one once run after  storing output again run in call stcak
console.log(recived);

//filter Method

const same_Input = mobile_Phones.filter((item) => {
  return item.price <= 3000;
});

console.log(`Those are all less price of amount here ${same_Input}`);

movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// Using includes Its Checking Array there or not
console.log(movements.includes(5000));

// Here Some Also Doing Like that But Its Performe What Ever U want

const storing = movements.some((performance) => performance > 0);
console.log(storing);

// Here Using Every Method Its all want to be Satisfied
const storingTwo = movements.every((performanceall) => performanceall > 0);
console.log(storingTwo);

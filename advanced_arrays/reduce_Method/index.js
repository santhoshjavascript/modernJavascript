// Doing in Normal Way Of for loop

const cost = [200, 120, 50, 65, 76, 31];

const contain = (items) => {
  let storing = 0;

  for (const value of items) storing = storing + value;
  return storing;
};

console.log(contain(cost));

// Reduce its add Every Elemnt add given single Output

const storing = cost.reduce((accumulator, current) => accumulator + current);

console.log(storing);

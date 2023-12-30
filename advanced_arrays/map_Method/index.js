// forEach: It doesn't change the original array Its have Side Effect
const storing = [10, 20, 15, 27];

storing.forEach((hell) => {
  console.log(hell * 2);
});

console.log(
  `--------------------------------------------------------------------------------`
);

// It doesn't change the original array; it returns a new array with the modified elements Pure Function

const villan_Arc = storing.map((hell) => {
  return hell * 2;
});

console.log(villan_Arc);

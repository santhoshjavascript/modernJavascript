// Using with At method

const storing = [1, 2, 3, 4];
console.log(storing[storing.length - 1]);

// Getting Last Elemnt Using With Slice
console.log(...storing.splice(-1));

// At method
console.log(storing.at(-1));

// chartAt method Its only Working with Strings

console.log(storing.charAt(0));
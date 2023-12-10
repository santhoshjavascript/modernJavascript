// Slice its extract from arrays
const english_Letters = ["a", "b", "c", "d", "e", "f"];

//Taken Shallow Copy
console.log(english_Letters.slice());
console.log([...english_Letters]);

//Muti Ways Apply Slice its not modifng Orginal Array
console.log(english_Letters.slice(1, 4));
console.log(english_Letters.slice(1, -3));
console.log(english_Letters.slice(1, -4));

//Splice its Deleteing Form Main Orginal Array
const splice_Letters = ["s", "a", "n", "t", "h", "o", "s", "h"];

//Using to the splice Method
console.log(splice_Letters.splice(-1));
console.log(splice_Letters);

console.log(splice_Letters.splice(1, 5));
console.log(splice_Letters);

//Reverse from array
const number = [10, 9, 8, 7, 6, 1, 3, 2];
const my_Name = "santhosh";

console.log(number.reverse());
console.log(my_Name.split("").splice(1, 5).reverse());

//join(" - ") , concat onle hes teaching that thats it
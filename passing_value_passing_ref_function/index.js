//passing by value PRIMITIVE type Ethu memory aha address aha copy pannala athoda value mattum copy pannuthu

let number = 1;
let copy_Number = number;

console.log(number);
console.log(copy_Number);

number = 10;
console.log(number);
console.log(copy_Number);

// passing by Referance type Ethu vanthu memeory address aha point pannum

const santhosh_info = {
  brother: " Harish",
};

const copy_Santhosh = santhosh_info;

console.log(santhosh_info);
copy_Santhosh.brother = " Ajay";
console.log(copy_Santhosh);

//Passing value using function

let from = "Coimabatore";
let info = {
  name: "santhosh",
};

const passing_Value = (fromAddress, information) => {
  return [(fromAddress = "Chennai"), (information.name = " Hacker")];
};

console.log(passing_Value(from, info));
//passing by value copy pannum
console.log(from);
//passing by referannce memory la erunthu edukkum
console.log(info);

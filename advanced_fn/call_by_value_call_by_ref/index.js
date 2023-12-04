//Call by value When you do the line let storing_Name = name;, you are not creating a new variable storing_Name that is linked to name. Instead, you are creating a new variable and copying the current value of name into it. After this line executes, storing_Name is not dynamically linked to name; it simply holds a copy of the value that name had at that moment.

let name = "Santhosh";
let storing_Name = name;

console.log(name);
console.log(storing_Name);

//Chnaging Value

name = "Mitushuga";
console.log(name);
console.log(storing_Name);

//Call by referance
//Its not Only Changing copy Object its affect with main Object

const referance_Object = {
  hacker: "No",
};
const copy_Object = referance_Object;
copy_Object.hacker = "YES I AM";

console.log(referance_Object);
console.log(copy_Object);

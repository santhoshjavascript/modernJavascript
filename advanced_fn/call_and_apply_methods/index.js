const main_Object = {
  method(name, age) {
    console.log(
      `my ${name} and my family ${this.family} and my age ${age} last one status ${this.status}`
    );
    this.addInfo.push(name, age);
  },
};

const object_One = {
  family: "Murugesan",
  addInfo: [],
  status: "Poor",
};

const object_Two = {
  family: "Velraj",
  addInfo: [],
  status: "Welthy",
};

const object_Three = {
  family: "Kanasan",
  addInfo: [],
  status: "Middle",
};

//Compare to Below Its Worst Way
object_One.method = main_Object.method;
console.log(object_One.method("santhosh", 19));

// function aha varaible ku set pa=num pothu antha variable run aka kudathuna () call panna kudathu
const stored = main_Object.method;
// stored("santhosh", 21);

//This is Call Method Its represent By a THis key
stored.call(object_Two, "yogiesh", 13);
stored.call(object_One, "Santhosh", 21);
stored.call(object_Three, "Dhrugesh", 10);

//Applay method function argumment aha namma array va than podanum

stored.apply(object_Three, ["santhsh", 31]);

//apply method call bind

const return_Function = stored.bind(object_One, "Santhosh");
return_Function(23);
return_Function(50);
return_Function(31);

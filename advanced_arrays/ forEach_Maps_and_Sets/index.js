// Maps here Working

const hell = new Map([
  [0, "santhosh"],
  [1, "ajay"],
  [2, "vijaya"],
  [3, "murugesan"],
]);

hell.forEach((value, index, object) => {
  console.log(index + 1, value, object);
});

// sets here working

const hell_World = new Set(["santhosh", "ajay", "santhosh", "ajay"]);
hell_World.forEach((value, result, set) => {
  console.log(value, result, set);
});

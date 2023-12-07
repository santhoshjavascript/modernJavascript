//storing fn some variable its called first class function
const sumal_Letters = (letters) => {
  console.log(letters.replace(/ /g, " ").toLowerCase());
};

const big_Letters = (letters) => {
  const [first, ...others] = letters.split(" ");
  console.log(first.toUpperCase(), others.join(" "));
};

//Higher order fn
const transform = (dynamic_String, fn) => {
  return fn(dynamic_String);
};

//value fn passing in argument its callback fn
transform("murugesan my father ", sumal_Letters);
transform("vijya my mother ", big_Letters);

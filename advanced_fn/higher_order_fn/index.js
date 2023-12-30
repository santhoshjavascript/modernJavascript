const sumal_Text = (string) => {
  return string.replace(/ /g, " ").toLowerCase();
};

const big_Text = (string) => {
  const [first, ...others] = string.split(" ");
  //Spreed method again spreed ku namma use pannum pothu athu array va join array pannuthu
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher Order Function
const transform = (string, fn) => {
  console.log(fn(string));
};

//argument ulla erukkra fn aha call back function solluvom after etha higher order fn solluvom
transform(" Hello IM TRYING TO MAKE EVRTHING IN LOWER CASE ", sumal_Text);
transform("world everhing will be okay ", big_Text);


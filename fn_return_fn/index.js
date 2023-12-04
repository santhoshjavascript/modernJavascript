//Main fn retrun a sub fn

const main_Fn = (name_One) => (name_Two) =>
  console.log(`${name_One} ${name_Two}`);

main_Fn("hello")("world");

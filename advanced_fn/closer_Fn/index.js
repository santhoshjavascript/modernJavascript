//Going to seeing Closer EXample


const main_Fn = () => {
  let variable = 10;

  return () => {
    variable++;
    console.log(`${variable} Increasing`);
  };
};

const storing = main_Fn();
storing();
storing();
storing();

console.dir(storing);

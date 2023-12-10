// Closer in deeth Conspet

//Exaple one
let empty_Function;
const main_Function = () => {
  const variable = 100;
  empty_Function = () => {
    console.log(`Im a Closer Function ${variable}`);
  };
};
main_Function();
empty_Function();
console.dir(empty_Function);

//Example Two
const another_Main = () => {
  const another_Variable = 200;
  empty_Function = () => {
    console.log(`Im comming from Another Variable ${another_Variable} `);
  };
};
another_Main();
empty_Function();
console.dir(empty_Function);

// Example Three

const time_Variable = (pepole, waiting_Time) => {
  const persentage = pepole / 3;

  setTimeout(function () {
    console.log(
      `time_Variable function call stack exe ana appram intha setTie out fun exe ai ${persentage} value accesss pannuthu reason closer`
    );

    console.log(
      `over all pepole ${pepole} and waiting time will be a ${waiting_Time}`
    );
  }, waiting_Time * 3);

  console.log(`Please wait for a while ${waiting_Time}`);
};

time_Variable(200, 500);

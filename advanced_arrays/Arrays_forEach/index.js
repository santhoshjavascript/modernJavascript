// For of Looping
const looping = [1, 2, -78, 90, -34, 2, -9, 21, -78];

for (const [index, value] of looping.entries()) {
  value > 0
    ? console.log(`Im Here ${index} and Value ${value}`)
    : console.log(
        `Im Negative Number ${index} and IM nEGATIVE pOINT  ${value}`
      );
}

console.log(
  "----------------------------------------------------------------------------------------"
);

// forEash Method Here

looping.forEach((looping, index, hell) => {
    console.log(hell);
  looping > 0
    ? console.log(`im index ${index} and im Positive  Value ${looping}`)
    : console.log(` im index ${index} and im Negative value ${looping} `);
});

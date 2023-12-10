//Which one you want Take it

const collection_Number = [100, -2, -3, 89, -78, 65, -9, 1];

for (const [i, number] of collection_Number.entries()) {
  if (number > 0) {
    console.log(`${i + 1} Positive number ${number}`);
  } else {
    console.log(`${i + 1} Negative number ${number}`);
  }
}

collection_Number.forEach(function (items, index) {
  if (items > 0) {
    console.log(`${index + 1} Posiive ForEcah ${items}`);
  } else {
    console.log(`${index + 1} Negative forEach ${items}`);
  }
});

// Now Going to so it For Of Loop

const using_ForOf = (item) => {
  containerMovements.innerHTML = " ";
  for (const [index, value] of item.entries()) {
    const type = value > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${index} ${type}</div>
    
      <div class="movements__value">${value}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  }
};

using_ForOf(account1.movements);
accounts.hello = "Santhosh";

console.log(accounts);

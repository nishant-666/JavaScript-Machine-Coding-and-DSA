var maxAmount = function (initialCurrency, pairs1, rates1, pairs2, rates2) {
  const currentCurrency = initialCurrency;

  for (let i = 0; i < pairs1.length; i++) {}
};

console.log(
  maxAmount(
    "EUR",
    [
      ["EUR", "USD"],
      ["USD", "JPY"],
    ],
    [2.0, 3.0],
    [
      ["JPY", "USD"],
      ["USD", "CHF"],
      ["CHF", "EUR"],
    ],
    [4.0, 5.0, 6.0]
  )
);

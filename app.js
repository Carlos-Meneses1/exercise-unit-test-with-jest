// one euro is:
let oneEuroIs = {
  "JPY": 156.5, // japan yen
  "USD": 1.07,  // us dollar
  "GBP": 0.87   // british pound
};
// transformar euro a dolar (EUR > USD)
const fromEuroToDollar = (euroAmount) => {
  return euroAmount * oneEuroIs.USD;
};

// transformar dolar a yen (USD > EUR > JPY)
const fromDollarToYen = (dollarAmount) => {
  const euros = dollarAmount / oneEuroIs.USD;
  return euros * oneEuroIs.JPY;
};

// transformr yen a libra (JPY > EUR > GBP)
const fromYenToPound = (yenAmount) => {
  const euros = yenAmount/oneEuroIs.JPY;
  return euros * oneEuroIs.GBP;
};

module.exports = { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound };



// Currency Converter

const convertToRussianRuble = (usd, rate) => {
  let convertedAmount = usd * rate;
  return convertedAmount.toFixed(2);
}
const dollarAmount = 30;
const currencyRate = 77.541;
console.log(`$${dollarAmount.toFixed(2)} converted into Russian`,
    `Ruble is ₽${convertToRussianRuble(dollarAmount, currencyRate)}`);

const currencyChanger = (sum, startCurrency, finalCurrency) => {
  const exchangeRates = {
    USD: 1,
    RUB: 76,
    EUR: 0.9
  }

  if ((typeof sum !== 'number') || !exchangeRates[startCurrency] || !exchangeRates[finalCurrency]) {
    return null
  } else if (startCurrency === finalCurrency) {
    return sum
  }

  const sumInUSD = sum / exchangeRates[startCurrency];
  const result = sumInUSD * exchangeRates[finalCurrency];

  return result
}

result = currencyChanger(1000, "RUB", "USD")

console.log(result)
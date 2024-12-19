const axios = require('axios');

async function convertCurrency(amount, fromCurrency, toCurrency) {
  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

  try {
    const response = await axios.get(url);
    const rate = response.data.rates[toCurrency];
    const convertedAmount = amount * rate;
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
  } catch (error) {
    console.error('Error converting currency:', error.message);
  }
}

module.exports = convertCurrency;

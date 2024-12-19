const axios = require('axios');
const cheerio = require('cheerio');

async function scrape(url, selector) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const result = $(selector).text();
    console.log(`Content: ${result}`);
  } catch (error) {
    console.error('Error scraping the webpage:', error.message);
  }
}

module.exports = scrape;

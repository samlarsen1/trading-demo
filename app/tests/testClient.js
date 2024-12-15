const TradingClient = require('../src/services/tradingClient');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const apiKey = process.env.TRADING_API_KEY;
const baseUrl = process.env.TRADING_API_URL;
const client = new TradingClient(baseUrl, apiKey);

async function test() {
  try {
    const data = await client.get('/equity/account/cash');
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
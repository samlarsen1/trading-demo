require('dotenv').config();
const TradingClient = require('./tradingClient');

const apiKey = process.env.API_KEY;
const client = new TradingClient(apiKey);

async function test() {
  try {
    const data = await client.get('/some-endpoint'); // Replace with actual endpoint
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
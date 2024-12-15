const axios = require('axios');

class TradingClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.trading212.com';
  }

  async get(endpoint) {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error making GET request:', error);
      throw error;
    }
  }

  async post(endpoint, data) {
    try {
      const response = await axios.post(`${this.baseUrl}${endpoint}`, data, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  // Add more methods as needed for other API endpoints
}

module.exports = TradingClient;
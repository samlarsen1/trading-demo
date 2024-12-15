const axios = require('axios');

class TradingClient {
  constructor(baseUrl, apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Authorization': `${this.apiKey}`
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
          'Authorization': `${this.apiKey}`,
          'Content-Type': 'application/json'
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
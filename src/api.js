// api.js

import axios from 'axios';

class Api {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(url, params = {}) {
    try {
      const response = await this.instance.get(url, { params });
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async post(url, data = {}) {
    try {
      const response = await this.instance.post(url, data);
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async put(url, data = {}) {
    try {
      const response = await this.instance.put(url, data);
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async delete(url) {
    try {
      const response = await this.instance.delete(url);
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  handleApiError(error) {
    // Vous pouvez personnaliser la gestion des erreurs ici
    console.error('API Error:', error);
    throw error;
  }
}

export default Api;

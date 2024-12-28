// lib/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
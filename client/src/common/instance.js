// lib/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Development
  // baseURL: 'https://turf-mern-server.vercel.app/api', //Deployment
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

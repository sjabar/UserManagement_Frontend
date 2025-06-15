// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/', // Your backend URL
});

export default API;

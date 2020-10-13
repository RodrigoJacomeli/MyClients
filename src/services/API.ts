import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL; //API URL
const token = process.env.REACT_APP_TOKEN; //TOKEN API

export const api = axios.create ({
  baseURL,
  headers: {
    'X-API-Key': token
  }
});
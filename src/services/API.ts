import axios from 'axios';

const urlAPI = process.env.REACT_APP_URL_API; //API URL
const tokenAPI = process.env.REACT_APP_TOKEN_API; //TOKEN API

export default axios.create ({
  urlAPI,
  headers: {
    'X-API-Key': tokenAPI
  }
});
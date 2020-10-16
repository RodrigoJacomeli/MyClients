import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
const token = process.env.REACT_APP_TOKEN

export default axios.create({
  baseURL,
  headers: {
    'X-API-Key': token
  }
})
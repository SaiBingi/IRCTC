import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL, // Your backend's API URL
})

export default instance

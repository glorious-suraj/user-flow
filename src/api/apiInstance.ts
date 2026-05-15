import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiInstance;

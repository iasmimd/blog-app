import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-blog-m2.herokuapp.com',
});

export default api;

export {};

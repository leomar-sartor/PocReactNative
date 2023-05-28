import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://f92a-191-242-212-198.sa.ngrok.io/',
});

export default instance;

import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());
const hash = md5(ts + process.env.PUBLIC_KEY + process.env.PRIVATE_KEY)

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: process.env.PUBLIC_KEY,
    hash,
  },
});

export default api;
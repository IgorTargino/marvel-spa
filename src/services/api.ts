import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const ts = Number(new Date());
const hash = md5(ts + PUBLIC_KEY + PRIVATE_KEY)

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  },
});

export default api;
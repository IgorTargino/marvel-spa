import axios from "axios";

export const PUBLIC_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const PRIVATE_KEY = process.env.NEXT_PRIVATE_API_KEY;

const ts = '1622102400599'
const hash = '283ad94187669b5387cff07e908c6e6d'

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  params: {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  },
});

export default api;

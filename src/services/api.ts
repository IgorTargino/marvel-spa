import axios from "axios";
import md5 from "md5";

export const PUBLIC_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const PRIVATE_KEY = process.env.NEXT_PRIVATE_API_KEY;

const ts = Date.now();
const hash = (ts + PRIVATE_KEY + PUBLIC_KEY)

const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  params: {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  },
});

export default api;

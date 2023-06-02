import axios from "axios";

const APIKEY = `${import.meta.env.VITE_API_KEY}`;
const APIURL = "https://api.thecatapi.com/v1/";
export const API = axios.create({
  baseURL: APIURL,
  params: {
    api_key: APIKEY,
  },
});

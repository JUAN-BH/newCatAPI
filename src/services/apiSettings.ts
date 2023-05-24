import axios from "axios";

const APIKEY = "333ac102-97bb-4811-a48c-0164b1756041";
const APIURL = "https://api.thecatapi.com/v1/";
export const API = axios.create({
  baseURL: APIURL,
  params: {
    api_key: APIKEY,
  },
});

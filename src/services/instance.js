import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/?limit=20&offset=20",
  timeout: 1000,
});

export default instance;

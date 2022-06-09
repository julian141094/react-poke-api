import axios from "../instance";

const pokemon = {
  list(nextEnpointUrl = null) {
    try {
      const url = "/pokemon?limit=6&offset=0";
      return axios.get(nextEnpointUrl != null ? nextEnpointUrl : url);
    } catch (error) {
      throw error;
    }
  },
  details(url) {
    try {
      return axios.get(url);
    } catch (error) {
      throw error;
    }
  },
  searchByName(name) {
    try {
      return axios.get(`/pokemon/${name}`);
    } catch (error) {
      console.log("Error", error.response);
      throw error;
    }
  },
};

export default pokemon;

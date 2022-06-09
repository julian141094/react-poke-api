import axios from "../instance";

// All pokemon services
const pokemon = {
  /**
   * @name list
   * @description Get all pokemons 6 by 6
   * @param string | null nextEnpointUrl
   * @returns Promisse
   */
  list(nextEnpointUrl = null) {
    try {
      const url = "/pokemon?limit=6&offset=0";
      return axios.get(nextEnpointUrl != null ? nextEnpointUrl : url);
    } catch (error) {
      throw error;
    }
  },
  /**
   * @name details
   * @description Get all data of one pokemon
   * @param string url
   * @returns Promisse
   */
  details(url) {
    try {
      return axios.get(url);
    } catch (error) {
      throw error;
    }
  },
  /**
   * @name searchByName
   * @description Get all data of one pokemon or id
   * @param string name
   * @returns Promisse
   */
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

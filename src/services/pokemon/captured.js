import { includes, pull } from "lodash";
import { CAPTURED_STORAGE } from "../../utils/constants";

/**
 * @name getPokemonsFavoriteApi
 * @description Get all pokemons Captured
 * @returns Array
 */
export async function getPokemonsFavoriteApi() {
  try {
    const response = await localStorage.getItem(CAPTURED_STORAGE);
    return JSON.parse(response || "[]");
    // return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

/**
 * @name addPokemonFavoriteApi
 * @description Add a pokemons Captured
 * @param string id
 * @returns Array
 */
export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await localStorage.setItem(CAPTURED_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

/**
 * @name isPokemonFavoriteApi
 * @description Check if a pokemons Captured
 * @param string id
 * @returns Array
 */
export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonsFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

/**
 * @name removePokemonFavoriteApi
 * @description Delete a pokemons Captured
 * @param string id
 * @returns Array
 */
export async function removePokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    const newFavorites = pull(favorites, id);
    await localStorage.setItem(CAPTURED_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}

const captured = {
  getPokemonsFavoriteApi,
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
};

export default captured;

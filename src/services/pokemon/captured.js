import { includes, pull } from "lodash";
import { CAPTURED_STORAGE } from "../../utils/constants";

export async function getPokemonsFavoriteApi() {
  try {
    const response = await localStorage.getItem(CAPTURED_STORAGE);
    return JSON.parse(response || "[]");
    // return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorites = await getPokemonsFavoriteApi();
    favorites.push(id);
    await localStorage.setItem(CAPTURED_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonsFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

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

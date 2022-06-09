import { useEffect, useState } from "react";
import services from "../services";

/**
 * @name usePokemonData
 * @description Custom hook to get all the big logic outside the component
 * @returns {getSearch, getData, getCaptured, listCaptured, seeCaptured, loading, nextUrl, list }
 * All functions and variables needed to run components
 */
export default function usePokemonData() {
  const [list, setList] = useState([]);
  const [listCaptured, setListCaptured] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [seeCaptured, setSeeCaptured] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const { data } = await services.pokemon.list(nextUrl);
    setNextUrl(data.next.split("/v2")[1]);
    const arr = [];
    for (let index = 0; index < data.results.length; index++) {
      const element = data.results[index];
      let qry = await services.pokemon.details(element.url);
      arr.push({
        ...element,
        id: element.url.split("/")[6],
        url: qry.data.sprites.other["official-artwork"].front_default,
      });
    }
    setList([...list, ...arr]);
    setLoading(false);
  };

  const getCaptured = async () => {
    setLoading(true);
    const captured = await services.captured.getPokemonsFavoriteApi();
    const capturedData = [];
    for (let index = 0; index < captured.length; index++) {
      const element = captured[index];
      const { data } = await services.pokemon.searchByName(element);
      capturedData.push({
        name: data.name,
        id: data.id,
        url: data.sprites.other["official-artwork"].front_default,
      });
    }
    setListCaptured(capturedData);
    setSeeCaptured((prev) => !prev);
    setLoading(false);
  };

  const getSearch = async (word) => {
    setLoading(true);
    setNextUrl(null);
    if (word !== "") {
      try {
        const { data } = await services.pokemon.searchByName(word);
        setList([
          {
            name: data.name,
            id: data.id,
            url: data.sprites.other["official-artwork"].front_default,
          },
        ]);
      } catch (error) {
        console.log(`Error ${word}`, error.response.data);
        setList([]);
      }
    } else {
      await getData();
    }
    setLoading(false);
  };

  return {
    getSearch,
    getData,
    getCaptured,
    listCaptured,
    seeCaptured,
    loading,
    nextUrl,
    list,
  };
}

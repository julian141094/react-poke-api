import React from "react";
import List from "../../components/listPokemons/index";
import Controls from "../../components/controls";
import Filter from "../../components/filter";
import usePokemonData from "../../hooks/usePokemonData";

/**
 * @name Pokemon
 * @description Page with all the components to show pokemons and capture their
 * @returns JSX Element
 */
const Pokemon = () => {
  const {
    list,
    getSearch,
    getData,
    getCaptured,
    listCaptured,
    seeCaptured,
    loading,
    nextUrl,
  } = usePokemonData();

  return (
    <>
      <Filter loading={loading} getSearch={getSearch} />
      <List pokemons={seeCaptured ? listCaptured : list} loading={loading} />
      <Controls
        loadPokemons={getData}
        isNext={nextUrl}
        loading={loading}
        seeListCaptured={seeCaptured}
        loadCaptured={getCaptured}
      />
    </>
  );
};

export default Pokemon;

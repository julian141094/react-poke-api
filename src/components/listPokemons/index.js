import React from "react";
import CustomContainer from "../basics/container";
import PokemonCard from "../cardPokemon";
import Text from "../basics/text";

/**
 * @name List
 * @description List all pokemons an array
 * @param array pokemons
 * @param bool loading
 * @returns JSX Element
 */
const List = ({ pokemons, loading }) => {
  return (
    <CustomContainer>
      {loading ? (
        <Text text="Loading..." />
      ) : (
        <>
          {pokemons.length > 0 ? (
            pokemons.map((item, index) => (
              <PokemonCard item={item} key={`${index}-poke-card-${item.id}`} />
            ))
          ) : (
            <Text />
          )}
        </>
      )}
    </CustomContainer>
  );
};

export default List;

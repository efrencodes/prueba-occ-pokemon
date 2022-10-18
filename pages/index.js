import { useState } from "react";
import SearchPokemon from "../components/searchPokemon";
import Pagination from "../components/pagination";
import ListPokemon from "../components/listPokemon";
import { POKEMONS_LIMIT, POKEMONS_OFFSET } from "../utils/constants";

export const getServerSideProps = async (context) => {
  let { offset, limit } = context.query;
  offset = offset || POKEMONS_OFFSET;
  limit = limit || POKEMONS_LIMIT;
  const data = await fetch(
    `${process.env.API_URL_POKEMON}?limit=${limit}&offset=${offset}`,
  ).then((response) => response.json());

  const { results, next, previous } = data;

  const pokemonsList = await Promise.all(
    results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    }),
  );

  return {
    props: {
      pokemons: {
        next,
        previous,
        results: pokemonsList,
      },
    },
  };
};

export default function Home({ pokemons }) {
  const [pokemonInput, setPokemonInput] = useState("");
  const [searchPokemons, setSearchPokemons] = useState([]);
  const onHandleInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setPokemonInput(lowerCase);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL_POKEMON}/${pokemonInput}`,
    ).then((response) => response.json());
    setSearchPokemons([data]);
  };

  return (
    <>
      <SearchPokemon
        pokemonInput={pokemonInput}
        onHandleInput={onHandleInput}
        onSubmit={onSubmit}
      />

      {searchPokemons.length > 0 && (
        <ListPokemon
          title={`Results for ${pokemonInput}`}
          pokemons={searchPokemons}
        />
      )}

      <ListPokemon title="All pokemons" pokemons={pokemons?.results} />

      <Pagination previous={pokemons?.previous} next={pokemons?.next} />
    </>
  );
}

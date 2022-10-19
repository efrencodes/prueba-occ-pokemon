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
  const [error, setError] = useState(false);
  const onHandleInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setPokemonInput(lowerCase);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (pokemonInput !== "") {
      setError(false);
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_URL_POKEMON}/${pokemonInput}`,
      ).then((response) => {
        if (response.status === 404) {
          setError(true);
          return;
        }
        return response.json();
      });
      setSearchPokemons([data]);
    }
  };

  return (
    <>
      <SearchPokemon
        pokemonInput={pokemonInput}
        onHandleInput={onHandleInput}
        onSubmit={onSubmit}
      />

      {searchPokemons.length > 0 && !error && (
        <ListPokemon
          title={`Results for ${pokemonInput}`}
          pokemons={searchPokemons}
        />
      )}

      {error && <h3 className="nes-text">Not found pokemon</h3>}

      <ListPokemon title="All pokemons" pokemons={pokemons?.results} />

      <Pagination previous={pokemons?.previous} next={pokemons?.next} />
    </>
  );
}

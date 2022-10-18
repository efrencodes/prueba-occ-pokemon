import { useState } from "react";
import CardPokemon from "../components/cardPokemon";
import SearchPokemon from "../components/searchPokemon";
import Pagination from "../components/pagination";
import styles from "../styles/Home.module.css";
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
      const res = response.json();
      return res;
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
  const onHandleInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setPokemonInput(lowerCase);
  };

  return (
    <>
      <SearchPokemon
        pokemonInput={pokemonInput}
        onHandleInput={onHandleInput}
      />

      <ul className={styles.listPokemons}>
        {pokemons?.results
          ?.filter((data) => {
            if (pokemonInput === "") return data;
            else if (data.name.toLowerCase().includes(pokemonInput))
              return data;
          })
          .map((pokemon, index) => (
            <li key={index}>
              <CardPokemon pokemon={pokemon} />
            </li>
          ))}
      </ul>

      <Pagination previous={pokemons?.previous} next={pokemons?.next} />
    </>
  );
}

import { useState } from "react";
import CardPokemon from "../components/cardPokemon";
import SearchPokemon from "../components/searchPokemon";
import styles from "../styles/Home.module.css";
import { POKEMONS_LIMIT } from "../utils/constants";

export const getStaticProps = async () => {
  const data = await fetch(
    `${process.env.API_URL_POKEMON}?limit=${POKEMONS_LIMIT}&offset=0`,
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
      <h1 className="nes-text is-primary">
        <i className="nes-ash"></i>
      </h1>

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

      <div className={styles.containerButton}>
        <button type="button" className="nes-btn">
          Previous
        </button>
        <button type="button" className="nes-btn is-primary">
          Next
        </button>
      </div>
    </>
  );
}

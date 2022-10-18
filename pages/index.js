import { useState } from "react";
import CardPokemon from "../components/cardPokemon";
import SearchPokemon from "../components/searchPokemon";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const data = await fetch(
    `${process.env.API_URL_POKEMON}?limit=10000&offset=0`,
  ).then((response) => response.json());

  return {
    props: {
      pokemons: data,
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
        <i class="nes-ash"></i>
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
              <CardPokemon name={pokemon.name} />
            </li>
          ))}
      </ul>
    </>
  );
}

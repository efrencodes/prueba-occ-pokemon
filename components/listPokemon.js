import React from "react";
import CardPokemon from "./cardPokemon";
import styles from "../styles/listPokemon.module.css";

const ListPokemon = ({ title, pokemons }) => {
  return (
    <div className={styles.containerList}>
      <h3 className="nes-text">{title}</h3>
      <ul className={styles.listPokemon}>
        {pokemons?.map((pokemon, index) => (
          <li key={index}>
            <CardPokemon pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPokemon;

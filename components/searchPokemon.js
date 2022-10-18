import React from "react";
import styles from "../styles/searchPokemon.module.css";
const SearchPokemon = ({ pokemonInput, onHandleInput, onSubmit }) => {
  return (
    <form className={styles.containerSearch} onSubmit={onSubmit}>
      <div className="nes-field">
        <label for="name_field">Search your favorite pokemon.</label>
        <input
          type="text"
          id="name_field"
          className="nes-input"
          placeholder="By name or number."
          value={pokemonInput}
          onChange={onHandleInput}
        />
      </div>
      <button type="submit" className="nes-btn is-success">
        Search
      </button>
    </form>
  );
};

export default SearchPokemon;

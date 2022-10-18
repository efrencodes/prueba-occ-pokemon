const SearchPokemon = ({ pokemonInput, onHandleInput }) => {
  return (
    <div className="nes-field">
      <label for="name_field">Search your favorite pokemon.</label>
      <input
        type="text"
        id="name_field"
        className="nes-input"
        value={pokemonInput}
        onChange={onHandleInput}
      />
    </div>
  );
};

export default SearchPokemon;

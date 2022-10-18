const SearchPokemon = ({ pokemonInput, onHandleInput }) => {
  return (
    <div class="nes-field">
      <label for="name_field">Search your favorite pokemon.</label>
      <input
        type="text"
        id="name_field"
        class="nes-input"
        value={pokemonInput}
        onChange={onHandleInput}
      />
    </div>
  );
};

export default SearchPokemon;

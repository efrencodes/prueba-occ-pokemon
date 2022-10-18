export const formatIdPokemon = (id) => {
  if (id < 10) return `00${id}`;
  if (id < 100) return `0${id}`;
  return id;
};

export const getPokemonImage = (pokemonData) => {
  const image =
    pokemonData.sprites.other.dream_world.front_default ||
    pokemonData.sprites.front_default;
  return image;
};

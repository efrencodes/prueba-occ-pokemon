import Link from "next/link";
import Image from "next/image";
import { formatIdPokemon, getPokemonImage } from "../utils/utils";

const CardPokemon = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div
        className={`nes-container with-title is-rounded ${pokemon?.types[0]?.type?.name}`}
      >
        <p className="title">{`#${formatIdPokemon(pokemon.id)}`}</p>
        <Image
          src={getPokemonImage(pokemon)}
          alt={pokemon.name}
          width={150}
          height={150}
        />
        <p className="nes-text is-warning">{pokemon.name.toUpperCase()}</p>
      </div>
    </Link>
  );
};

export default CardPokemon;

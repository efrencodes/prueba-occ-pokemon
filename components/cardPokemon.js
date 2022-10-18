import Link from "next/link";

const CardPokemon = ({ name }) => {
  return (
    <div className="nes-container is-rounded">
      <h2 className="nes-text is-success">{name.toUpperCase()}</h2>
      <Link href={`/pokemon/${name}`}>
        <a className="nes-btn is-warning">See pokemon</a>
      </Link>
    </div>
  );
};

export default CardPokemon;

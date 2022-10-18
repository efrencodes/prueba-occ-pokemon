import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const data = await fetch(
    `${process.env.API_URL_POKEMON}?limit=20&offset=0`,
  ).then((response) => response.json());
  const paths = data?.results?.map((pokemon) => ({
    params: { slug: pokemon.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pokemon = params.slug;
  const data = await fetch(`${process.env.API_URL_POKEMON}/${pokemon}`).then(
    (response) => response.json(),
  );
  return {
    props: {
      pokemon: data,
    },
  };
};

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <div class="nes-container with-title is-centered">
        <p class="title">{`#${pokemon.id} ${pokemon.name.toUpperCase()}`}</p>
        <Image
          src={pokemon?.sprites?.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
        />
        <p className="nes-text">
          Height: <span className="nes-text is-error">{pokemon.height}</span>
        </p>
        <p className="nes-text">
          Weight: <span className="nes-text is-error">{pokemon.weight} kg</span>
        </p>
        <p className="nes-text">
          Base experience:{" "}
          <span className="nes-text is-error">{pokemon.base_experience}</span>
        </p>
        <p className="nes-text">Abilities:</p>
        <div className={styles.container}>
          {pokemon?.abilities.map((abilitie, index) => (
            <button key={index} type="button" class="nes-btn is-error">
              {abilitie?.ability?.name}
            </button>
          ))}
        </div>
        <p className="nes-text">Type:</p>
        <div className={styles.container}>
          {pokemon?.types.map((type, index) => (
            <button key={index} type="button" class="nes-btn is-success">
              {type?.type?.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokemon;

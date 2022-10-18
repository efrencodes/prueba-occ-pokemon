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
    <main>
      <h1>Detalle de pokemon</h1>
      {pokemon.name}
    </main>
  );
};

export default Pokemon;

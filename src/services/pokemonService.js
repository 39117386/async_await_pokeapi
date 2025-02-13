export const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const { results } = await response.json();
    return Promise.all(
      results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
    );
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return [];
  }
};

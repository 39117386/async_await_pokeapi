import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => (
  <div className="flex flex-wrap gap-4 justify-center mt-4">
    {pokemons.map(({ id, name, sprites }) => (
      <PokemonCard key={id} name={name} sprites={sprites} />
    ))}
  </div>
);

export default PokemonList;

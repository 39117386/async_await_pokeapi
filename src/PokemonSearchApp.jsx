import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import { fetchPokemons } from "./services/pokemonService";

const PokemonSearchApp = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      const fetchedPokemons = await fetchPokemons();
      setPokemons(fetchedPokemons);
      setLoading(false);
    })();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5 font-sans text-center">
      <h1 className="text-2xl font-bold mb-4">Buscador Pokémon</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <div className="mt-4 text-lg">Loading...</div>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
};

export default PokemonSearchApp;

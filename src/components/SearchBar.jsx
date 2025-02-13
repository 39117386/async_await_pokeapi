const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Buscar Pokémon..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="p-2 text-lg w-full max-w-md border border-gray-300 rounded"
  />
);

export default SearchBar;

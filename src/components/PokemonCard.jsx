const PokemonCard = ({ name, sprites }) => (
  <div className="border rounded p-3 text-center w-36">
    <h3 className="capitalize font-semibold">{name}</h3>
    <img src={sprites.front_default} alt={name} className="w-24 h-24 mx-auto" />
  </div>
);

export default PokemonCard;

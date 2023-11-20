function PokemonCard(props) {

  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <>
      <div className="pokemonCard">
        <h3 className="pokeName">Name:{props.name}</h3>
        <img src={pokemonImg} alt="pokemon" />
        <p>Type: {props.type}</p>
        <p>Exp: {props.exp}</p>
      </div>
    </>
  );
}

export default PokemonCard;

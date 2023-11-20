import PokemonCard from "./PokemonCard";

function Pokemon({ total, resultMessage, resultColor, pokefor }) {
  return (
    <>
      <h4 className="total">Total Experience: {total}</h4>
      <h3 className="total" style={{ color: resultColor }}>
        {resultMessage}
      </h3>

      <div className="pokemon">
        {pokefor.map((pokeInfo) => (
          <PokemonCard
            key={pokeInfo.id}
            id={pokeInfo.id}
            name={pokeInfo.name}
            type={pokeInfo.type}
            exp={pokeInfo.base_experience}
          />
        ))}
      </div>
    </>
  );
}

export default Pokemon;

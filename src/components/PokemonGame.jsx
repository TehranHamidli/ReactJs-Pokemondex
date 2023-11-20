import Pokemon from "./Pokemon";
import Title from "./Title";
const pokemonInfo = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

let pokeList1 = [];
let pokeList2 = [...pokemonInfo];

for (let i = 0; i < pokeList2.length; i++) {
  const randomPoke = Math.floor(Math.random() * pokeList2.length);
  const randPokemon = pokeList2.splice(randomPoke, 1)[0];
  pokeList1.push(randPokemon);
}

let exp1 = pokeList1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
let exp2 = pokeList2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

let resultMessage1;
let resultColor1;

if (exp1 > exp2) {
  resultMessage1 = "Winner!";
  resultColor1 = "green";
} else if (exp1 < exp2) {
  resultMessage1 = "Losses!";
  resultColor1 = "red";
}

let resultMessage2;
let resultColor2;

if (exp2 > exp1) {
  resultMessage2 = "Winner!";
  resultColor2 = "green";
} else if (exp2 < exp1) {
  resultMessage2 = "Losses!";
  resultColor2 = "red";
}

function PokemonGame() {
  return (
    <>
      <div className="pokemonGame">
        <Title />

        <Pokemon
          pokefor={pokeList1}
          total={exp1}
          resultMessage={resultMessage1}
          resultColor={resultColor1}
        />
        <Pokemon
          pokefor={pokeList2}
          total={exp2}
          resultMessage={resultMessage2}
          resultColor={resultColor2}
        />
      </div>
    </>
  );
}

export default PokemonGame;

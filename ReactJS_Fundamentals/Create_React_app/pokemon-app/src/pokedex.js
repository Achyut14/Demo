
import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon = [], isWinner, exp }) { // Destructuring with default values
  let winMessage = null;
  if (isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemon.length > 0 && pokemon.map(p => ( // Check if pokemon is an array and not empty
          <Pokecard
            key={p.id} // Added key for React list rendering
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;

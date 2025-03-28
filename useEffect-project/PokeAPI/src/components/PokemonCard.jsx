import React from 'react';
import PokemonStats from './PokemonStats';

const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>
      <div className="pokemon-details">
        <div className="pokemon-image-container">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default} 
            alt={pokemon.name} 
            className="pokemon-image"
          />
        </div>
        <div className="pokemon-info">
          <div className="pokemon-types">
            {pokemon.types.map((type) => (
              <span 
                key={type.type.name} 
                className={`type ${type.type.name}`}
              >
                {type.type.name.toUpperCase()}
              </span>
            ))}
          </div>
          
          <div className="pokemon-abilities">
            <h3>Habilidades:</h3>
            {pokemon.abilities.map((ability) => (
              <span key={ability.ability.name} className="ability">
                {ability.ability.name.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="pokemon-basic-info">
            <p>Altura: {(pokemon.height / 10).toFixed(1)} m</p>
            <p>Peso: {(pokemon.weight / 10).toFixed(1)} kg</p>
          </div>

          <PokemonStats stats={pokemon.stats} />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
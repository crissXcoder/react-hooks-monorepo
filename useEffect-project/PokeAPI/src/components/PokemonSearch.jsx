import React, { useState } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import PokemonCard from './PokemonCard';
import '../styles/PokemonSearch.css';

const PokemonSearch = () => {
  const { 
    pokemon, 
    pokemonList, 
    error, 
    loading, 
    searchPokemon 
  } = usePokemonContext();
  
  const [inputQuery, setInputQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputQuery.trim()) {
      searchPokemon(inputQuery);
    }
  };

  return (
    <div className="pokemon-search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          list="pokemon-list"
          placeholder="Busca un Pokémon por nombre o número"
          className="search-input"
        />
        <datalist id="pokemon-list">
          {pokemonList.map((name) => (
            <option key={name} value={name} />
          ))}
        </datalist>
        <button 
          type="submit" 
          className="search-button" 
          disabled={loading}
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading && <div className="loading-spinner">Cargando...</div>}

      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
};

export default PokemonSearch;
import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchPokemon, fetchPokemonList } from '../services/pokemonApi';
import { saveLastPokemon, getLastPokemon } from '../utils/localStorage';

// Crear el contexto
const PokemonContext = createContext();

// Proveedor del contexto
export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastSearchedPokemon, setLastSearchedPokemon] = useState(null);

  // Cargar lista de Pokémon y último Pokémon buscado al inicio
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Cargar lista de Pokémon
        const list = await fetchPokemonList(1000);
        setPokemonList(list);

        // Cargar último Pokémon buscado
        const lastPokemonName = getLastPokemon();
        if (lastPokemonName) {
          await searchPokemon(lastPokemonName);
        }
      } catch (err) {
        setError('Error al cargar datos iniciales');
      }
    };

    loadInitialData();
  }, []);

  // Función para buscar Pokémon
  const searchPokemon = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchPokemon(query.toLowerCase());
      setPokemon(data);
      setLastSearchedPokemon(data);
      
      // Guardar en localStorage
      saveLastPokemon(data.name);
      
      return data;
    } catch (err) {
      setError(`Pokémon ${query} no encontrado`);
      setPokemon(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Función para limpiar el estado
  const clearPokemon = () => {
    setPokemon(null);
    setError(null);
  };

  // Valor del contexto
  const contextValue = {
    pokemon,
    pokemonList,
    error,
    loading,
    lastSearchedPokemon,
    searchPokemon,
    clearPokemon,
    setPokemon
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  
  if (!context) {
    throw new Error('usePokemonContext debe ser usado dentro de un PokemonProvider');
  }
  
  return context;
};
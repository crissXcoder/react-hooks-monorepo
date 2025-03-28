import { useState, useEffect } from 'react';
import { fetchPokemon, fetchPokemonList } from '../services/pokemonApi';
import { saveLastPokemon, getLastPokemon } from '../utils/localStorage';

export const usePokemonSearch = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadLastPokemon = async () => {
      const lastPokemon = getLastPokemon();
      if (lastPokemon) {
        try {
          const data = await fetchPokemon(lastPokemon);
          setPokemon(data);
        } catch (err) {
          setError('No se pudo cargar el último Pokémon');
        }
      }
    };

    const loadPokemonList = async () => {
      try {
        const list = await fetchPokemonList();
        setPokemonList(list);
      } catch (err) {
        console.error('Error cargando lista de Pokémon');
      }
    };

    loadLastPokemon();
    loadPokemonList();
  }, []);

  const searchPokemon = async (searchQuery) => {
    setQuery(searchQuery);
    setError(null);

    try {
      const data = await fetchPokemon(searchQuery);
      setPokemon(data);
      saveLastPokemon(data.name);
    } catch (err) {
      setError(`Pokémon ${searchQuery} no encontrado`);
      setPokemon(null);
    }
  };

  return { pokemon, error, pokemonList, query, searchPokemon };
};
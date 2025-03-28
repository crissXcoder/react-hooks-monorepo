import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/${query.toLowerCase()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};

export const fetchPokemonList = async (limit = 1000) => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=${limit}`);
    return response.data.results.map(pokemon => pokemon.name);
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};
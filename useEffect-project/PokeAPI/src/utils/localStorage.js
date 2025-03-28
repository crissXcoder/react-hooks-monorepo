export const saveLastPokemon = (pokemonName) => {
    try {
      localStorage.setItem('lastPokemon', pokemonName);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  };
  
  export const getLastPokemon = () => {
    try {
      return localStorage.getItem('lastPokemon');
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  };
import React from 'react';
import { PokemonProvider } from './context/PokemonContext';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonSearch />
      </div>
    </PokemonProvider>
  );
}

export default App;
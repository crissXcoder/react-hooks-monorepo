import React from 'react';
import { ColorGenerator } from './components/ColorGenerator';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Color Generator</h1>
      <ColorGenerator />
    </div>
  );
}

export default App;
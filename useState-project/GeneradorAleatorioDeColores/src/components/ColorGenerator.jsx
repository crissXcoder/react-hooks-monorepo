import React from 'react';
import { useColorGenerator } from '../hooks/useColorGenerator';
import './ColorGenerator.css';

export function ColorGenerator() {
  const { color, changeColor } = useColorGenerator();

  return (
    <div className="color-generator-container">
      <div 
        className="color-display" 
        style={{ backgroundColor: color }}
      >
        <p>{color}</p>
      </div>
      <button 
        className="generate-button" 
        onClick={changeColor}
      >
        Generate Color
      </button>
    </div>
  );
}
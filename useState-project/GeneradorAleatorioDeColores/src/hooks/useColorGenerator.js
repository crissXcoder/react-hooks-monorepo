import { useState } from 'react';

export function useColorGenerator() {
  // Generate a random hex color
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  };

  // Initialize state with a random color
  const [color, setColor] = useState(generateRandomColor());

  // Function to change color
  const changeColor = () => {
    setColor(generateRandomColor());
  };

  return { color, changeColor };
}
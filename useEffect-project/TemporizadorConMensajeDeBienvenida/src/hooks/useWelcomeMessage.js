import { useState, useEffect } from 'react';

export function useWelcomeMessage() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // Solo se ejecuta una vez

  return { showMessage };
}
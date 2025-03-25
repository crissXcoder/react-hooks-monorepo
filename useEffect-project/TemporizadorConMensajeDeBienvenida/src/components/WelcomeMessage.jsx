import React from 'react';
import { useWelcomeMessage } from '../hooks/useWelcomeMessage';

export function WelcomeMessage() {
  const { showMessage } = useWelcomeMessage();

  return (
    <>
      {showMessage && (
        <div className="welcome-message-container">
          <div className="welcome-message">
            <h2>¡Bienvenido!</h2>
            <p>Gracias por visitar nuestra aplicación.</p>
          </div>
        </div>
      )}
    </>
  );
}
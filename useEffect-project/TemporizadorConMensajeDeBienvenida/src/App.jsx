import React from 'react';
import { WelcomeMessage } from './components/WelcomeMessage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <WelcomeMessage />
      <main>
        <h1>Main Content</h1>
        <p>This is the main content of the application.</p>
      </main>
    </div>
  );
}

export default App;
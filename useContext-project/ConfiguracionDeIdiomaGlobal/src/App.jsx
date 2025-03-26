import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { LanguageContent } from './components/LanguageContent';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <LanguageSelector />
        <LanguageContent />
      </div>
    </LanguageProvider>
  );
}

export default App;
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSelector() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button 
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => toggleLanguage('es')}
      >
        Español
      </button>
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => toggleLanguage('en')}
      >
        English
      </button>
    </div>
  );
}
import React, { createContext, useState, useContext } from 'react';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  // Function to toggle language
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  // Provide context value
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  return useContext(LanguageContext);
}
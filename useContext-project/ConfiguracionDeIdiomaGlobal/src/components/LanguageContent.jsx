import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const content = {
  es: {
    title: 'Bienvenido a la Aplicación',
    description: 'Esta es una aplicación de demostración para cambiar idiomas usando Context.',
    feature1: 'Característica 1: Selector de Idioma',
    feature2: 'Característica 2: Contexto Global'
  },
  en: {
    title: 'Welcome to the Application',
    description: 'This is a demo application for changing languages using Context.',
    feature1: 'Feature 1: Language Selector',
    feature2: 'Feature 2: Global Context'
  }
};

export function LanguageContent() {
  const { language } = useLanguage();

  return (
    <div className="language-content">
      <h1>{content[language].title}</h1>
      <p>{content[language].description}</p>
      <ul>
        <li>{content[language].feature1}</li>
        <li>{content[language].feature2}</li>
      </ul>
    </div>
  );
}
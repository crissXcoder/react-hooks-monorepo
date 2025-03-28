// src/App.jsx
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskFilter } from './components/TaskFilter';
import './styles/GlobalStyles.css';

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          🎯 Task Master
        </h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
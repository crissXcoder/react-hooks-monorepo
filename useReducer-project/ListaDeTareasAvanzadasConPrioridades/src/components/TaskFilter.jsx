// src/components/TaskFilter.jsx
import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../styles/GlobalStyles.css';

export function TaskFilter() {
  const { filter, setFilter, tasks } = useTaskContext();

  const getTaskCount = (filterType) => {
    switch(filterType) {
      case 'active': 
        return tasks.filter(task => !task.completed).length;
      case 'completed': 
        return tasks.filter(task => task.completed).length;
      default: 
        return tasks.length;
    }
  };

  return (
    <div className="task-filter">
      <button 
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All ({getTaskCount('all')})
      </button>
      <button 
        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        onClick={() => setFilter('active')}
      >
        Active ({getTaskCount('active')})
      </button>
      <button 
        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Completed ({getTaskCount('completed')})
      </button>
    </div>
  );
}
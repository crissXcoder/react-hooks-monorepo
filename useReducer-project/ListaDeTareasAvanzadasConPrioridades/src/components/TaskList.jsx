// src/components/TaskList.jsx
import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../styles/TaskList.css';

export function TaskList() {
  const { tasks, removeTask, toggleTask, changePriority } = useTaskContext();

  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks found. Add a new task!</p>
      ) : (
        tasks.map(task => (
          <div 
            key={task.id} 
            className={`task-item ${task.completed ? 'completed' : ''} ${getPriorityClass(task.priority)}`}
          >
            <div className="task-content">
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="task-checkbox"
              />
              <span className="task-title">{task.title}</span>
            </div>
            <div className="task-actions">
              <select 
                value={task.priority} 
                onChange={(e) => changePriority(task.id, e.target.value)}
                className="priority-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button 
                onClick={() => removeTask(task.id)} 
                className="remove-task-btn"
              >
                🗑️
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
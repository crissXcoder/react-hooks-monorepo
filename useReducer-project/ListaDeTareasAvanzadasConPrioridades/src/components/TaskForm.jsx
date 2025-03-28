import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import '../styles/TaskForm.css';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ 
      title, 
      priority 
    });

    // Reset form
    setTitle('');
    setPriority('medium');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="task-form"
    >
      <div className="input-group">
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-select"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="add-task-btn">
          Add Task
        </button>
      </div>
    </form>
  );
}
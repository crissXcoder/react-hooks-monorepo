import React, { memo } from 'react';
import { useTodoList } from '../hooks/useTodoList';
import { TodoInput } from './TodoInput';

export function TodoList() {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <TodoInput onAddTodo={addTodo} />
      {todos.length === 0 ? (
        <p className="empty-list-message">No tasks yet. Add a new task!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onRemove={removeTodo} 
              onToggle={toggleTodo} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}

// Memoized Todo Item Component
const TodoItem = memo(({ todo, onRemove, onToggle }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button 
        onClick={() => onRemove(todo.id)} 
        className="remove-todo-btn"
      >
        Delete
      </button>
    </li>
  );
});
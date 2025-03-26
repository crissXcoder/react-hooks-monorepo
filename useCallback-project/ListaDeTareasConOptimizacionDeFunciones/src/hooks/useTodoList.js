import { useState, useCallback } from 'react';

export function useTodoList() {
  const [todos, setTodos] = useState([]);

  // Funcion memorizada para agregar una tarea
  const addTodo = useCallback((text) => {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  // Funcion memorizada para eliminar una tarea
  const removeTodo = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  // Funcion memorizada para cambiar el estado de completado de una tarea
  const toggleTodo = useCallback((id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return { todos, addTodo, removeTodo, toggleTodo };
}
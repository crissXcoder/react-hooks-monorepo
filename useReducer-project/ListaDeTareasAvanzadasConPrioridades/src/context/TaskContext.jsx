// src/context/TaskContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { taskReducer, initialState, ACTION_TYPES } from '../reducers/taskReducer';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [storedTasks, setStoredTasks] = useLocalStorage('tasks', []);

  // Sync with localStorage
  useEffect(() => {
    if (storedTasks.length) {
      dispatch({ 
        type: 'INIT_TASKS', 
        payload: storedTasks 
      });
    }
  }, []);

  useEffect(() => {
    setStoredTasks(state.tasks);
  }, [state.tasks]);

  const addTask = (task) => {
    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      payload: {
        ...task,
        id: Date.now(),
        completed: false
      }
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: ACTION_TYPES.REMOVE_TASK,
      payload: id
    });
  };

  const toggleTask = (id) => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_TASK,
      payload: id
    });
  };

  const changePriority = (id, priority) => {
    dispatch({
      type: ACTION_TYPES.CHANGE_PRIORITY,
      payload: { id, priority }
    });
  };

  const setFilter = (filter) => {
    dispatch({
      type: ACTION_TYPES.SET_FILTER,
      payload: filter
    });
  };

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  return (
    <TaskContext.Provider value={{
      tasks: filteredTasks,
      addTask,
      removeTask,
      toggleTask,
      changePriority,
      setFilter,
      filter: state.filter
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
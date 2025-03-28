import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';
import { taskReducer, initialState, ACTION_TYPES } from '../reducers/taskReducer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { 
  generateTaskId, 
  isValidTask, 
  sortTasks, 
  filterTasks, 
  getTaskStats, 
  searchTasks 
} from '../utils/taskHelpers';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [storedTasks, setStoredTasks] = useLocalStorage('tasks', []);

  // Sync stored tasks with initial state
  useEffect(() => {
    if (storedTasks.length) {
      dispatch({ 
        type: 'INIT_TASKS', 
        payload: storedTasks 
      });
    }
  }, []);

  // Update localStorage when tasks change
  useEffect(() => {
    setStoredTasks(state.tasks);
  }, [state.tasks]);

  // Task Management Actions
  const addTask = (taskData) => {
    // Validate task before adding
    if (!isValidTask(taskData)) {
      console.warn('Invalid task data');
      return false;
    }

    const newTask = {
      ...taskData,
      id: generateTaskId(),
      createdAt: Date.now(),
      completed: false
    };

    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      payload: newTask
    });

    return true;
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

  // Memoized and processed tasks
  const processedTasks = useMemo(() => {
    // Apply filtering
    const filteredTasks = filterTasks(state.tasks, state.filter);
    
    // Sort tasks
    const sortedTasks = sortTasks(filteredTasks, 'priority');

    return sortedTasks;
  }, [state.tasks, state.filter]);

  // Additional computed values
  const taskStats = useMemo(() => {
    return getTaskStats(state.tasks);
  }, [state.tasks]);

  // Search functionality
  const searchTasksByTitle = (searchTerm) => {
    return searchTasks(processedTasks, searchTerm);
  };

  // Context value with all methods and computed properties
  const contextValue = {
    // Tasks and filtering
    tasks: processedTasks,
    allTasks: state.tasks,
    filter: state.filter,

    // Task management actions
    addTask,
    removeTask,
    toggleTask,
    changePriority,
    setFilter,

    // Additional utilities
    searchTasks: searchTasksByTitle,
    taskStats,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook for using the TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
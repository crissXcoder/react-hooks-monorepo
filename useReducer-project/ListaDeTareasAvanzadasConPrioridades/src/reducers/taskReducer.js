// src/reducers/taskReducer.js
export const initialState = {
    tasks: [],
    filter: 'all'
  };
  
  export const ACTION_TYPES = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    TOGGLE_TASK: 'TOGGLE_TASK',
    CHANGE_PRIORITY: 'CHANGE_PRIORITY',
    SET_FILTER: 'SET_FILTER'
  };
  
  export function taskReducer(state, action) {
    switch (action.type) {
      case ACTION_TYPES.ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      
      case ACTION_TYPES.REMOVE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      
      case ACTION_TYPES.TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task => 
            task.id === action.payload 
              ? { ...task, completed: !task.completed } 
              : task
          )
        };
      
      case ACTION_TYPES.CHANGE_PRIORITY:
        return {
          ...state,
          tasks: state.tasks.map(task => 
            task.id === action.payload.id 
              ? { ...task, priority: action.payload.priority } 
              : task
          )
        };
      
      case ACTION_TYPES.SET_FILTER:
        return {
          ...state,
          filter: action.payload
        };
      
      default:
        return state;
    }
  }
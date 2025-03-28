// src/utils/taskHelpers.js

/**
 * Generates a unique task ID
 * @returns {string} A unique identifier for a task
 */
export const generateTaskId = () => {
    return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
  
  /**
   * Validates a task object
   * @param {Object} task - The task to validate
   * @returns {boolean} Whether the task is valid
   */
  export const isValidTask = (task) => {
    return !!(
      task && 
      task.title && 
      task.title.trim().length > 0 && 
      ['low', 'medium', 'high'].includes(task.priority)
    );
  };
  
  /**
   * Sorts tasks based on priority and completion status
   * @param {Array} tasks - Array of tasks to sort
   * @param {string} sortBy - Sorting criteria ('priority' or 'date')
   * @returns {Array} Sorted tasks
   */
  export const sortTasks = (tasks, sortBy = 'priority') => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    
    return [...tasks].sort((a, b) => {
      // Always prioritize incomplete tasks
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      
      if (sortBy === 'priority') {
        // Sort by priority within completed/incomplete groups
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      } else if (sortBy === 'date') {
        // Sort by date created
        return b.id - a.id;
      }
      
      return 0;
    });
  };
  
  /**
   * Filters tasks based on different criteria
   * @param {Array} tasks - Array of tasks to filter
   * @param {string} filterType - Filter criteria ('all', 'active', 'completed')
   * @returns {Array} Filtered tasks
   */
  export const filterTasks = (tasks, filterType = 'all') => {
    switch (filterType) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'all':
      default:
        return tasks;
    }
  };
  
  /**
   * Calculates task statistics
   * @param {Array} tasks - Array of tasks
   * @returns {Object} Task statistics
   */
  export const getTaskStats = (tasks) => {
    return {
      total: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      active: tasks.filter(task => !task.completed).length,
      priorityBreakdown: {
        low: tasks.filter(task => task.priority === 'low').length,
        medium: tasks.filter(task => task.priority === 'medium').length,
        high: tasks.filter(task => task.priority === 'high').length
      }
    };
  };
  
  /**
   * Searches tasks by title
   * @param {Array} tasks - Array of tasks
   * @param {string} searchTerm - Search query
   * @returns {Array} Matching tasks
   */
  export const searchTasks = (tasks, searchTerm) => {
    if (!searchTerm) return tasks;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    return tasks.filter(task => 
      task.title.toLowerCase().includes(normalizedSearch)
    );
  };
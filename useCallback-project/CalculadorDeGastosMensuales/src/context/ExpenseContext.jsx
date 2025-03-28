import React, { createContext, useContext } from 'react';
import { useExpenseCalculator } from '../hooks/useExpenseCalculator';

// Exporta el contexto
export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const expenseCalculator = useExpenseCalculator();

  return (
    <ExpenseContext.Provider value={expenseCalculator}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext debe ser usado dentro de un ExpenseProvider');
  }
  return context;
};
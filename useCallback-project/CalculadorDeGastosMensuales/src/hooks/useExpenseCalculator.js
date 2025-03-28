import { useState, useCallback, useMemo } from 'react';

export const useExpenseCalculator = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpense = useCallback((expense) => {
    const newExpense = { 
      ...expense, 
      id: Date.now(),
      date: new Date()
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    calculateTotal(updatedExpenses);
  }, [expenses]);

  const removeExpense = useCallback((id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    calculateTotal(updatedExpenses);
  }, [expenses]);

  const editExpense = useCallback((id, updatedExpenseData) => {
    const updatedExpenses = expenses.map(expense => 
      expense.id === id 
        ? { ...expense, ...updatedExpenseData } 
        : expense
    );
    setExpenses(updatedExpenses);
    calculateTotal(updatedExpenses);
  }, [expenses]);

  const calculateTotal = useCallback((expensesList) => {
    const total = expensesList.reduce((sum, expense) => sum + expense.amount, 0);
    setTotalExpense(total);
  }, []);

  const groupExpensesByCategory = useMemo(() => {
    return expenses.reduce((groups, expense) => {
      const category = expense.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(expense);
      return groups;
    }, {});
  }, [expenses]);

  const categorySummary = useMemo(() => {
    return Object.entries(groupExpensesByCategory).map(([category, categoryExpenses]) => ({
      category,
      total: categoryExpenses.reduce((sum, expense) => sum + expense.amount, 0),
      count: categoryExpenses.length
    })).sort((a, b) => b.total - a.total);
  }, [groupExpensesByCategory]);

  return {
    expenses,
    totalExpense,
    addExpense,
    removeExpense,
    editExpense,
    categorySummary,
    groupExpensesByCategory
  };
};
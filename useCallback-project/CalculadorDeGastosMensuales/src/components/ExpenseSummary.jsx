import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import './ExpenseSummary.css';

export const ExpenseSummary = () => {
  const { totalExpense = 0, categorySummary = [] } = useExpenseContext();

  return (
    <div className="expense-summary">
      <h2>Resumen de Gastos</h2>
      <div className="summary-container">
        <div className="total-expense">
          <h3>Gasto Total</h3>
          <p>${totalExpense.toFixed(2)}</p>
        </div>
        
        <div className="category-summary">
          <h3>Gastos por Categoría</h3>
          {categorySummary.length > 0 ? (
            categorySummary.map(({ category, total, count }) => (
              <div key={category} className="category-item">
                <span className="category-name">{category}</span>
                <div className="category-details">
                  <span className="category-count">({count} gastos)</span>
                  <span className="category-total">${total.toFixed(2)}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No hay gastos registrados</p>
          )}
        </div>
      </div>
    </div>
  );
};
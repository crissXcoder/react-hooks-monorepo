import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import './ExpenseChart.css';

export const ExpenseChart = () => {
  const { categorySummary = [] } = useExpenseContext();

  const maxTotal = categorySummary.length > 0 
    ? Math.max(...categorySummary.map(cat => cat.total), 0)
    : 0;

  return (
    <div className="expense-chart">
      <h2>Distribución de Gastos por Categoría</h2>
      <div className="chart-container">
        {categorySummary.length > 0 ? (
          categorySummary.map(({ category, total }) => {
            const barHeight = maxTotal > 0 
              ? (total / maxTotal) * 200 
              : 0;

            return (
              <div key={category} className="chart-bar">
                <div 
                  className="bar" 
                  style={{ height: `${barHeight}px` }}
                ></div>
                <span className="category-label">{category}</span>
                <span className="amount-label">${total.toFixed(2)}</span>
              </div>
            );
          })
        ) : (
          <p className="no-expenses">No hay gastos para mostrar</p>
        )}
      </div>
    </div>
  );
};
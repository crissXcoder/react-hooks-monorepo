import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

export const ExpenseList = () => {
  const { expenses, removeExpense } = useContext(ExpenseContext);
  const [filter, setFilter] = useState('');

  const filteredExpenses = expenses.filter(expense => 
    expense.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="expense-list bg-blue-50 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Filtrar por categoría"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="overflow-y-auto max-h-96">
        {filteredExpenses.map((expense) => (
          <div 
            key={expense.id} 
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
          >
            <div>
              <p className="font-bold">{expense.description}</p>
              <p className="text-sm text-gray-500">{expense.category}</p>
              <p className="text-sm">${expense.amount.toFixed(2)}</p>
            </div>
            <button 
              onClick={() => removeExpense(expense.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
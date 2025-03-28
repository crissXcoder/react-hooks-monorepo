import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseSummary } from './components/ExpenseSummary';
import { ExpenseChart } from './components/ExpenseChart';
import './App.css';

function App() {
  return (
    <ExpenseProvider>
      <div className="expense-tracker-app">
        <div className="container">
          <h1>Calculadora de Gastos Mensuales</h1>
          <div className="content-grid">
            <div className="form-section">
              <ExpenseForm />
            </div>
            <div className="info-section">
              <ExpenseSummary />
              <ExpenseChart />
            </div>
            <div className="list-section">
              <ExpenseList />
            </div>
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
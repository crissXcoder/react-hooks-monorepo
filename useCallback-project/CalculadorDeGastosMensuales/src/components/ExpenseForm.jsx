import React, { useState } from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import '../styles/ExpenseForm.css';

export const ExpenseForm = () => {
  const { addExpense } = useExpenseContext();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Alimentación', 
    'Transporte', 
    'Vivienda', 
    'Entretenimiento', 
    'Educación', 
    'Otros'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!description.trim()) {
      alert('Por favor, ingresa una descripción');
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Por favor, ingresa un monto válido');
      return;
    }

    if (!category) {
      alert('Por favor, selecciona una categoría');
      return;
    }

    // Agregar gasto
    addExpense({
      description: description.trim(),
      amount: numericAmount,
      category,
      date: new Date()
    });

    // Resetear formulario
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Registrar Nuevo Gasto</h2>
      
      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ej. Compra de supermercado"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="amount">Monto</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa el monto"
          step="0.01"
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Agregar Gasto
      </button>
    </form>
  );
};
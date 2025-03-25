import React, { useState } from 'react';
import { useAutoFocus } from '../hooks/useAutoFocus';

export function AutoFocusInput() {
  const [inputValue, setInputValue] = useState('');
  const { inputRef } = useAutoFocus();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div className="auto-focus-container">
      <form onSubmit={handleSubmit} className="auto-focus-form">
        <h2>Auto Focus Input Demo</h2>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="auto-focus-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
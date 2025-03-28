import React from 'react';

export function ConversionHistory({ history, onClear }) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="conversion-history">
      <div className="history-header">
        <h3>Conversion History</h3>
        <button onClick={onClear}>Clear</button>
      </div>
      <ul>
        {history.map((entry) => (
          <li key={entry.id} className="history-item">
            <span>{entry.from.value} {entry.from.unit}</span>
            <span>→</span>
            <span>{entry.to.value} {entry.to.unit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
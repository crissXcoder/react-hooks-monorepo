import React from 'react';
import '../styles/Timer.css';

export function ProgressBar({ 
  seconds, 
  totalSeconds 
}) {
  const progressPercentage = 
    totalSeconds > 0 
      ? ((totalSeconds - seconds) / totalSeconds) * 100 
      : 0;

  return (
    <div className="progress-container">
      <div 
        className="progress-bar" 
        style={{ 
          width: `${progressPercentage}%`,
          background: `linear-gradient(to right, 
            #4a90e2 0%, 
            #50c878 ${progressPercentage}%, 
            rgba(255,255,255,0.2) ${progressPercentage}%)`
        }}
      />
    </div>
  );
}
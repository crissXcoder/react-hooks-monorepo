// src/components/TimerDisplay.jsx
import React from 'react';
import '../styles/Timer.css';

export function TimerDisplay({ 
  seconds, 
  isFinished, 
  totalSeconds 
}) {
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return [hours, minutes, secs]
      .map(v => v.toString().padStart(2, '0'))
      .join(':');
  };

  return (
    <div className={`timer-display ${isFinished ? 'finished' : ''}`}>
      <div className="time-text">
        {formatTime(seconds)}
      </div>
      {isFinished && (
        <div className="finished-text">
          Time's Up! 🎉
        </div>
      )}
    </div>
  );
}
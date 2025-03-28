import React, { useState } from 'react';
import '../styles/Timer.css';

export function TimerControls({ 
  isRunning, 
  isFinished, 
  startTimer, 
  pauseTimer, 
  resetTimer, 
  setTimerSeconds 
}) {
  const [inputSeconds, setInputSeconds] = useState('');

  const handleSetTimer = () => {
    const seconds = parseInt(inputSeconds, 10);
    if (seconds > 0) {
      setTimerSeconds(seconds);
      setInputSeconds('');
    }
  };

  return (
    <div className="timer-controls">
      <div className="input-group">
        <input 
          type="number" 
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
          placeholder="Enter seconds"
          className="seconds-input"
        />
        <button 
          onClick={handleSetTimer}
          className="set-timer-btn"
        >
          Set Timer
        </button>
      </div>

      <div className="control-buttons">
        {(!isRunning && !isFinished) ? (
          <button 
            onClick={startTimer}
            className="start-btn"
          >
            Start
          </button>
        ) : (
          <button 
            onClick={pauseTimer}
            className="pause-btn"
          >
            Pause
          </button>
        )}

        <button 
          onClick={resetTimer}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
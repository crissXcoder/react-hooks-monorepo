import React, { useState } from 'react';
import { useCountdown } from './hooks/useCountdown';
import { TimerDisplay } from './components/TimerDisplay';
import { TimerControls } from './components/TimerControls';
import { ProgressBar } from './components/ProgressBar';
import './styles/GlobalStyles.css';

function App() {
  const {
    seconds,
    isRunning,
    isFinished,
    startTimer,
    pauseTimer,
    resetTimer,
    setSeconds
  } = useCountdown(0);

  const handleSetTimerSeconds = (newSeconds) => {
    // Resetear y establecer nuevos segundos
    resetTimer(newSeconds);
  };

  return (
    <div className="timer-container">
      <h1>⏱️ Countdown Timer</h1>
      
      <TimerDisplay 
        seconds={seconds}
        isFinished={isFinished}
        totalSeconds={seconds}
      />
      
      <ProgressBar 
        seconds={seconds}
        totalSeconds={seconds}
      />
      
      <TimerControls 
        isRunning={isRunning}
        isFinished={isFinished}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={() => resetTimer(0)}
        setTimerSeconds={handleSetTimerSeconds}
      />
    </div>
  );
}

export default App;
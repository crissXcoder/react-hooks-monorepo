import { useState, useRef, useEffect } from 'react';

export function useCountdown(initialSeconds = 0) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    // Solo iniciar si hay segundos y no está ya corriendo
    if (seconds > 0 && !isRunning) {
      setIsRunning(true);
      setIsFinished(false);
      
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            setIsFinished(true);
            playAlarmSound();
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = (newSeconds) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSeconds(newSeconds || 0);
    setIsRunning(false);
    setIsFinished(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return {
    seconds,
    isRunning,
    isFinished,
    startTimer,
    pauseTimer,
    resetTimer,
    setSeconds
  };
}
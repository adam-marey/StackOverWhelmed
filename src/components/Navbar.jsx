import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(
    () => {
      let interval;

      if (timerRunning && !timerPaused) {
        interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
      } else if (!timerRunning && timerPaused) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    },
    [timerRunning, timerPaused]
  );

  const handleStart = () => {
    setTimerRunning(true);
    setTimerPaused(false);
  };

  const handleStop = () => {
    setTimerRunning(false);
    setTimerPaused(false);
    setSeconds(0);
  };

  const handlePause = () => {
    setTimerPaused(true);
  };

  return (
    <nav className="navbar">
      <div>
        Timer: {seconds} seconds
      </div>
      <div>
        <button onClick={handleStart} disabled={timerRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!timerRunning}>
          Stop
        </button>
        <button onClick={handlePause} disabled={!timerRunning || timerPaused}>
          Pause
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

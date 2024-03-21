// Timer.js

import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetTime = new Date(now);
      targetTime.setUTCHours(21, 0, 0, 0); // Set target time to 9 PM UTC
      const difference = targetTime - now;
      setTimeLeft(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col justify-center items-center text-white">
        <div className='font-head'>Launch: 9pm UTC </div> 
      <div className="text-4xl font-bold font-head">{formatTime(timeLeft)}</div>
    </div>
  );
}

export default Timer;

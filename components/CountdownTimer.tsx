
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [seconds, setSeconds] = useState(899); // 14:59

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-yellow-400 text-black py-2 px-4 flex justify-center items-center gap-3 font-bold text-sm shadow-inner">
      <span className="uppercase tracking-tight">O desconto expira em:</span>
      <span className="bg-black text-white px-3 py-1 rounded-md font-mono text-lg animate-pulse">
        {formatTime(seconds)}
      </span>
    </div>
  );
};

export default CountdownTimer;

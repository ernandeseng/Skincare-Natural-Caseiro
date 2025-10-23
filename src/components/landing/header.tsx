"use client";

import React, { useEffect, useState } from 'react';

export function Header() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const endOfDay = new Date();
      
      endOfDay.setHours(23, 59, 59, 999); // Define o fim do dia atual

      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(`${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`);
      } else {
        setCountdown("Oferta Encerrada");
      }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <p className="announcement-text active">
          <span className="announcement-icon">🔥</span>
          <span>Lançamento Exclusivo:</span>{' '}
          <span className="highlight-text">76% OFF</span>{' '}
          <span>somente hoje!</span>
          <span className="countdown-inline">{countdown}</span>
        </p>
      </div>
    </div>
  );
}

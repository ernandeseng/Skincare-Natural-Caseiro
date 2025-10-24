"use client";

import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export function Header() {
  const [countdown, setCountdown] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    function updateCountdown() {
      const now = new Date();
      const endOfDay = new Date();
      
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
        setCountdown({ hours, minutes, seconds });
      } else {
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
      }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(countdownInterval);
  }, [isClient]);

  if (!isClient) {
    return (
      <header className="new-navbar">
        <div className="new-navbar-content">
           <div className="logo-text">
            🌿 Protocolo Anti-Indústria
          </div>
           <div className="timer-container">
            <span className="timer-label">Oferta termina em:</span>
            <div className="timer-digits">
              <span>00:00:00</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="new-navbar">
      <div className="new-navbar-content">
        <div className="logo-text">
          🌿 Protocolo Anti-Indústria
        </div>
        <div className="timer-container">
          <span className="timer-label">Oferta termina em:</span>
          <div className="timer-digits">
            <span>{countdown.hours}</span>:<span>{countdown.minutes}</span>:<span>{countdown.seconds}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useEffect, useState } from 'react';

export function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countdown, setCountdown] = useState('');

  const messages = [
    {
      id: 1,
      icon: "🔥",
      text1: "Lançamento Exclusivo:",
      highlight: "76% OFF",
      text2: "só até Domingo!",
      showCountdown: true,
    },
    {
      id: 2,
      icon: "⚡",
      text1: "Últimas",
      highlight: "47 VAGAS",
      text2: "com Bônus Exclusivos!",
      showCountdown: false,
    },
    {
      id: 3,
      icon: "🎁",
      text1: "Compre Hoje e Ganhe",
      highlight: "R$ 348 em BÔNUS",
      text2: "Grátis!",
      showCountdown: false,
    },
  ];

  useEffect(() => {
    const rotationInterval = 4000;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % messages.length;
        const currentMessageEl = document.querySelector(`[data-message="${messages[prevIndex].id}"]`);
        const nextMessageEl = document.querySelector(`[data-message="${messages[nextIndex].id}"]`);

        if (currentMessageEl) {
          currentMessageEl.classList.remove('active');
          currentMessageEl.classList.add('exiting');
        }
        
        setTimeout(() => {
          if (currentMessageEl) currentMessageEl.classList.remove('exiting');
          if (nextMessageEl) nextMessageEl.classList.add('active');
        }, 600);

        return nextIndex;
      });
    }, rotationInterval);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const sunday = new Date();
      
      const dayOfWeek = sunday.getDay();
      const daysUntilSunday = 7 - dayOfWeek;
      sunday.setDate(sunday.getDate() + (dayOfWeek === 0 ? 0 : daysUntilSunday));
      
      sunday.setHours(23, 59, 59, 999);

      const diff = sunday.getTime() - now.getTime();
      
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
        {messages.map((msg, index) => (
          <p
            key={msg.id}
            className={`announcement-text ${index === 0 ? 'active' : ''}`}
            data-message={msg.id}
          >
            <span className="announcement-icon">{msg.icon}</span>
            <span>{msg.text1}</span>{' '}
            <span className="highlight-text">{msg.highlight}</span>{' '}
            <span>{msg.text2}</span>
            {msg.showCountdown && <span className="countdown-inline">{countdown}</span>}
          </p>
        ))}
      </div>
    </div>
  );
}

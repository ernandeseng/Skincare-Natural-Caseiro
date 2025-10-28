"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const bonusData = [
  {
    badge: "BÔNUS 1",
    icon: "🛒",
    title: "LISTA DE COMPRAS MENSAL",
    subtitle: "O Guia Definitivo Para Economizar R$ 150 Todo Mês Em Skincare",
    description: "Lista completa e organizada com todos os ingredientes naturais que você precisa comprar mensalmente. Saiba exatamente onde encontrar, quanto gastar e como armazenar.",
    value: "47",
  },
  {
    badge: "BÔNUS 2",
    icon: "🚨",
    title: "RECEITAS SOS",
    subtitle: "5 Soluções Emergenciais Para Espinhas que Aparecem de Última Hora",
    description: "Receitas rápidas e eficazes para emergências de pele. Perfeito para quando você tem um evento importante e aparece aquela espinha indesejada.",
    value: "47",
  },
  {
    badge: "BÔNUS 3",
    icon: "📦",
    title: "GUIA DE CONSERVAÇÃO",
    subtitle: "Como Fazer Seus Preparados Durarem Mais e Economizar Ainda Mais",
    description: "Técnicas profissionais de armazenamento e conservação. Descubra como fazer suas receitas naturais durarem semanas sem perder eficácia.",
    value: "47",
  },
];

export function Bonus() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const bonusCards = sectionRef.current?.querySelectorAll('.bonus-card-item');
    if (bonusCards) {
      bonusCards.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      if (bonusCards) {
        bonusCards.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section id="bonus-section" className="bonus-section" ref={sectionRef}>
       <div className="bonus-glow-decoration"></div>
      <div className="container mx-auto px-6">
        <div className="bonus-header-container">
          <div className="bonus-main-badge">BÔNUS EXCLUSIVOS INCLUSOS</div>
          <h2 className="bonus-headline">🎁 Ganhe 3 Bônus Exclusivos de Presente</h2>
          <p className="bonus-subheadline">
            Valor total de R$ 141 em bônus GRATUITOS para acelerar seus resultados
          </p>
        </div>

        <div className="bonus-cards-grid">
          {bonusData.map((bonus, index) => (
            <div
              key={index}
              className="bonus-card-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bonus-card-badge">{bonus.badge}</div>
              <div className="bonus-card-icon-wrapper">
                <span className="bonus-card-icon">{bonus.icon}</span>
              </div>
              <h3 className="bonus-card-title">{bonus.title}</h3>
              <p className="bonus-card-subtitle">{bonus.subtitle}</p>
              <p className="bonus-card-description">{bonus.description}</p>
              <div className="bonus-card-value-display">
                <span className="bonus-card-original-value">R$ {bonus.value}</span>
                <span className="bonus-card-current-value">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bonus-cta-container">
          <p className="bonus-cta-pretext">
            Todos esses bônus são seus de presente ao garantir acesso hoje
          </p>
          <a href="#pricing">
            <Button size="xl" className="bonus-cta-button group text-sm md:text-xl">
              QUERO TODOS OS BÔNUS AGORA <span className="bonus-cta-arrow">→</span>
            </Button>
          </a>
          <div className="bonus-cta-trustline">
            <span className="bonus-trust-item">✅ Bônus entregues na hora</span>
            <span className="bonus-trust-item">🎁 Valor total R$ 141</span>
            <span className="bonus-trust-item">⚡ Oferta por tempo limitado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

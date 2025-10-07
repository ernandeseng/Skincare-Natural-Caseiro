"use client";

import React, { useEffect, useRef } from "react";

export function Storytelling() {
  const storySectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            const counters = entry.target.querySelectorAll(".animate-count");
            counters.forEach((counter) => {
              counter.classList.add("visible");
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const storySteps = document.querySelectorAll(".story-step");
    storySteps.forEach((step) => storyObserver.observe(step));

    const handleScroll = () => {
      const storySection = storySectionRef.current;
      const progressBar = progressBarRef.current;

      if (storySection && progressBar) {
        const sectionTop = storySection.offsetTop;
        const sectionHeight = storySection.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrolled = window.pageYOffset;

        // Calculate progress only when the section is in view
        const scrollStart = sectionTop - viewportHeight;
        const scrollEnd = sectionTop + sectionHeight - viewportHeight;
        
        if (scrolled > scrollStart && scrolled < scrollEnd) {
          const progress = ((scrolled - scrollStart) / (scrollEnd - scrollStart)) * 100;
          progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
        } else if (scrolled <= scrollStart) {
           progressBar.style.width = '0%';
        } else {
           progressBar.style.width = '100%';
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      storySteps.forEach((step) => storyObserver.unobserve(step));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="story-progress-bar">
        <div className="progress-fill" ref={progressBarRef}></div>
      </div>
      <section className="story-section" ref={storySectionRef}>
        {/* Passo 1: A Frustração */}
        <div className="story-step" data-step="1">
          <div className="story-content">
            <div className="story-icon">😊</div>
            <h3 className="story-heading">Se você é como eu era...</h3>
            <p className="story-text">
              Uma mulher que vive na correria — acorda cedo, trabalha, cuida da casa e mal tem tempo pra si — mas sonha em se livrar da pele oleosa, dos cravos e das manchas que insistem em ficar. Se isso soa familiar, então o Protocolo Anti-Indústria foi feito pra você.
            </p>
          </div>
          <div className="story-visual">
            <div className="stat-box animate-count">
              <span className="stat-number">R$ 2.000</span>
              <span className="stat-label">gastos em cremes caros</span>
            </div>
          </div>
        </div>

        {/* Passo 2: A Busca Frustrada */}
        <div className="story-step" data-step="2">
          <div className="story-visual">
            <div className="stat-box animate-count">
              <span className="stat-number">R$ 150</span>
              <span className="stat-label">por produto que dura 1 mês</span>
            </div>
          </div>
          <div className="story-content">
            <div className="story-icon">🤦‍♀️</div>
            <h3 className="story-heading">
              Já ouviu dermatologistas indicarem produtos caros...
            </h3>
            <p className="story-text">
              Que prometiam milagres, mas duravam só algumas semanas? Já sentiu vergonha de tirar uma foto sem filtro e pensou: 'Por que comigo nada funciona?'
            </p>
          </div>
        </div>

        {/* Passo 3: O Dilema */}
        <div className="story-step highlight-step" data-step="3">
          <div className="story-content centered">
            <div className="story-icon">💭</div>
            <h3 className="story-heading highlight-text">
              E o pior: cada ida ao supermercado traz aquele dilema cruel...
            </h3>
            <p className="story-text large">
              Comprar um creme novo ou colocar comida na mesa?
            </p>
          </div>
        </div>

        {/* Passo 4: A Descoberta */}
        <div className="story-step discovery-step" data-step="4">
          <div className="story-content">
            <div className="story-icon glow">✨</div>
            <h3 className="story-heading success-text">
              Eu vivi isso na pele até descobrir o Método Sinergia Doméstica™
            </h3>
            <p className="story-text">
             Foi o ponto de virada. Descobri que dá pra conquistar uma pele limpa e saudável com ingredientes simples da cozinha — gastando menos de R$ 50 por mês no mercado. E o melhor: com resultados visíveis em 15 dias.
            </p>
          </div>
          <div className="story-visual">
            <div className="savings-box animate-count">
              <span className="savings-label">Economia anual:</span>
              <span className="savings-amount">R$ 2.400</span>
            </div>
          </div>
        </div>

        {/* Passo 5: A Diferença */}
        <div className="story-step" data-step="5">
           <div className="story-visual">
             <div className="story-icon text-5xl">🔬</div>
           </div>
          <div className="story-content">
            <h3 className="story-heading">
              Não são receitas caseiras comuns do Google
            </h3>
            <p className="story-text">
             O Protocolo Anti-Indústria é um sistema baseado no Fenômeno SID™ — uma combinação precisa de ingredientes como mel, aveia e limão que, juntos, ativam os mesmos mecanismos dos cosméticos caros, de forma 100% natural.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Pricing() {
  const [countdown, setCountdown] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [vacancies, setVacancies] = useState(47);
  const ebookMockup = PlaceHolderImages.find((p) => p.id === "ebook-mockup-new")!;

  useEffect(() => {
    const vacancyInterval = setInterval(() => {
      setVacancies((prev) => (prev > 15 ? prev - 1 : prev));
    }, 120000); // Decrement every 2 minutes

    return () => clearInterval(vacancyInterval);
  }, []);

  useEffect(() => {
    let offerEndTime = localStorage.getItem("offerEndTime");
    if (!offerEndTime || new Date().getTime() > parseInt(offerEndTime)) {
      offerEndTime = (new Date().getTime() + 14 * 3600 * 1000 + 23 * 60 * 1000 + 45 * 1000).toString();
      localStorage.setItem("offerEndTime", offerEndTime);
    }

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = parseInt(offerEndTime!) - now;

      if (distance < 0) {
        clearInterval(countdownInterval);
        // Reset timer for another 24 hours
        const newEndTime = (new Date().getTime() + 24 * 3600 * 1000).toString();
        localStorage.setItem("offerEndTime", newEndTime);
        // This will trigger a re-render and restart the countdown.
        // For simplicity, we'll just let it go to 00. A full restart would require another effect.
        setCountdown({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        hours: hours < 10 ? "0" + hours : hours.toString(),
        minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
        seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);


  return (
    <section id="pricing" className="offer-section">
      <div className="offer-container">
        <div className="flex justify-center">
            <div className="offer-badge">
                <span className="fire-icon">🔥</span>
                <span>OFERTA EXCLUSIVA POR TEMPO LIMITADO</span>
            </div>
        </div>

        <h2 className="offer-headline">
          Transforme Sua Pele Investindo Apenas{" "}
          <span className="highlight">o Preço de Um Café Por Dia</span>
        </h2>

        <p className="offer-subheadline">
          Acesso completo + 3 bônus exclusivos por um valor único e acessível
        </p>

        <div className="offer-card">
          <div className="discount-badge">
            <div className="discount-badge-percent">76%</div>
            <div className="discount-badge-text">OFF</div>
          </div>

          <div className="product-title">
            <h3 className="product-name">⭐ Protocolo Anti-Indústria</h3>
            <p className="product-subtitle">
              O único sistema completo de skincare natural caseiro
            </p>
          </div>

          <div className="product-preview">
            <Image
              src={ebookMockup.imageUrl}
              alt="Protocolo Anti-Indústria"
              width={500}
              height={313}
              className="product-mockup"
              data-ai-hint={ebookMockup.imageHint}
            />
          </div>

          <div className="modules-list">
            <div className="module-item">
              <div className="module-icon">✅</div>
              <div className="module-content">
                <div className="module-title">
                  MÓDULO 1: Descubra Seu Tipo de Pele em 10 Minutos
                </div>
                <div className="module-description">
                  Quiz interativo que identifica seu tipo e indica as receitas
                  perfeitas
                </div>
              </div>
            </div>

            <div className="module-item">
              <div className="module-icon">✅</div>
              <div className="module-content">
                <div className="module-title">
                  MÓDULO 2: Receitas Para Problemas Específicos
                </div>
                <div className="module-description">
                  Soluções naturais para manchas, acne, oleosidade e
                  ressecamento
                </div>
              </div>
            </div>

            <div className="module-item">
              <div className="module-icon">✅</div>
              <div className="module-content">
                <div className="module-title">
                  MÓDULO 3: As 15 Receitas Que Vão Revolucionar Sua Pele
                </div>
                <div className="module-description">
                  Receitas comprovadas gastando menos de R$50 no mercado
                </div>
              </div>
            </div>
            <div className="module-item">
              <div className="module-icon">✅</div>
              <div className="module-content">
                <div className="module-title">
                  MÓDULO 4: ECONOMIA MÁXIMA
                </div>
                <div className="module-description">
                  Como Preparar, Conservar e Maximizar Cada Ingrediente
                </div>
              </div>
            </div>
          </div>

          <div className="bonus-section">
            <div className="bonus-header">
              <h4 className="bonus-title">🎁 Bônus Exclusivos Inclusos</h4>
              <p className="bonus-subtitle">
                Valor total de R$ 141 - GRÁTIS hoje
              </p>
            </div>

            <div className="bonus-list">
              <div className="bonus-item">
                <div className="bonus-icon">🎁</div>
                <div className="bonus-content">
                  <div className="bonus-name">
                    BÔNUS 1: LISTA DE COMPRAS MENSAL
                  </div>
                  <div className="bonus-desc">
                    O Guia Definitivo Para Economizar R$ 150 Todo Mês Em Skincare
                  </div>
                </div>
                <div className="bonus-value">
                  <span className="bonus-value-original">R$ 47</span>
                  GRÁTIS
                </div>
              </div>

              <div className="bonus-item">
                <div className="bonus-icon">🎁</div>
                <div className="bonus-content">
                  <div className="bonus-name">
                    BÔNUS 2: RECEITAS SOS
                  </div>
                  <div className="bonus-desc">
                    5 Soluções Emergenciais Para Espinhas que Aparecem de Última Hora
                  </div>
                </div>
                <div className="bonus-value">
                  <span className="bonus-value-original">R$ 47</span>
                  GRÁTIS
                </div>
              </div>

              <div className="bonus-item">
                <div className="bonus-icon">🎁</div>
                <div className="bonus-content">
                  <div className="bonus-name">
                    BÔNUS 3: GUIA DE CONSERVAÇÃO
                  </div>
                  <div className="bonus-desc">
                    Como Fazer Seus Preparados Durarem Mais e Economizar Ainda Mais
                  </div>
                </div>
                <div className="bonus-value">
                  <span className="bonus-value-original">R$ 47</span>
                  GRÁTIS
                </div>
              </div>
            </div>
          </div>

          <div className="pricing-section">
            <div className="pricing-header">
              <p className="total-value-label">
                Valor total de tudo que você recebe:
              </p>
              <div className="original-price">R$ 348,00</div>
              <div className="divider"></div>
            </div>

            <p className="price-today-label">Investimento de hoje:</p>
            <div className="current-price">
              <span className="currency">R$</span>19,90
            </div>

            <p className="installments">
              Ou{" "}
              <span className="installments-highlight">3x de R$ 6,63</span> sem
              juros
            </p>
          </div>

          <div className="urgency-section">
            <div className="urgency-item">
              <div className="urgency-icon">⚡</div>
              <div className="urgency-text">
                Últimas <span className="urgency-number">{vacancies}</span> vagas
              </div>
            </div>

            <div className="urgency-item">
              <div className="urgency-icon">⏰</div>
              <div className="urgency-text">Oferta expira em:</div>
            </div>
          </div>

          <div className="countdown-timer">
            <div className="timer-block">
              <div className="timer-number">{countdown.hours}</div>
              <div className="timer-label">Horas</div>
            </div>
            <div className="timer-block">
              <div className="timer-number">{countdown.minutes}</div>
              <div className="timer-label">Minutos</div>
            </div>
            <div className="timer-block">
              <div className="timer-number">{countdown.seconds}</div>
              <div className="timer-label">Segundos</div>
            </div>
          </div>

          <a href="https://www.ggcheckout.com/checkout/v2/30wAKDKIxVLqpbUF4sUH" className="block">
            <button className="cta-button">
              GARANTIR MEU ACESSO AGORA
              <span className="cta-icon">→</span>
            </button>
          </a>

          <p className="cta-subtext">
            ⚡ Você será redirecionado para a área de pagamento seguro
          </p>

          <div className="trust-section">
            <div className="trust-item">
              <div className="trust-icon">✅</div>
              <div className="trust-title">Acesso Imediato</div>
              <div className="trust-description">
                Receba tudo na hora, direto no seu e-mail
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <div className="trust-title">Pagamento 100% Seguro</div>
              <div className="trust-description">
                Criptografia SSL e checkout protegido
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <div className="trust-title">+5.000 Alunas</div>
              <div className="trust-description">
                Satisfeitas com o protocolo
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">🌿</div>
              <div className="trust-title">100% Natural</div>
              <div className="trust-description">
                Ingredientes acessíveis e seguros
              </div>
            </div>
          </div>

          <div className="guarantee-box">
            <div className="guarantee-badge">
              <span className="guarantee-icon">🛡️</span>
              <span style={{ fontWeight: 800, color: "#1E3A8A" }}>
                GARANTIA INCONDICIONAL
              </span>
            </div>
            <h4 className="guarantee-title">
              Garantia de 7 Dias ou Seu Dinheiro de Volta
            </h4>
            <p className="guarantee-text">
              Você tem <strong>7 dias completos</strong> para testar o Protocolo
              Anti-Indústria. Se por qualquer motivo você não ficar
              satisfeita, devolvemos{" "}
              <strong>100% do seu investimento</strong>. Sem perguntas, sem
              burocracia. O risco é todo nosso!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

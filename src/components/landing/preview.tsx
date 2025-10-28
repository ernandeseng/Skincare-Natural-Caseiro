
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Star } from "lucide-react";

const deliverables = [
  {
    badge: "Módulo 1",
    badgeIcon: "📚",
    title: "Descubra Seu Tipo de Pele em 10 Minutos",
    highlight: "10 Minutos",
    description: "Quiz interativo que identifica seu tipo de pele e indica as receitas perfeitas para você.",
    image: PlaceHolderImages.find((p) => p.id === "preview-quiz")!,
  },
  {
    badge: "Módulo 2",
    badgeIcon: "📚",
    title: "Receitas Para Problemas Específicos",
    highlight: "Problemas Específicos",
    description: "Soluções naturais direcionadas para manchas, acne, oleosidade, ressecamento e mais.",
    image: PlaceHolderImages.find((p) => p.id === "preview-recipes")!,
  },
  {
    badge: "Módulo 3",
    badgeIcon: "📚",
    title: "As 15 Receitas Que Vão Revolucionar Sua Pele Gastando Menos de R$50 no Mercado",
    highlight: "Menos de R$50",
    description: "Receitas comprovadas com ingredientes naturais acessíveis e fáceis de encontrar.",
    image: PlaceHolderImages.find((p) => p.id === "preview-shopping")!,
  },
  {
    badge: "Módulo 4",
    badgeIcon: "📚",
    title: "ECONOMIA MÁXIMA: Como Preparar, Conservar e Maximizar Cada Ingrediente",
    highlight: "ECONOMIA MÁXIMA",
    description: "Aprenda a preparar, conservar e maximizar cada ingrediente para um aproveitamento total e desperdício zero.",
    image: PlaceHolderImages.find((p) => p.id === "preview-economy")!,
  },
  {
    badge: "Bônus 1",
    badgeIcon: "🎁",
    title: "O Método dos 5 Minutos Dourados",
    highlight: "5 Minutos",
    description: "Rotina matinal express que transforma sua pele mesmo com agenda lotada.",
    image: PlaceHolderImages.find((p) => p.id === "preview-routine")!,
  },
  {
    badge: "Bônus 2",
    badgeIcon: "🎁",
    title: "Truques Para Mulheres Que Trabalham o Dia Inteiro e Não Têm Tempo",
    highlight: "Não Têm Tempo",
    description: "Hacks rápidos e eficientes para cuidar da pele em meio à rotina corrida.",
    image: PlaceHolderImages.find((p) => p.id === "preview-hacks")!,
  },
  {
    badge: "Bônus 3",
    badgeIcon: "🎁",
    title: "Os Segredos Que Ninguém Te Conta",
    highlight: "Segredos",
    description: "Ingredientes 'secretos' e combinações poderosas que a indústria esconde de você.",
    image: PlaceHolderImages.find((p) => p.id === "preview-secrets")!,
  },
];

export function Preview() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      id="preview"
      className="w-full py-20 md:py-32 text-center"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 30%, #F0F9F4 100%)",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              background: 'linear-gradient(135deg, #15803D 0%, #16A34A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            O Que Você Vai Receber
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            ✨ Acesso completo ao <strong style={{color: '#15803D', fontWeight: 700}}>Protocolo Anti-Indústria</strong> com tudo que você precisa para <strong style={{color: '#15803D', fontWeight: 700}}>transformar sua pele em 30 dias</strong>.
          </p>
        </div>

        <Carousel setApi={setApi} className="max-w-4xl mx-auto relative">
          <CarouselContent>
            {deliverables.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center gap-6 px-5">
                  <div className="carousel-slide-card w-full max-w-3xl group">
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      width={800}
                      height={500}
                      data-ai-hint={item.image.imageHint}
                      className="slide-image"
                    />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold max-w-2xl text-center"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: "#15803D",
                      lineHeight: 1.3,
                      margin: "28px 0 16px",
                    }}
                  >
                    {item.title.split(item.highlight).map((part, i) =>
                      i === 0 ? (
                        part
                      ) : (
                        <span key={i}>
                          <span 
                            className="highlight-number"
                            style={{
                              color: '#16A34A',
                              fontWeight: 900,
                              fontSize: '1.1em',
                              background: 'rgba(22, 163, 74, 0.1)',
                              padding: '0 12px',
                              borderRadius: '8px',
                            }}
                          >
                            {item.highlight}
                          </span>
                          {part}
                        </span>
                      )
                    )}
                  </h3>
                  <p
                    className="text-base md:text-lg max-w-xl text-center"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{color: '#16A34A', fontWeight: 700, fontSize: '18px'}}>✓ </span>{item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-arrow carousel-arrow-left hidden md:flex">
            <span>←</span>
          </CarouselPrevious>
          <CarouselNext className="carousel-arrow carousel-arrow-right hidden md:flex">
            <span>→</span>
          </CarouselNext>
        </Carousel>

        <div className="carousel-indicators">
          {deliverables.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${current === index ? "active" : ""}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
           <a href="#pricing">
              <Button
                  size="xl"
                  className="preview-cta-button w-full max-w-lg"
              >
                  Quero Acesso Completo Agora
                  <span className="preview-cta-button-icon">→</span>
              </Button>
           </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8 text-[#1F2937]">
              <div className="trust-item">
                  <span className="trust-icon" style={{color: '#16A34A'}}>
                    <CheckCircle className="h-6 w-6" />
                  </span>
                  <span className="font-semibold text-sm">Acesso Imediato</span>
              </div>
              <div className="trust-item">
                  <span className="trust-icon" style={{color: '#3B82F6'}}>
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <span className="font-semibold text-sm">Garantia de 7 dias</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon" style={{color: '#FBBF24'}}>
                    <Star className="h-6 w-6 fill-current" />
                </span>
                <span className="font-semibold text-sm">+5.000 Alunas Satisfeitas</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

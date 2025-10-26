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
    title: "Descubra Seu Tipo de Pele em 10 Minutos",
    description: "Quiz interativo que identifica seu tipo de pele e indica as receitas perfeitas para você.",
    image: PlaceHolderImages.find((p) => p.id === "preview-quiz")!,
  },
  {
    badge: "Módulo 2",
    title: "Receitas Para Problemas Específicos",
    description: "Soluções naturais direcionadas para manchas, acne, oleosidade, ressecamento e mais.",
    image: PlaceHolderImages.find((p) => p.id === "preview-recipes")!,
  },
  {
    badge: "Módulo 3",
    title: "As 15 Receitas Que Vão Revolucionar Sua Pele Gastando Menos de R$50 no Mercado",
    description: "Receitas comprovadas com ingredientes naturais acessíveis e fáceis de encontrar.",
    image: PlaceHolderImages.find((p) => p.id === "preview-shopping")!,
  },
  {
    badge: "Bônus 1",
    title: "O Método dos 5 Minutos Dourados",
    description: "Rotina matinal express que transforma sua pele mesmo com agenda lotada.",
    image: PlaceHolderImages.find((p) => p.id === "preview-routine")!,
  },
  {
    badge: "Bônus 2",
    title: "Truques Para Mulheres Que Trabalham o Dia Inteiro e Não Têm Tempo",
    description: "Hacks rápidos e eficientes para cuidar da pele em meio à rotina corrida.",
    image: PlaceHolderImages.find((p) => p.id === "preview-hacks")!,
  },
  {
    badge: "Bônus 3",
    title: "Os Segredos Que Ninguém Te Conta",
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
        background: "linear-gradient(180deg, #FFFFFF 0%, #F0F9F4 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-5"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#1F2937",
              lineHeight: 1.2,
            }}
          >
            O Que Você Vai Receber
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 500,
              color: "#4B5563",
              lineHeight: 1.6,
            }}
          >
            Acesso completo ao Protocolo Anti-Indústria com tudo que você
            precisa para transformar sua pele em 30 dias.
          </p>
        </div>

        <Carousel setApi={setApi} className="max-w-4xl mx-auto relative">
          <CarouselContent>
            {deliverables.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center gap-6 px-5">
                  <div className="relative w-full max-w-3xl group">
                     <div 
                      className={`module-badge ${item.badge.startsWith('Bônus') ? 'bonus' : ''}`}
                    >
                      {item.badge}
                    </div>
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
                    className="text-2xl md:text-3xl font-bold max-w-2xl"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#15803D",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base md:text-lg max-w-xl"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#6B7280",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-arrow carousel-arrow-left hidden md:flex">
            <span>‹</span>
          </CarouselPrevious>
          <CarouselNext className="carousel-arrow carousel-arrow-right hidden md:flex">
            <span>›</span>
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
                  className="hero-cta-button rounded-full text-white font-bold text-lg uppercase tracking-wider py-5 px-12 group w-full max-w-lg"
              >
                  Quero Acesso Completo Agora
                  <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
           </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8 text-[#1F2937]">
              <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-[#16A34A]" />
                  <span className="font-semibold text-sm">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-[#16A34A]" />
                  <span className="font-semibold text-sm">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[#FBBF24]">
                    <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="font-semibold text-sm">+5.000 Alunas Satisfeitas</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

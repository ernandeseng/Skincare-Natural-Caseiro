
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const ebookMockup = PlaceHolderImages.find((p) => p.id === "ebook-mockup-new")!;

  return (
    <section
      id="hero"
      className="hero relative w-full min-h-[95vh] md:min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/70"></div>

      <div className="relative container mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight shadow-2xl max-w-3xl">
            A Pele dos Seus Sonhos com Ingredientes da Sua Cozinha
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/90 shadow-lg">
            Descubra o Protocolo Anti-Indústria: o único sistema que liberta
            você dos cosméticos caros e ineficazes, entregando uma pele
            saudável e radiante.
          </p>

          <div className="pt-4 pb-4">
            <Image
              src={ebookMockup.imageUrl}
              alt={ebookMockup.description}
              width={350}
              height={350}
              className="object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              data-ai-hint={ebookMockup.imageHint}
              priority
            />
          </div>

          <div className="w-full flex justify-center">
            <a href="#pricing">
              <Button
                variant="cta"
                size="xl"
                className="animate-pulse-glow w-full max-w-md md:w-auto"
              >
                QUERO TRANSFORMAR MINHA PELE
                <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

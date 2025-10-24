
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
      className="hero relative w-full flex items-center justify-center py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E3] to-[#FAF7F5]"></div>

      <div className="relative container mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight drop-shadow-sm max-w-3xl text-balance">
            <span className="text-primary">A Pele dos Seus Sonhos</span>
            <br />
            com Ingredientes da Sua Cozinha
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground/90">
            Descubra o <strong className="font-semibold text-primary">Protocolo Anti-Indústria</strong>: o <strong className="font-semibold text-primary">único sistema</strong> que <strong className="font-semibold text-primary">liberta você</strong> dos cosméticos caros e ineficazes, entregando uma <strong className="font-semibold text-primary">pele saudável e radiante</strong>.
          </p>

          <div className="pt-4 pb-4">
            <Image
              src={ebookMockup.imageUrl}
              alt={ebookMockup.description}
              width={250}
              height={250}
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
                className="w-full max-w-md md:w-auto"
                style={{
                  backgroundColor: '#E07856'
                }}
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

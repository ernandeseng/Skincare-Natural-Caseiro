
"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function Hero() {
  const ebookMockup = PlaceHolderImages.find((p) => p.id === "ebook-mockup-new")!;

  return (
    <section
      id="hero"
      className="relative w-full py-20 md:py-32"
      style={{
        background: 'radial-gradient(ellipse at top, #DDEEE3 0%, #FFFFFF 50%, #E9F3EC 100%)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 
            className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tighter max-w-4xl text-balance"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#1F2937', letterSpacing: '-0.5px' }}
          >
            Pare de Gastar <span style={{ color: '#DC2626' }}>R$300/Mês</span> em Produtos de Pele que <span style={{ color: '#DC2626' }}>Não Funcionam</span>
          </h1>

          <div
            className="w-20 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, #16A34A, #15803D)'}}
          />

          <p 
            className="max-w-3xl text-lg md:text-xl"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, color: '#4B5563', lineHeight: 1.6 }}
          >
            Descubra receitas naturais caseiras que transformam sua pele em <strong style={{color: '#15803D'}}>30 dias</strong> - <strong style={{color: '#15803D'}}>sem químicas</strong> agressivas, sem gastar fortunas, apenas <strong style={{color: '#15803D'}}>ingredientes que você já tem</strong> em casa.
          </p>

          <div className="pt-6 pb-6">
            <Image
              src={ebookMockup.imageUrl}
              alt={ebookMockup.description}
              width={800}
              height={500}
              className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              data-ai-hint={ebookMockup.imageHint}
              priority
            />
          </div>

          <div className="w-full flex justify-center flex-col items-center">
             <a href="#pricing" className="w-full max-w-md md:max-w-lg">
                <Button
                    size="xl"
                    className="hero-cta-button w-full rounded-full text-white font-bold text-lg uppercase tracking-wider py-5 px-12 group"
                >
                    Quero Transformar Minha Pele
                    <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </Button>
             </a>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-8 text-[#1F2937]">
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-[#16A34A]" />
                    <span className="font-semibold text-sm">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-[#16A34A]" />
                    <span className="font-semibold text-sm">Garantia de 7 dias</span>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-[#FBBF24]">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                    </div>
                    <span className="font-semibold text-sm mt-1 text-[#1F2937]">5.000+ alunas</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

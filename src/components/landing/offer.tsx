
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Gift, Check } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const bonusGuide = PlaceHolderImages.find(p => p.id === 'bonus-guide')!;
const bonusSOS = PlaceHolderImages.find(p => p.id === 'bonus-sos')!;
const bonusManual = PlaceHolderImages.find(p => p.id === 'bonus-manual')!;

const bonuses = [
  {
    title: "Guia de Compras Inteligente",
    value: "R$ 47,00",
    description: "Uma lista de compras otimizada para gastar o mínimo possível no supermercado.",
    image: bonusGuide.imageUrl,
    imageHint: bonusGuide.imageHint,
  },
  {
    title: "Receitas SOS para Emergências",
    value: "R$ 67,00",
    description: "Soluções rápidas para uma espinha inesperada ou pele ressecada antes de um evento.",
    image: bonusSOS.imageUrl,
    imageHint: bonusSOS.imageHint,
  },
  {
    title: "Manual de Conservação e Durabilidade",
    value: "R$ 37,00",
    description: "Aprenda a fazer seus produtos durarem mais, economizando ainda mais tempo e dinheiro.",
    image: bonusManual.imageUrl,
    imageHint: bonusManual.imageHint,
  },
];

export function Offer() {
  return (
    <section id="offer" className="bonus-section w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            Você Leva o Protocolo Completo e Mais 3 Bônus Exclusivos
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
            Ao garantir seu acesso hoje, você recebe o arsenal completo para sua independência no skincare, totalmente grátis.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <Card className="shadow-lg border-primary/20 border-2 h-full">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl md:text-3xl font-headline flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <span>Protocolo Anti-Indústria</span>
                </CardTitle>
                 <p className="text-muted-foreground text-lg pt-1">(Valor: R$197)</p>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground p-6 pt-0">
                <p className="text-base">
                  O guia completo com 4 módulos, 15 receitas testadas,
                  cronograma de 30 dias e o exclusivo método de diagnóstico
                  caseiro.
                </p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-5 w-5 flex-shrink-0"/><span>Diagnóstico preciso para seu tipo de pele.</span></li>
                  <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-5 w-5 flex-shrink-0"/><span>Receitas passo a passo para cada necessidade.</span></li>
                  <li className="flex items-start gap-3"><Check className="text-primary mt-1 h-5 w-5 flex-shrink-0"/><span>Cronograma diário para resultados em 30 dias.</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-secondary/30 border-2 h-full">
               <CardHeader className="p-6">
                <CardTitle className="text-2xl md:text-3xl font-headline flex items-center gap-3">
                  <Gift className="h-8 w-8 text-secondary" />
                  <span>3 Bônus Exclusivos</span>
                </CardTitle>
                <p className="text-muted-foreground text-lg pt-1">(Valor: R$151)</p>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground p-6 pt-0">
                 <p className="text-base">Ferramentas extras para acelerar seus resultados, totalmente grátis hoje.</p>
                <div className="flex flex-wrap justify-center gap-6 text-center">
                  {bonuses.map(bonus => (
                    <div key={bonus.title} className="flex flex-col items-center w-28">
                        <Image src={bonus.image} alt={bonus.title} width={150} height={150} className="mb-3 rounded-lg w-full max-w-[120px] shadow-md" data-ai-hint={bonus.imageHint} />
                        <p className="font-semibold text-sm text-primary">{bonus.title}</p>
                        <p className="text-xs line-through">{bonus.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

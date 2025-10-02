
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CreditCard, Gift, PlusCircle, Check } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const bonusImage = PlaceHolderImages.find(p => p.id === 'bonus-mockup')!;

const bonuses = [
  {
    title: "Guia de Compras Inteligente",
    value: "R$ 47,00",
    description: "Uma lista de compras otimizada para gastar o mínimo possível no supermercado.",
    image: bonusImage.imageUrl,
    imageHint: bonusImage.imageHint,
  },
  {
    title: "Receitas SOS para Emergências",
    value: "R$ 67,00",
    description: "Soluções rápidas para uma espinha inesperada ou pele ressecada antes de um evento.",
    image: bonusImage.imageUrl,
    imageHint: bonusImage.imageHint,
  },
  {
    title: "Manual de Conservação e Durabilidade",
    value: "R$ 37,00",
    description: "Aprenda a fazer seus produtos durarem mais, economizando ainda mais tempo e dinheiro.",
    image: bonusImage.imageUrl,
    imageHint: bonusImage.imageHint,
  },
];

export function Offer() {
  const [open, setOpen] = useState(false);
  return (
    <section id="offer" className="bonus-section w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            Tudo o que Você Precisa para uma Pele Perfeita
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
            Ao garantir seu acesso hoje, você recebe o arsenal completo para sua independência no skincare.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-8">
            <Card className="shadow-lg border-primary/20 border-2">
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

            <div className="flex items-center justify-center">
              <PlusCircle className="h-12 w-12 text-secondary" />
            </div>

            <Card className="shadow-lg border-secondary/30 border-2">
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
          <div className="lg:col-span-2">
            <div className="lg:sticky top-24">
              <Card className="bg-primary/5 p-6 md:p-8 rounded-xl text-center space-y-4 shadow-2xl border-2 border-secondary">
                <h3 className="text-2xl font-headline font-bold text-primary">Oferta Especial de Lançamento</h3>
                  <p className="text-md font-semibold text-muted-foreground">
                    Leve tudo isso hoje (de <span className="line-through">R$ 348,00</span>) por apenas:
                  </p>
                  <p className="text-6xl font-extrabold text-primary">R$ 27,90</p>
                  <p className="font-semibold text-md -mt-2">ou 12x de R$ 2,79</p>
                  <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="cta"
                          size="xl"
                          className="w-full"
                        >
                          <CreditCard className="mr-2 h-6 w-6" />
                          QUERO MEU KIT COMPLETO
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md md:max-w-lg">
                        <SkinDiagnosticForm setOpen={setOpen} />
                      </DialogContent>
                    </Dialog>
                  <p className="text-xs text-muted-foreground pt-2">Oferta por tempo limitado. Acesso imediato.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

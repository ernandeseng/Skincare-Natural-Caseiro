
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
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Tudo o que Você Precisa para uma Pele Perfeita
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
            Ao garantir seu acesso hoje, você recebe o arsenal completo para sua independência no skincare.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-8">
            <Card className="shadow-lg border-primary/50 border">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl font-headline flex items-center gap-2">
                  <BookOpen className="h-7 w-7 text-primary" />
                  <span>Protocolo Anti-Indústria (Valor: R$197)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground p-4 md:p-6 pt-0">
                <p className="text-base">
                  O guia completo com 4 módulos, 15 receitas testadas,
                  cronograma de 30 dias e o exclusivo método de diagnóstico
                  caseiro.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2"><Check className="text-primary mt-1 h-4 w-4 flex-shrink-0"/><span>Diagnóstico preciso para seu tipo de pele.</span></li>
                  <li className="flex items-start gap-2"><Check className="text-primary mt-1 h-4 w-4 flex-shrink-0"/><span>Receitas passo a passo para cada necessidade.</span></li>
                  <li className="flex items-start gap-2"><Check className="text-primary mt-1 h-4 w-4 flex-shrink-0"/><span>Cronograma diário para resultados em 30 dias.</span></li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <PlusCircle className="h-10 w-10 text-secondary" />
            </div>

            <Card className="shadow-lg border-secondary/50 border">
               <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl font-headline flex items-center gap-2">
                  <Gift className="h-7 w-7 text-secondary" />
                  <span>3 Bônus Exclusivos (Valor: R$151)</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground p-4 md:p-6 pt-0">
                 <p className="text-base">Ferramentas extras para acelerar seus resultados, totalmente grátis hoje.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {bonuses.map(bonus => (
                    <div key={bonus.title} className="text-center">
                        <Image src={bonus.image} alt={bonus.title} width={100} height={100} className="mx-auto mb-2 rounded w-full max-w-[100px]" data-ai-hint={bonus.imageHint} />
                        <p className="font-semibold text-sm">{bonus.title}</p>
                        <p className="text-xs line-through">{bonus.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="bg-primary/5 p-4 md:p-6 rounded-lg text-center space-y-4 shadow-2xl border-2 border-secondary lg:sticky top-24">
               <h3 className="text-2xl font-headline font-bold text-primary">Oferta Especial</h3>
                <p className="text-md font-semibold">Leve tudo isso hoje por:</p>
                <p className="text-muted-foreground text-sm">
                  Valor total: <span className="line-through">R$ 348,00</span>
                </p>
                <p className="text-5xl font-extrabold text-primary">R$ 27,90</p>
                 <p className="font-semibold text-sm">ou 12x de R$ 2,79</p>
                 <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="w-full text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform !bg-secondary !text-secondary-foreground"
                      >
                        <CreditCard className="mr-2 h-5 w-5" />
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
    </section>
  );
}

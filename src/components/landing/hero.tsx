
"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
  "Economia de até R$ 2.400 por ano",
  "Resultados visíveis em apenas 15 dias",
  "Rotinas de 5 minutos que cabem na sua agenda",
  "100% natural, seguro e eficaz",
];

export function Hero() {
  const [open, setOpen] = useState(false);
  const ebookMockup = PlaceHolderImages.find(p => p.id === 'ebook-mockup')!;

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="w-full bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl">
            <Badge
              variant="secondary"
              className="bg-secondary/90 text-secondary-foreground text-sm py-1.5 px-4 rounded-full"
            >
              ✨ Oferta de Lançamento por Tempo Limitado
            </Badge>
            <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl text-primary leading-tight">
              A Pele dos Seus Sonhos com Ingredientes da Sua Cozinha
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground">
              Descubra o Protocolo Anti-Indústria: o único sistema que liberta
              você dos cosméticos caros e ineficazes, entregando uma pele
              saudável e radiante.
            </p>

            <div className="w-full max-w-md space-y-4 pt-4">
               <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="w-full text-lg h-auto py-4 font-bold whitespace-normal"
                  >
                    COMECE SEU DIAGNÓSTICO GRATUITO
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md md:max-w-lg">
                  <SkinDiagnosticForm setOpen={setOpen} />
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-3 text-left w-full pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-muted-foreground text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

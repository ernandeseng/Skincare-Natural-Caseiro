
"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";

const features = [
  "Economia de até R$ 2.400 por ano",
  "Resultados visíveis em apenas 15 dias",
  "Rotinas de 5 minutos que cabem na sua agenda",
  "100% natural, seguro e eficaz",
];

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[95vh] md:min-h-screen flex items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('https://i.imgur.com/9NEHXfv.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      <div className="relative container mx-auto px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8">
            <Badge
              variant="secondary"
              className="bg-secondary/90 text-secondary-foreground text-sm py-1.5 px-4 rounded-full"
            >
              ✨ Oferta de Lançamento por Tempo Limitado
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight shadow-2xl">
              A Pele dos Seus Sonhos com Ingredientes da Sua Cozinha
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/90 shadow-lg">
              Descubra o Protocolo Anti-Indústria: o único sistema que liberta
              você dos cosméticos caros e ineficazes, entregando uma pele
              saudável e radiante.
            </p>

            <div className="space-y-3 text-left w-full pt-4 max-w-md">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="font-medium text-white text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

             <div className="w-full flex justify-center pt-4">
               <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="w-full max-w-md text-lg h-auto py-5 font-bold whitespace-normal bg-gradient-to-r from-yellow-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
          </div>
          
          <div className="hidden md:block">
            {/* Coluna direita vazia para a imagem de fundo aparecer */}
          </div>
        </div>
      </div>
    </section>
  );
}

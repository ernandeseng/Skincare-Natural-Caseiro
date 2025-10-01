
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

  return (
    <section className="w-full bg-gradient-to-b from-primary/10 to-background pt-8 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6">
            <Badge
              variant="secondary"
              className="bg-secondary/90 text-secondary-foreground text-sm py-1 px-3"
            >
              ✨ Oferta de Lançamento por Tempo Limitado
            </Badge>
            <h1 className="font-headline text-3xl font-bold md:text-4xl lg:text-5xl text-primary leading-tight">
              A Pele dos Seus Sonhos com Ingredientes que Você Já Tem em Casa
            </h1>
            <p className="max-w-[600px] text-base md:text-lg text-muted-foreground">
              Descubra o Protocolo Anti-Indústria: o único sistema que liberta
              você dos cosméticos caros e ineficazes, entregando uma pele
              saudável, radiante e sem espinhas.
            </p>

            <div className="w-full max-w-md space-y-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="w-full text-base md:text-lg h-auto py-4 font-bold bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:scale-105 transition-transform whitespace-normal"
                  >
                    COMECE SEU DIAGNÓSTICO GRATUITO
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md md:max-w-lg">
                  <SkinDiagnosticForm setOpen={setOpen} />
                </DialogContent>
              </Dialog>

              <div className="text-center bg-muted/50 p-3 rounded-lg">
                <p className="text-md text-muted-foreground">
                  Acesso completo de{" "}
                  <span className="line-through decoration-red-500 decoration-2">
                    R$ 197
                  </span>{" "}
                  por apenas 12x de
                </p>
                <p className="text-4xl md:text-5xl font-extrabold text-primary">R$ 2,79</p>
                <p className="text-sm text-muted-foreground">
                  ou R$ 27,90 à vista
                </p>
              </div>
            </div>

            <div className="space-y-2 text-left w-full pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium text-muted-foreground text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center order-first lg:order-last">
            <Image
              src={"https://i.imgur.com/069bgon.png"}
              alt={ebookMockup.description}
              width={500}
              height={500}
              className="rounded-lg shadow-2xl object-contain transform hover:scale-105 transition-transform duration-500 w-full max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] h-auto"
              priority
              data-ai-hint={ebookMockup.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

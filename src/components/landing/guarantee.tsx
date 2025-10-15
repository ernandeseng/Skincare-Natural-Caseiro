
"use client";
import { Button } from "@/components/ui/button";
import { ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Guarantee() {
  const [open, setOpen] = useState(false);
  const guaranteeSeal = PlaceHolderImages.find(p => p.id === 'guarantee-seal')!;

  return (
    <section id="guarantee" className="w-full py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={guaranteeSeal.imageUrl}
              alt={guaranteeSeal.description}
              width={400}
              height={400}
              className="object-contain w-[250px] h-[250px] md:w-[350px] md:h-[350px] drop-shadow-2xl"
              data-ai-hint={guaranteeSeal.imageHint}
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
              Seu Risco é ZERO. Nossa Confiança é 100%.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Temos tanta certeza de que o Protocolo vai transformar sua pele que colocamos toda a responsabilidade em nossos ombros.
            </p>
            <div className="space-y-4 text-left p-6 bg-primary/5 rounded-xl">
                <div className="flex items-start gap-4">
                    <HeartHandshake className="h-10 w-10 text-secondary flex-shrink-0 mt-1"/>
                    <div>
                      <h3 className="font-bold text-secondary text-lg mb-1">Garantia Incondicional de 30 Dias</h3>
                      <p className="text-base text-primary/90">Se por QUALQUER motivo você não ficar 100% satisfeita, basta nos enviar um único e-mail. Devolvemos todo o seu investimento na hora.</p>
                    </div>
                </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Você pode testar todo o método, aplicar as receitas e ver os resultados. Se não for o que você esperava, o prejuízo é nosso.
            </p>

            <a href="#pricing">
               <Button
                variant="cta"
                size="xl"
                className="w-full max-w-md mx-auto lg:mx-0"
              >
                <ShieldCheck className="mr-2 h-5 w-5" />
                QUERO TESTAR SEM RISCO
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

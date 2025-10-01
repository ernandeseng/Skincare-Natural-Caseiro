
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
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={guaranteeSeal.imageUrl}
              alt={guaranteeSeal.description}
              width={400}
              height={400}
              className="object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
              data-ai-hint={guaranteeSeal.imageHint}
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Seu Risco é ZERO. Nossa Confiança é 100%.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Temos tanta certeza de que o Protocolo vai transformar sua pele que colocamos toda a responsabilidade em nossos ombros.
            </p>
            <div className="space-y-4 text-left p-4 bg-white/10 rounded-lg">
                <div className="flex items-start gap-4">
                    <HeartHandshake className="h-8 w-8 text-secondary flex-shrink-0 mt-1"/>
                    <p className="text-base"><span className="font-bold text-secondary">Garantia Incondicional de 30 Dias:</span> Se por QUALQUER motivo você não ficar 100% satisfeita, basta nos enviar um único e-mail. Devolvemos todo o seu investimento na hora.</p>
                </div>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Você pode testar todo o método, aplicar as receitas e ver os resultados. Se não for o que você esperava, o prejuízo é nosso.
            </p>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                 <Button
                  size="lg"
                  className="w-full max-w-md mx-auto lg:mx-0 text-base md:text-lg h-auto py-3 font-bold shadow-lg hover:scale-105 transition-transform !bg-secondary !text-secondary-foreground whitespace-normal"
                >
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  QUERO TESTAR SEM RISCO
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md md:max-w-lg">
                <SkinDiagnosticForm setOpen={setOpen} />
              </DialogContent>
            </Dialog>

          </div>
        </div>
      </div>
    </section>
  );
}

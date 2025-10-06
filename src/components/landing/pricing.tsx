
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Check, X, Star } from "lucide-react";

export function Pricing() {
  const [open, setOpen] = useState(false);
  return (
    <section id="pricing" className="w-full pb-20 md:pb-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
                Escolha o Plano Perfeito Para Você
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
                Temos duas opções para você começar sua jornada rumo a uma pele incrível.
            </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto items-start">
          {/* Card Básico */}
          <Card className="bg-background/70 p-4 rounded-xl text-center space-y-2 shadow-lg border-2 border-border/50 h-full flex flex-col">
            <CardHeader className="p-2">
              <CardTitle className="text-lg md:text-2xl font-headline font-bold text-primary">Plano Básico</CardTitle>
               <p className="text-xs md:text-sm text-muted-foreground">Acesso essencial.</p>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow p-2">
              <p className="text-4xl md:text-5xl font-extrabold text-primary/80">
                R$ 19,90
              </p>
              <ul className="space-y-2 text-left text-muted-foreground text-xs md:text-base">
                <li className="flex items-start gap-2"><Check className="text-primary h-4 w-4 mt-0.5"/><span>Protocolo</span></li>
                <li className="flex items-start gap-2"><X className="text-destructive h-4 w-4 mt-0.5"/><span>Guia de Compras</span></li>
                <li className="flex items-start gap-2"><X className="text-destructive h-4 w-4 mt-0.5"/><span>Receitas SOS</span></li>
                <li className="flex items-start gap-2"><X className="text-destructive h-4 w-4 mt-0.5"/><span>Manual</span></li>
              </ul>
            </CardContent>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full text-xs md:text-base">
                  Escolher Básico
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md md:max-w-lg">
                <SkinDiagnosticForm setOpen={setOpen} />
              </DialogContent>
            </Dialog>
          </Card>

          {/* Card Completo (Mais Atraente) */}
           <div className="relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-3 py-0.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                <Star className="h-3 w-3"/>
                MAIS POPULAR
             </div>
            <Card className="bg-background p-4 rounded-xl text-center space-y-2 shadow-2xl border-2 border-secondary h-full flex flex-col">
                 <CardHeader className="p-2">
                  <CardTitle className="text-lg md:text-2xl font-headline font-bold text-primary">Plano Completo</CardTitle>
                  <p className="text-xs md:text-sm text-muted-foreground">Bônus inclusos!</p>
                </CardHeader>
                 <CardContent className="space-y-3 flex-grow p-2">
                    <p className="text-xs font-semibold text-muted-foreground">
                        De <span className="line-through">R$ 348</span> por:
                    </p>
                    <p className="text-4xl md:text-6xl font-extrabold text-primary">
                        R$ 27,90
                    </p>
                    <p className="font-semibold text-xs md:text-md -mt-2">
                        ou 3x no cartão
                    </p>
                    <ul className="space-y-2 text-left text-muted-foreground text-xs md:text-base">
                        <li className="flex items-start gap-2 font-semibold"><Check className="text-primary h-4 w-4 mt-0.5"/><span>Protocolo</span></li>
                        <li className="flex items-start gap-2 font-semibold"><Check className="text-primary h-4 w-4 mt-0.5"/><span>Guia de Compras</span></li>
                        <li className="flex items-start gap-2 font-semibold"><Check className="text-primary h-4 w-4 mt-0.5"/><span>Receitas SOS</span></li>
                        <li className="flex items-start gap-2 font-semibold"><Check className="text-primary h-4 w-4 mt-0.5"/><span>Manual</span></li>
                    </ul>
                </CardContent>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="cta" size="lg" className="w-full text-sm md:text-xl md:h-12">
                    <CreditCard className="mr-2 h-4 w-4 md:h-6 md:w-6" />
                    KIT COMPLETO
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md md:max-w-lg">
                  <SkinDiagnosticForm setOpen={setOpen} />
                </DialogContent>
              </Dialog>
            </Card>
           </div>
        </div>
      </div>
    </section>
  );
}

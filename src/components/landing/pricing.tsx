
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Card Básico */}
          <Card className="bg-background/70 p-6 md:p-8 rounded-xl text-center space-y-4 shadow-lg border-2 border-border/50 h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-headline font-bold text-primary">Plano Básico</CardTitle>
               <p className="text-muted-foreground">Acesso essencial.</p>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <p className="text-5xl font-extrabold text-primary/80">
                R$ 19,90
              </p>
              <ul className="space-y-3 text-left text-muted-foreground">
                <li className="flex items-center gap-3"><Check className="text-primary h-5 w-5"/><span>Protocolo Anti-Indústria</span></li>
                <li className="flex items-center gap-3"><X className="text-destructive h-5 w-5"/><span>Guia de Compras Inteligente</span></li>
                <li className="flex items-center gap-3"><X className="text-destructive h-5 w-5"/><span>Receitas SOS para Emergências</span></li>
                <li className="flex items-center gap-3"><X className="text-destructive h-5 w-5"/><span>Manual de Conservação</span></li>
              </ul>
            </CardContent>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="w-full">
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
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Star className="h-4 w-4"/>
                MAIS POPULAR
             </div>
            <Card className="bg-background p-6 md:p-8 rounded-xl text-center space-y-4 shadow-2xl border-2 border-secondary h-full flex flex-col">
                 <CardHeader>
                  <CardTitle className="text-2xl font-headline font-bold text-primary">Plano Completo</CardTitle>
                  <p className="text-muted-foreground">Todos os bônus inclusos!</p>
                </CardHeader>
                 <CardContent className="space-y-4 flex-grow">
                    <p className="text-sm font-semibold text-muted-foreground">
                        De <span className="line-through">R$ 348,00</span> por apenas:
                    </p>
                    <p className="text-6xl font-extrabold text-primary">
                        R$ 27,90
                    </p>
                    <p className="font-semibold text-md -mt-2">
                        ou em até 3x no cartão
                    </p>
                    <ul className="space-y-3 text-left text-muted-foreground">
                        <li className="flex items-center gap-3 font-semibold"><Check className="text-primary h-5 w-5"/><span>Protocolo Anti-Indústria</span></li>
                        <li className="flex items-center gap-3 font-semibold"><Check className="text-primary h-5 w-5"/><span>Guia de Compras Inteligente</span></li>
                        <li className="flex items-center gap-3 font-semibold"><Check className="text-primary h-5 w-5"/><span>Receitas SOS para Emergências</span></li>
                        <li className="flex items-center gap-3 font-semibold"><Check className="text-primary h-5 w-5"/><span>Manual de Conservação</span></li>
                    </ul>
                </CardContent>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="cta" size="xl" className="w-full">
                    <CreditCard className="mr-2 h-6 w-6" />
                    QUERO MEU KIT COMPLETO
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

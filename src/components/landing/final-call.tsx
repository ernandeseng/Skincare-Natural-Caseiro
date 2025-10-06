"use client";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";


export function FinalCall() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Sua Última Chance de Garantir o Acesso
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/90">
            A decisão de transformar sua pele, seu
            bolso e sua vida está a um clique de distância. Não deixe para
            depois.
          </p>
           <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="cta"
                size="xl"
                className="animate-pulse-glow w-full max-w-xl"
              >
                <Gem className="mr-3 h-6 w-6" />
                SIM, EU QUERO O PROTOCOLO!
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-lg">
              <SkinDiagnosticForm setOpen={setOpen} />
            </DialogContent>
          </Dialog>

          <div className="text-sm pt-6 space-y-4 text-primary-foreground">
            <div>
              <p>Pagamento Seguro | Acesso Imediato | Garantia de 30 Dias</p>
              <p className="mt-2">© 2025 Protocolo Anti-Indústria. Todos os direitos reservados.</p>
            </div>
            <p className="text-xs max-w-2xl mx-auto text-primary-foreground/70">
              Aviso legal: Este site não é afiliado ao Meta ou a qualquer entidade do Meta. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

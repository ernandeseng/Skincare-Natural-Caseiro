
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
    <footer className="w-full py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Sua Última Chance de Garantir o Acesso por um Preço Simbólico
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-primary-foreground/80">
            Amanhã, o preço pode subir. A decisão de transformar sua pele, seu
            bolso e sua vida está a um clique de distância. Não deixe para
            depois.
          </p>
           <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="secondary"
                className="w-full max-w-xl text-base md:text-xl h-16 font-extrabold shadow-lg hover:scale-105 transition-transform !bg-secondary !text-secondary-foreground"
              >
                <Gem className="mr-2 h-6 w-6" />
                SIM, EU QUERO O PROTOCOLO ANTI-INDÚSTRIA!
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-lg">
              <SkinDiagnosticForm setOpen={setOpen} />
            </DialogContent>
          </Dialog>

          <div className="text-sm text-primary-foreground/60 pt-4">
            <p>Pagamento Seguro | Acesso Imediato | Garantia de 30 Dias</p>
            <p>© 2024 Protocolo Anti-Indústria. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

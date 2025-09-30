import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

export function FinalCall() {
  return (
    <section className="w-full py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-headline animate-pulse">
            🔥 ÚLTIMA CHANCE DE TRANSFORMAR SUA PELE GASTANDO APENAS R$ 27,90
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="w-full max-w-xl text-xl h-16 font-extrabold shadow-lg hover:scale-105 transition-transform"
          >
            <Gem className="mr-2 h-6 w-6" />
            GARANTIR MEU PROTOCOLO ANTI-INDÚSTRIA AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}

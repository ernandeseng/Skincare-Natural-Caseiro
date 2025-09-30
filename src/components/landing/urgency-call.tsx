import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function UrgencyCall() {
  return (
    <section className="w-full py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            ⚡ ACESSE IMEDIATAMENTE APÓS A COMPRA!
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/90">
            Não deixe para amanhã a transformação que você pode começar HOJE! Seu
            acesso ao Protocolo Anti-Indústria é LIBERADO INSTANTANEAMENTE após a
            confirmação do pagamento. Em menos de 2 minutos você já estará com
            todo o sistema nas suas mãos.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="w-full max-w-md text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <Rocket className="mr-2 h-6 w-6" />
            COMEÇAR MINHA TRANSFORMAÇÃO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart } from "lucide-react";

const features = [
  "Economia de até R$ 2.400 por ano",
  "Resultados visíveis em apenas 15 dias",
  "Rotinas de 5-10 minutos que cabem na sua agenda",
  "100% natural e sem efeitos colaterais",
];

export function Hero() {
  return (
    <section className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-sm font-bold tracking-widest text-primary uppercase">
              Protocolo Anti-Indústria
            </h1>
            <p className="max-w-[800px] font-headline text-3xl font-bold md:text-5xl lg:text-6xl">
              Descubra o único sistema que usa ingredientes do seu supermercado
              para conquistar uma pele mais limpa e saudável
            </p>
          </div>
          <div className="max-w-[900px] space-y-6 rounded-lg border bg-background/50 p-6 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-primary animate-pulse">
              🔥 PARE DE GASTAR FORTUNAS EM PRODUTOS QUE NÃO FUNCIONAM!
            </h2>
            <p className="text-xl md:text-2xl font-semibold">
              Finalmente chegou a REVOLUÇÃO que vai acabar com a sua dependência
              de cremes caros e te dar a pele dos sonhos gastando MENOS DE R$ 50
              POR MÊS!
            </p>
            <p className="text-muted-foreground md:text-lg">
              Imagine acordar amanhã e olhar no espelho para uma pele
              visivelmente mais limpa, menos oleosa e livre daqueles cravos
              irritantes - usando apenas ingredientes que você já tem na sua
              cozinha.
            </p>
            <p className="text-muted-foreground md:text-lg">
              O PROTOCOLO ANTI-INDÚSTRIA é o primeiro sistema científico que
              quebra as correntes da indústria cosmética e te entrega resultados
              SUPERIORES aos produtos de farmácia usando o Método Sinergia
              Doméstica™.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                  De{" "}
                  <span className="line-through decoration-red-500 decoration-2">
                    R$ 197
                  </span>{" "}
                  por apenas
                </p>
                <p className="text-5xl font-extrabold text-primary">R$ 27,90</p>
                <p className="text-sm text-muted-foreground">
                  Menos do que você gastaria em um único creme facial de farmácia
                </p>
              </div>
              <Button
                size="lg"
                className="w-full max-w-md text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform"
              >
                <ShoppingCart className="mr-2 h-6 w-6" />
                QUERO TRANSFORMAR MINHA PELE AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

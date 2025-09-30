import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const features = [
  "Economia de até R$ 2.400 por ano",
  "Resultados visíveis em apenas 15 dias",
  "Rotinas de 5 minutos que cabem na sua agenda",
  "100% natural, seguro e eficaz",
];

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-primary/10 to-background pt-12 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <Badge
              variant="secondary"
              className="bg-secondary text-secondary-foreground text-sm py-1 px-3"
            >
              ✨ Oferta de Lançamento por Tempo Limitado
            </Badge>
            <h1 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl text-primary leading-tight">
              A Pele dos Seus Sonhos com Ingredientes que Você Já Tem em Casa
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
              Descubra o Protocolo Anti-Indústria: o único sistema que liberta
              você dos cosméticos caros e ineficazes, entregando uma pele
              saudável, radiante e sem espinhas gastando menos de R$50 por mês.
            </p>
            <div className="w-full max-w-md space-y-4">
              <Button
                size="lg"
                className="w-full text-lg h-14 font-bold bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:scale-105 transition-transform"
              >
                QUERO TRANSFORMAR MINHA PELE AGORA
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                  De{" "}
                  <span className="line-through decoration-red-500 decoration-2">
                    R$ 197
                  </span>{" "}
                  por apenas 12x de
                </p>
                <p className="text-5xl font-extrabold text-primary">R$ 2,79</p>
                <p className="text-sm text-muted-foreground">
                  ou R$ 27,90 à vista
                </p>
              </div>
            </div>
            <div className="space-y-2 text-left w-full pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/gY9OJ24.png"
              alt="Mockup 3D do ebook Protocolo Anti-Indústria"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl object-contain transform hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
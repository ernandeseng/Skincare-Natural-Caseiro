
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, CheckCircle } from "lucide-react";
import Image from "next/image";

const targetAudienceItems = [
  "Cansada de gastar fortunas em produtos que não funcionam.",
  "Busca uma solução natural e segura, livre de químicos agressivos.",
  "Tem uma rotina corrida e precisa de cuidados práticos e rápidos.",
  "Quer economizar no orçamento sem abrir mão de uma pele bonita.",
  "Deseja recuperar a autoestima e a confiança para sair de cara limpa.",
  "Acredita no poder da natureza para cuidar da saúde e da beleza.",
];

export function TargetAudience() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
           <div className="flex justify-center lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1552693673-1bf95829b54b?w=800&h=1200&fit=crop"
              alt="Mulher sorrindo, representando o público-alvo"
              width={500}
              height={750}
              className="rounded-lg shadow-2xl object-cover aspect-[2/3] w-full max-w-xs mx-auto"
              data-ai-hint="happy woman"
            />
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-lg bg-primary/10 p-3">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Este Protocolo Foi Desenhado Para Você?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Se você se identifica com uma das situações abaixo, a
              resposta é SIM.
            </p>
            <ul className="space-y-4 text-left">
              {targetAudienceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Card className="bg-primary/10 border-primary/20 shadow-none">
              <CardContent className="p-4">
                <p className="text-center text-base font-semibold text-primary">
                  Se você se viu aqui, está no lugar certo para começar uma
                  verdadeira revolução na sua pele.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, UserCheck } from "lucide-react";
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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 p-3">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary">
              Este Protocolo Foi Desenhado Para Você?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Se você se identifica com pelo menos uma das situações abaixo, a
              resposta é um sonoro SIM. O Protocolo Anti-Indústria foi criado
              para mulheres reais com problemas reais.
            </p>
            <ul className="space-y-4">
              {targetAudienceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Card className="bg-primary/10 border-primary/20 shadow-none">
              <CardContent className="p-4">
                <p className="text-center text-lg font-semibold text-primary">
                  Se você se viu aqui, está no lugar certo para começar uma
                  verdadeira revolução na sua pele.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1552693673-1bf95829b54b?w=800&h=1200&fit=crop"
              alt="Mulher sorrindo, representando o público-alvo"
              width={500}
              height={750}
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="happy woman"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
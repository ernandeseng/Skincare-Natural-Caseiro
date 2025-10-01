import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, Clock, DollarSign, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  title: string;
  icon: LucideIcon;
  description: string;
  number: string;
};

const benefits: Benefit[] = [
  {
    title: "Transformação da Pele",
    icon: Sparkles,
    description: "Pele visivelmente mais limpa e com oleosidade controlada.",
    number: "15 Dias",
  },
  {
    title: "Revolução Financeira",
    icon: DollarSign,
    description: "Economize mais de R$2.400 por ano em produtos caros.",
    number: "R$ 200+/mês",
  },
  {
    title: "Praticidade na Rotina",
    icon: Clock,
    description: "Receitas de 5 minutos que se encaixam na sua vida corrida.",
    number: "5 Min",
  },
  {
    title: "Conhecimento Duradouro",
    icon: BrainCircuit,
    description: "Domine o skincare natural e nunca mais dependa da indústria.",
    number: "Para Sempre",
  },
];

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            A Conquista da Pele Perfeita é Apenas o Começo
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
            Com o Protocolo Anti-Indústria, você não está apenas comprando
            receitas, está investindo em uma nova vida com mais autoestima,
            economia e liberdade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 border-transparent hover:border-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4 p-4 md:p-6">
                <div className="p-4 bg-secondary/20 rounded-full">
                  <benefit.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-headline text-xl md:text-2xl">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 md:p-6 pt-0">
                <p className="text-muted-foreground mb-4">
                  {benefit.description}
                </p>
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {benefit.number}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

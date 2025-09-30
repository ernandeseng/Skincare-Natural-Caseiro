import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Coins, CalendarClock, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Module = {
  title: string;
  icon: LucideIcon;
  content: string[];
};

const modules: Module[] = [
  {
    title: "Módulo 1 - Diagnóstico Caseiro",
    icon: FlaskConical,
    content: [
      "Teste prático de 3 minutos para identificar seu tipo de pele",
      "Tabela de combinações específicas por problema",
      "Cronograma personalizado de aplicação",
    ],
  },
  {
    title: "Módulo 2 - Arsenal de Cozinha",
    icon: BookOpen,
    content: [
      "15 receitas detalhadas com modo de preparo passo a passo",
      "Lista exata de ingredientes com quantidades precisas",
      "Tempo de aplicação e frequência para cada receita",
    ],
  },
  {
    title: "Módulo 3 - Cronograma Inteligente",
    icon: CalendarClock,
    content: [
      "Planejamento semanal adaptado para mães trabalhadoras",
      "Rotina matinal de 5 minutos",
      "Cuidados noturnos de 10 minutos",
    ],
  },
  {
    title: "Módulo 4 - Economia Máxima",
    icon: Coins,
    content: [
      "Técnicas de conservação para durar 15 dias",
      "Lista de compras mensal de R$ 47",
      "Substituições inteligentes por ingredientes mais baratos",
    ],
  },
];

export function Preview() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            📋 VEJA EXATAMENTE O QUE VOCÊ VAI RECEBER:
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            PRÉVIA EXCLUSIVA DO CONTEÚDO INTERNO:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="flex flex-col transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
            >
              <CardHeader className="flex flex-col items-center text-center gap-4">
                <module.icon className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-xl">
                  ✨ {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-left">
                  {module.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">◆</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

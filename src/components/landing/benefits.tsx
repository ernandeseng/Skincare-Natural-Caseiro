import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, Clock, DollarSign, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type Benefit = {
  title: string;
  icon: LucideIcon;
  emoji: string;
  items: string[];
};

const benefits: Benefit[] = [
  {
    title: "Transformação Visual",
    icon: Sparkles,
    emoji: "🌟",
    items: [
      "Pele visivelmente mais limpa em 15 dias",
      "Redução de 60-80% dos cravos e espinhas",
      "Oleosidade controlada naturalmente",
      "Autoestima para sair sem base",
    ],
  },
  {
    title: "Revolução Financeira",
    icon: DollarSign,
    emoji: "💰",
    items: [
      "Economia de R$ 200+ no primeiro mês",
      "Gasto mensal de apenas R$ 47",
      "Independência de produtos caros",
      "R$ 2.400 economizados por ano",
    ],
  },
  {
    title: "Praticidade Absoluta",
    icon: Clock,
    emoji: "⏰",
    items: [
      "Rotinas que cabem na agenda corrida",
      "Ingredientes disponíveis em qualquer supermercado",
      "Preparo de 5 minutos por receita",
      "Sistema automatizado de cuidados",
    ],
  },
  {
    title: "Conhecimento para Vida Toda",
    icon: BrainCircuit,
    emoji: "🔬",
    items: [
      "Domínio completo sobre skincare natural",
      "Capacidade de ensinar outras mulheres",
      "Eliminação da frustração com produtos que não funcionam",
      "Quebra do ciclo de dependência cosmética",
    ],
  },
];

export function Benefits() {
  const ingredientsImage = PlaceHolderImages.find(
    (img) => img.id === "natural-ingredients"
  );

  return (
    <section className="w-full py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            🎯 O QUE VOCÊ VAI CONQUISTAR:
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-primary transition-colors duration-300"
              >
                <CardHeader className="flex-row items-center gap-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-lg">
                    {benefit.emoji} {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            {ingredientsImage && (
              <Image
                src={ingredientsImage.imageUrl}
                alt={ingredientsImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint={ingredientsImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

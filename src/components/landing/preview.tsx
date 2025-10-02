
import { BookOpen, Coins, CalendarClock, FlaskConical } from "lucide-react";
import Image from "next/image";

const modules = [
  {
    icon: FlaskConical,
    title: "Módulo 1: O Diagnóstico Preciso",
    description: "Aprenda a identificar seu tipo de pele e suas necessidades reais com um teste simples de 3 minutos.",
  },
  {
    icon: BookOpen,
    title: "Módulo 2: O Arsenal da Cozinha",
    description: "Acesso a 15 receitas detalhadas com o passo a passo exato para cada objetivo.",
  },
  {
    icon: CalendarClock,
    title: "Módulo 3: O Cronograma Inteligente",
    description: "Um plano de 30 dias, com rotinas de 5 minutos, desenhado para quem não tem tempo a perder.",
  },
  {
    icon: Coins,
    title: "Módulo 4: A Estratégia da Economia",
    description: "Descubra como conservar suas receitas e a lista de compras ideal para economizar.",
  },
]

export function Preview() {
  return (
    <section id="preview" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex justify-center lg:order-last">
            <Image
              src="https://i.imgur.com/8aAfb2n.png"
              alt="Páginas internas do ebook Protocolo Anti-Indústria"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-contain transform hover:scale-105 transition-transform duration-500 w-full max-w-sm md:max-w-md drop-shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-3 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
                Uma Espiada no Que Te Espera
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Este não é apenas um livro digital. É um sistema completo e
                organizado para guiar você, passo a passo, em uma jornada de
                transformação.
              </p>
            </div>
            <div className="space-y-6">
              {modules.map((mod, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full mt-1 border-2 border-primary/20">
                    <mod.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-headline text-primary">
                      {mod.title}
                    </h3>
                    <p className="text-muted-foreground text-base">
                      {mod.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

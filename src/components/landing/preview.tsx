
import { BookOpen, Coins, CalendarClock, FlaskConical } from "lucide-react";
import Image from "next/image";

export function Preview() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center lg:order-last">
            <Image
              src="https://i.imgur.com/8aAfb2n.png"
              alt="Páginas internas do ebook Protocolo Anti-Indústria"
              width={600}
              height={700}
              className="rounded-lg shadow-2xl object-contain transform hover:scale-105 transition-transform duration-500 w-full max-w-sm md:max-w-md"
            />
          </div>
          <div className="space-y-6">
            <div className="space-y-3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Uma Espiada no Que Te Espera
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Este não é apenas um livro digital. É um sistema completo e
                organizado para guiar você, passo a passo, em uma jornada de
                transformação.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full mt-1">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">
                    Módulo 1: O Diagnóstico Preciso
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Aprenda a identificar seu tipo de pele e suas necessidades
                    reais com um teste simples de 3 minutos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full mt-1">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">
                    Módulo 2: O Arsenal da Cozinha
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Acesso a 15 receitas detalhadas com o passo a passo exato
                    para cada objetivo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full mt-1">
                  <CalendarClock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">
                    Módulo 3: O Cronograma Inteligente
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Um plano de 30 dias, com rotinas de 5
                    minutos, desenhado para quem não tem tempo a perder.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full mt-1">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">
                    Módulo 4: A Estratégia da Economia
                  </h3>
                  <p className="text-muted-foreground text-base">
                    Descubra como conservar suas receitas e a lista de compras
                    ideal para economizar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

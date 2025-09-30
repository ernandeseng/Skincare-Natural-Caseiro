import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";

export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="https://i.imgur.com/e2aJ5aA.png"
              alt="Selo de Garantia Tripla"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold">
              Seu Risco é ZERO. Nossa Confiança é 100%.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Nós temos tanta certeza de que o Protocolo Anti-Indústria vai
              transformar a sua pele e a sua vida que colocamos toda a
              responsabilidade em nossos ombros.
            </p>
            <div className="space-y-4 text-left p-6 bg-white/10 rounded-lg">
                <div className="flex items-start gap-4">
                    <HeartHandshake className="h-8 w-8 text-secondary flex-shrink-0 mt-1"/>
                    <p className="text-lg"><span className="font-bold text-secondary">Garantia Incondicional de 30 Dias:</span> Se por QUALQUER motivo você não ficar 100% satisfeita, basta nos enviar um único e-mail. Devolvemos todo o seu investimento na hora, sem perguntas, sem ressentimentos.</p>
                </div>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Isso mesmo. Você pode testar todo o método, aplicar as receitas,
              ver os resultados na sua pele e no seu bolso. Se não for o que
              você esperava, o prejuízo é nosso.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="w-full max-w-md mx-auto lg:mx-0 text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform !bg-secondary !text-secondary-foreground"
            >
              <ShieldCheck className="mr-2 h-6 w-6" />
              QUERO TESTAR SEM RISCO NENHUM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
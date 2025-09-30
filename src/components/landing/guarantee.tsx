import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";

const guarantees = [
  {
    title: "Garantia 1",
    description:
      "Se em 30 dias você não economizar pelo menos R$ 100 no seu orçamento de beleza, devolvemos seu dinheiro.",
  },
  {
    title: "Garantia 2",
    description:
      "Se sua pele não apresentar melhora visível em 30 dias, devolvemos seu dinheiro.",
  },
  {
    title: "Garantia 3",
    description:
      "Se você não conseguir aplicar as receitas na sua rotina corrida, devolvemos seu dinheiro.",
  },
];

export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <ShieldCheck className="h-16 w-16 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            🛡️ GARANTIA TRIPLA DE SATISFAÇÃO - 30 DIAS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Sua compra está 100% protegida!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full pt-6">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardHeader>
                  <CardTitle className="font-semibold text-primary">{guarantee.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="max-w-3xl text-lg md:text-xl !mt-12">
            <span className="font-bold">O risco é TODO NOSSO!</span> Você tem um mês inteiro para
            testar o sistema e ver os resultados na sua pele e no seu bolso. Se
            por qualquer motivo não ficar satisfeita, basta enviar um e-mail e
            devolvemos 100% do investimento.
          </p>

          <Button
            size="lg"
            className="w-full max-w-md text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <Check className="mr-2 h-6 w-6" />
            TESTAR SEM RISCOS POR 30 DIAS
          </Button>
        </div>
      </div>
    </section>
  );
}

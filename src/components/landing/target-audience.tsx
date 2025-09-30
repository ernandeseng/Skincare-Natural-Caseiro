import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const targetAudienceItems = [
  "Está cansada de gastar fortunas em produtos que prometem milagres mas não funcionam",
  "Precisa de economia no orçamento familiar sem abrir mão de se cuidar",
  "Tem rotina corrida e precisa de soluções práticas que realmente cabem na agenda",
  "Quer ingredientes naturais sem os riscos dos químicos industrializados",
  "Busca independência da indústria cosmética e suas promessas vazias",
  "Deseja autoestima para se sentir bonita naturalmente",
  "Quer ensinar as filhas sobre cuidados saudáveis e econômicos",
];

export function TargetAudience() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl md:text-3xl">
                👩 ESTE SISTEMA FOI CRIADO ESPECIALMENTE PARA VOCÊ QUE:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
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
              <p className="text-center text-lg font-semibold bg-primary/10 p-4 rounded-md">
                Se você se identificou com pelo menos 3 itens acima, o Protocolo
                Anti-Indústria foi feito EXATAMENTE para você!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

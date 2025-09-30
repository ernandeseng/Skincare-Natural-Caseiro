import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CreditCard, Gift, ShieldCheck } from "lucide-react";

export function Offer() {
  return (
    <section className="w-full py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            💎 OFERTA COMPLETA - VALOR TOTAL{" "}
            <span className="line-through">R$ 347</span>
          </h2>
        </div>
        <Card className="max-w-4xl mx-auto shadow-2xl bg-background/50">
          <CardContent className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  PRODUTO PRINCIPAL:
                </h3>
                <p className="font-semibold text-primary text-lg">
                  Protocolo Anti-Indústria
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  <li>4 Módulos Completos com 15 Receitas Testadas</li>
                  <li>Cronograma de 30 Dias Personalizado</li>
                  <li>Diagnóstico Caseiro Profissional</li>
                  <li>Sistema de Economia Máxima</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Gift className="h-6 w-6 text-primary" />
                  BÔNUS EXCLUSIVOS:
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  <li>
                    Lista de Compras Mensal{" "}
                    <span className="font-semibold">(R$ 47)</span>
                  </li>
                  <li>
                    Receitas SOS <span className="font-semibold">(R$ 67)</span>
                  </li>
                  <li>
                    Guia de Conservação{" "}
                    <span className="font-semibold">(R$ 37)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  GARANTIA TRIPLA DE SATISFAÇÃO
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  <li>30 dias para testar sem riscos</li>
                  <li>Devolução de 100% se não economizar R$ 100</li>
                  <li>Suporte completo via WhatsApp</li>
                </ul>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg text-center space-y-4">
                <p className="text-lg font-semibold">INVESTIMENTO PROMOCIONAL:</p>
                <p className="text-lg text-muted-foreground">
                  De <span className="line-through decoration-red-500 decoration-2">R$ 347</span> POR APENAS
                </p>
                <p className="text-6xl font-extrabold text-primary">R$ 27,90</p>
                <Button
                  size="lg"
                  className="w-full text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <CreditCard className="mr-2 h-6 w-6" />
                  GARANTIR MINHA OFERTA COMPLETA
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

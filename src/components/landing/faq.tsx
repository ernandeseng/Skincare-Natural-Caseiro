import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Será que ingredientes caseiros realmente funcionam?",
    answer:
      "Absolutamente! O Método Sinergia Doméstica™ utiliza os mesmos princípios ativos dos cosméticos caros, mas na forma natural. Mel tem propriedades antibacterianas, aveia é esfoliante natural, limão é antioxidante. A diferença é que você não paga pela embalagem bonita e marketing.",
  },
  {
    question: "Não tenho tempo para preparar essas receitas",
    answer:
      "Cada receita leva no máximo 5 minutos para preparar e pode ser feita enquanto você toma banho ou prepara o café. O cronograma foi desenvolvido especificamente para mães trabalhadoras com agenda apertada.",
  },
  {
    question: "E se minha pele piorar?",
    answer:
      "Todos os ingredientes são naturais e seguros. Além disso, você tem 30 dias de garantia. Se houver qualquer problema, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Como sei que vai funcionar comigo?",
    answer:
      "O sistema inclui diagnóstico caseiro que identifica seu tipo de pele e direciona para as receitas específicas. Além disso, mais de 5.000 mulheres já obtiveram resultados comprovados.",
  },
  {
    question: "Quanto tempo demora para ver resultados?",
    answer:
      "A maioria das mulheres vê melhora na oleosidade em 7 dias e redução significativa de cravos em 15 dias. Em 30 dias, a transformação é completa.",
  },
  {
    question: "É seguro comprar online?",
    answer:
      "Sim! Usamos criptografia SSL e todos os dados são protegidos. Você pode pagar com cartão ou PIX com total segurança.",
  },
];

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            ❓ DÚVIDAS MAIS COMUNS:
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  🤔 {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="w-full max-w-md text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            ELIMINAR MINHAS DÚVIDAS E COMEÇAR
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

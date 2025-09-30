import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Ingredientes caseiros realmente funcionam para a pele?",
    answer:
      "Sim! E a ciência comprova. O mel, por exemplo, é um antibacteriano e umectante natural usado há séculos. A aveia acalma a pele e o limão é rico em Vitamina C antioxidante. O Protocolo Anti-Indústria usa as propriedades cientificamente comprovadas de ingredientes naturais para entregar resultados superiores, sem os químicos e conservantes artificiais da indústria.",
  },
  {
    question: "Não tenho tempo para preparar receitas complicadas.",
    answer:
      "Nós entendemos perfeitamente. Por isso, cada receita do protocolo foi desenhada para ser preparada em no máximo 5 minutos. Além disso, o cronograma é flexível para se adaptar à sua rotina, por mais corrida que seja. É mais rápido do que esperar um app de delivery.",
  },
  {
    question: "E se minha pele for sensível e reagir mal?",
    answer:
      "A beleza do método natural é que ele é gentil com a pele. Usamos ingredientes puros, sem os aditivos que geralmente causam irritação. Além disso, você tem nossa Garantia Incondicional de 30 dias. Se sua pele não amar o protocolo, você recebe 100% do seu dinheiro de volta, sem perguntas.",
  },
  {
    question: "Como posso saber se isso vai funcionar para o meu tipo de pele?",
    answer:
      "O Módulo 1 do protocolo é inteiramente dedicado a isso! Você receberá um guia de diagnóstico caseiro, simples e eficaz, para identificar seu tipo de pele (oleosa, seca, mista, sensível) e suas necessidades específicas. A partir daí, o sistema te direciona para as receitas e rotinas exatas para você.",
  },
  {
    question: "Em quanto tempo posso esperar resultados visíveis?",
    answer:
      "Muitas das nossas alunas relatam uma melhora na textura e no brilho da pele já na primeira semana. Para resultados transformadores, como redução de acne e oleosidade, o cronograma de 30 dias é o ideal. A consistência é a chave!",
  },
  {
    question: "A compra online neste site é segura?",
    answer:
      "Completamente segura. Nossa plataforma de pagamento utiliza a mesma tecnologia de criptografia de ponta dos grandes bancos (SSL). Seus dados estão 100% protegidos. Sua única preocupação será como lidar com tantos elogios à sua nova pele.",
  },
];

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary">
            Suas Dúvidas, Nossas Respostas
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
            Sabemos que você pode ter perguntas. Aqui estão as respostas para as
            mais comuns.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg shadow-sm border border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold px-6 py-4 hover:no-underline group">
                  <span className="flex-1">{faq.question}</span>
                  <Plus className="h-6 w-6 text-primary transition-transform duration-300 group-data-[state=open]:hidden" />
                  <Minus className="h-6 w-6 text-primary transition-transform duration-300 hidden group-data-[state=open]:block" />
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground text-left px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="w-full max-w-md text-lg h-14 font-bold bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:scale-105 transition-transform"
          >
            Quero Começar Minha Transformação
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
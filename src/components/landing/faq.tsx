
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";

const faqs = [
  {
    question: "Ingredientes caseiros realmente funcionam?",
    answer:
      "Sim! E a ciência comprova. O mel, por exemplo, é um antibacteriano e umectante natural. A aveia acalma a pele. O Protocolo usa as propriedades cientificamente comprovadas de ingredientes naturais para entregar resultados superiores, sem químicos artificiais.",
  },
  {
    question: "Não tenho tempo para receitas complicadas.",
    answer:
      "Nós entendemos. Por isso, cada receita do protocolo foi desenhada para ser preparada em no máximo 5 minutos. O cronograma é flexível para se adaptar à sua rotina, por mais corrida que seja.",
  },
  {
    question: "E se minha pele for sensível?",
    answer:
      "A beleza do método natural é que ele é gentil com a pele. Usamos ingredientes puros, sem os aditivos que geralmente causam irritação. Além disso, você tem nossa Garantia Incondicional de 30 dias. Se sua pele não amar o protocolo, devolvemos seu dinheiro.",
  },
  {
    question: "Como saber se vai funcionar para mim?",
    answer:
      "O Módulo 1 do protocolo é dedicado a isso! Você receberá um guia de diagnóstico caseiro para identificar seu tipo de pele (oleosa, seca, mista, etc) e suas necessidades. A partir daí, o sistema te direciona para as receitas e rotinas exatas para você. Você também pode fazer nosso diagnóstico gratuito online!",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer:
      "Muitas alunas relatam melhora na textura e brilho da pele já na primeira semana. Para resultados transformadores, como redução de acne, o cronograma de 30 dias é o ideal. A consistência é a chave!",
  },
  {
    question: "A compra neste site é segura?",
    answer:
      "Completamente segura. Nossa plataforma de pagamento utiliza a mesma tecnologia de criptografia de ponta dos grandes bancos (SSL). Seus dados estão 100% protegidos.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(false);
  return (
    <section id="faq" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
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
                className="bg-background rounded-xl shadow-sm border border-border/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold px-6 py-5 group text-primary">
                  <span className="flex-1">{faq.question}</span>
                  <Plus className="h-6 w-6 text-secondary transition-transform duration-300 group-data-[state=open]:hidden" />
                  <Minus className="h-6 w-6 text-secondary transition-transform duration-300 hidden group-data-[state=open]:block" />
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground text-left px-6 pb-5">
                  {faq.answer}
                  {faq.question ===
                    "Como saber se vai funcionar para mim?" && (
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="text-secondary font-bold p-0 h-auto mt-2 text-left text-base"
                        >
                          Faça nosso diagnóstico gratuito online!
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md md:max-w-lg">
                        <SkinDiagnosticForm setOpen={setOpen} />
                      </DialogContent>
                    </Dialog>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex justify-center mt-12">
           <a href="#pricing">
              <Button
                variant="cta"
                size="xl"
                className="w-full max-w-lg"
              >
                Quero Começar Minha Transformação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
        </div>
      </div>
    </section>
  );
}

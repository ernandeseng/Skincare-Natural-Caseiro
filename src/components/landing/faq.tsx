
"use client";
import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { cn } from "@/lib/utils";

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
      "A beleza do método natural é que ele é gentil com a pele. Usamos ingredientes puros, sem os aditivos que geralmente causam irritação. Além disso, você tem nossa Garantia Incondicional de 7 dias. Se sua pele não amar o protocolo, devolvemos seu dinheiro.",
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

const FaqItem = ({
  faq,
  isActive,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isActive: boolean;
  onClick: () => void;
}) => {
  const [open, setOpen] = useState(false);

  const isDiagnosticQuestion = faq.question === "Como saber se vai funcionar para mim?";

  return (
    <div
      className={cn("faq-item", { active: isActive })}
    >
      <button className={cn("faq-question", { active: isActive })} onClick={onClick}>
        <span>{faq.question}</span>
        <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={cn("faq-answer", { "active": isActive })}
      >
        <div className="overflow-hidden">
          <p>
            {faq.answer.split("Você também pode fazer nosso diagnóstico gratuito online!")[0]}
            {isDiagnosticQuestion && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button
                    className="text-green-600 font-bold mt-2 hover:underline"
                  >
                    Você também pode fazer nosso diagnóstico gratuito online!
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md md:max-w-lg">
                  <SkinDiagnosticForm setOpen={setOpen} />
                </DialogContent>
              </Dialog>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};


export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    faqItems.forEach((item, index) => {
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transform = 'translateY(20px)';
      (item as HTMLElement).style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(item);
    });

    return () => {
        faqItems.forEach(item => {
            observer.unobserve(item);
        });
    }

  }, []);


  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
            <svg className="leaf-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.52,22.06,8.5,20.41,9.5,17.16a7.48,7.48,0,0,1-4-10.82,7.49,7.49,0,0,1,12.32-6,7.49,7.49,0,0,1-1.15,11.23L15.5,20.73Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                <path d="M12.5,12.55A4.49,4.49,0,0,1,8,8.05" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
            <h2>Suas Dúvidas, Nossas Respostas</h2>
            <p className="faq-subtitle">Sabemos que você pode ter perguntas. Aqui estão as respostas para as mais comuns.</p>
        </div>
        
        <div className="faq-items">
          {faqs.map((faq, index) => (
             <FaqItem
              key={index}
              faq={faq}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
        
        <div className="faq-cta">
           <a href="#pricing">
              <button className="cta-button justify-center text-base md:text-lg">
                Quero Começar Minha Transformação
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
            </a>
        </div>
      </div>
      
      <div className="leaf-decoration leaf-top-left"></div>
      <div className="leaf-decoration leaf-bottom-right"></div>
    </section>
  );
}


import { Button } from "@/components/ui/button";
import { BrainCircuit, Clock, DollarSign, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Benefit = {
  title: string;
  icon: LucideIcon;
  description: string;
  value: string;
  unit: string;
  animationDelay: string;
};

const benefits: Benefit[] = [
  {
    title: "Transformação Visível",
    icon: Sparkles,
    description: "Pele visivelmente mais limpa, radiante e com oleosidade controlada.",
    value: "15",
    unit: "Dias",
    animationDelay: "0.1s",
  },
  {
    title: "Economize Mais de R$200",
    icon: DollarSign,
    description: "Abandone produtos caros e economize mais de R$2.400 por ano.",
    value: "R$200",
    unit: "/mês",
    animationDelay: "0.2s",
  },
  {
    title: "Rotina de 5 Minutos",
    icon: Clock,
    description: "Receitas ultra-rápidas que se encaixam perfeitamente na sua vida corrida.",
    value: "5",
    unit: "Min/dia",
    animationDelay: "0.3s",
  },
  {
    title: "Conhecimento Para a Vida",
    icon: BrainCircuit,
    description: "Domine o skincare natural e nunca mais dependa dos caprichos da indústria.",
    value: "Sempre",
    unit: "",
    animationDelay: "0.4s",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-24 md:py-32 benefits-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 
            className="text-3xl md:text-5xl font-extrabold text-[#15803D]" 
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Por Que Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-[#15803D]">5.000 Mulheres</span> Escolheram o Protocolo Anti-Indústria
          </h2>
          <p 
            className="max-w-3xl text-lg md:text-xl text-[#4B5563]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          >
            Mais do que receitas naturais — você está investindo em <strong className="text-[#15803D]">autoestima</strong>, <strong className="text-[#15803D]">liberdade financeira</strong> e <strong className="text-[#15803D]">conhecimento</strong> para a vida toda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card flex flex-col items-center text-center"
            >
              <div 
                className="benefit-icon-wrapper flex items-center justify-center mb-6"
                style={{ animationDelay: benefit.animationDelay }}
              >
                <benefit.icon className="h-9 w-9 text-white" />
              </div>

              <div className="mb-4">
                  <div className="benefit-value">
                    {benefit.value}
                    {benefit.unit && <span className="benefit-value-unit">{benefit.unit}</span>}
                  </div>
              </div>
              
              <h3 
                className="text-xl font-bold text-[#1F2937] mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {benefit.title}
              </h3>
              <p className="text-[#6B7280] text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-6">
                Pronta para ter <strong className="text-[#16A34A]">todos esses benefícios?</strong>
            </p>
            <a href="#pricing">
                <Button
                    size="xl"
                    className="benefits-cta-button text-white font-bold uppercase tracking-wider group"
                >
                    Quero Começar Agora
                    <ArrowRight className="ml-2 inline-block benefits-cta-button-icon" />
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
}

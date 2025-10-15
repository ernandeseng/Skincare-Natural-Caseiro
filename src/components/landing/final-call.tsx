
"use client";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

// Inline SVG for WhatsApp icon as lucide-react doesn't have it
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16.75 13.96c.25.13.42.2.46.28.05.09.05.4.02.75-.03.35-.2.68-.38.85s-.38.3-.9.43c-.5.13-1.08.2-1.75-.1-1.13-.5-2.2-1.2-3.13-2.13-.93-.93-1.6-1.98-2.08-3.1-.25-.6-.13-1.18.1-1.68.2-.4.43-.63.68-.85.25-.2.5-.32.75-.38.25-.03.5-.03.7.02.2.05.33.08.43.08.18.03.28.05.38.2s.16.3.28.53c.1.2.13.25.13.35s0 .2-.05.33c-.05.13-.1.2-.18.3-.09.1-.18.2-.28.3s-.18.1-.28.18c-.09.05-.18.09-.2.13s-.05.1-.05.13.02.1.05.13.08.08.13.13c.2.2.45.5.75.8.3.3.58.5.88.7.05.03.1.05.13.05s.08-.02.13-.05.1-.08.13-.13.1-.1.13-.13c.03-.03.05-.05.09-.08s.08-.05.13-.05.13.02.2.05c.08.03.15.05.23.09s.13.08.18.13a.5.5 0 0 1 .12.37z" />
    <path d="M12 2 a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.9 0-3.7-.5-5.25-1.4l-5.75 1.4 1.4-5.75A10 10 0 0 1 2 12 10 10 0 0 1 12 2zm0 2a8 8 0 0 0-8 8c0 1.7.5 3.3 1.4 4.7l-1 4.25 4.25-1A8 8 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
  </svg>
);

export function FinalCall() {
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    "Olá! Tenho uma dúvida sobre o Protocolo Anti-Indústria."
  )}`;

  return (
    <footer className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">
            Ainda com Dúvidas? Fale Conosco!
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/90">
            Nossa equipe está pronta para responder qualquer pergunta que você tenha. Clique no botão abaixo e fale conosco diretamente no WhatsApp.
          </p>
           <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
           >
              <Button
                variant="cta"
                size="xl"
                className="animate-pulse-glow w-full max-w-xl bg-green-500 hover:bg-green-600"
                style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)'
                }}
              >
                <WhatsAppIcon className="mr-3 h-7 w-7" />
                CONVERSAR NO WHATSAPP
              </Button>
            </a>

          <div className="text-sm pt-6 space-y-4 text-primary-foreground">
            <div>
              <p>Pagamento Seguro | Acesso Imediato | Garantia de 30 Dias</p>
              <p className="mt-2">© 2025 Protocolo Anti-Indústria. Todos os direitos reservados.</p>
            </div>
            <p className="text-xs max-w-2xl mx-auto text-primary-foreground">
              Aviso legal: Este site não é afiliado ao Meta ou a qualquer entidade do Meta. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


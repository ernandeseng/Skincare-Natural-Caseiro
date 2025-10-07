"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, CheckCircle, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const targetAudienceItems = [
  "Cansada de gastar fortunas em produtos que não funcionam.",
  "Busca uma solução natural e segura, livre de químicos agressivos.",
  "Tem uma rotina corrida e precisa de cuidados práticos e rápidos.",
  "Quer economizar no orçamento sem abrir mão de uma pele bonita.",
  "Deseja recuperar a autoestima e a confiança para sair de cara limpa.",
  "Acredita no poder da natureza para cuidar da saúde e da beleza.",
];

export function TargetAudience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      setUserInteracted(true);
    }
  };

  return (
    <section id="target-audience" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative flex justify-center lg:order-last">
            <video
              ref={videoRef}
              src="https://www.dropbox.com/scl/fi/mmmy4wdzcd9wqi8posuzt/V-deo-do-WhatsApp-de-2025-10-06-s-21.59.08_68b06cc4.mp4?rlkey=hz5mxff1gq3uqr8afnzlc6q8g&st=h069sb7j&dl=1"
              controls={userInteracted}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-2xl object-cover aspect-[2/3] w-full max-w-sm mx-auto drop-shadow-xl"
              onClick={userInteracted ? undefined : handleVideoClick}
            />
            {!userInteracted && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white cursor-pointer rounded-lg"
                onClick={handleVideoClick}
              >
                <VolumeX className="h-12 w-12 mb-2" />
                <span className="font-semibold">Clique para ouvir</span>
              </div>
            )}
          </div>
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block rounded-lg bg-primary/10 p-4 border-2 border-primary/20">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
              Este Protocolo Foi Desenhado Para Você?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Se você se identifica com uma das situações abaixo, a
              resposta é SIM.
            </p>
            <ul className="space-y-4 text-left inline-block">
              {targetAudienceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Card className="bg-primary/10 border-primary/20 shadow-none">
              <CardContent className="p-6">
                <p className="text-center text-base font-semibold text-primary">
                  Se você se viu aqui, está no lugar certo para começar uma
                  verdadeira revolução na sua pele.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
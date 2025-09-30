"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function UrgencyCall() {
  const [timeLeft, setTimeLeft] = useState({
    hours: "08",
    minutes: "29",
    seconds: "59",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();

      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      );
      const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <Clock className="h-12 w-12 text-primary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-primary">
            A Oferta Termina em...
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-center p-4 bg-background rounded-lg shadow-md w-24">
              <p className="text-4xl font-bold text-primary">{timeLeft.hours}</p>
              <p className="text-sm text-muted-foreground">Horas</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg shadow-md w-24">
              <p className="text-4xl font-bold text-primary">
                {timeLeft.minutes}
              </p>
              <p className="text-sm text-muted-foreground">Minutos</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg shadow-md w-24">
              <p className="text-4xl font-bold text-primary">
                {timeLeft.seconds}
              </p>
              <p className="text-sm text-muted-foreground">Segundos</p>
            </div>
          </div>
          <p className="max-w-3xl text-lg md:text-xl text-primary/90">
            Não deixe para amanhã a transformação que você pode começar HOJE!
            Seu acesso ao Protocolo com preço especial é LIBERADO
            INSTANTANEAMENTE após a confirmação do pagamento.
          </p>
          <Button
            size="lg"
            className="w-full max-w-md text-lg h-14 font-bold shadow-lg hover:scale-105 transition-transform !bg-primary !text-primary-foreground"
          >
            <Rocket className="mr-2 h-6 w-6" />
            GARANTIR ACESSO IMEDIATO
          </Button>
        </div>
      </div>
    </section>
  );
}
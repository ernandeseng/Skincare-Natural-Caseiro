
"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";

export function UrgencyCall() {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
   const [open, setOpen] = useState(false);

  useEffect(() => {
    // This will only run on the client, after initial hydration
    const getEndTime = () => {
      let endTime = localStorage.getItem('countdownEndTime');
      if (!endTime) {
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);
        endTime = String(endOfDay.getTime());
        localStorage.setItem('countdownEndTime', endTime);
      }
      return Number(endTime);
    }
    
    const endTime = getEndTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff > 0) {
        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <Clock className="h-12 w-12 text-primary" />
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            A Oferta Termina em...
          </h2>
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="text-center p-3 md:p-4 bg-background rounded-lg shadow-md w-24 md:w-28">
              <p className="text-3xl md:text-5xl font-bold text-primary">{timeLeft.hours}</p>
              <p className="text-xs text-muted-foreground">Horas</p>
            </div>
             <p className="text-3xl md:text-5xl font-bold text-primary">:</p>
            <div className="text-center p-3 md:p-4 bg-background rounded-lg shadow-md w-24 md:w-28">
              <p className="text-3xl md:text-5xl font-bold text-primary">
                {timeLeft.minutes}
              </p>
              <p className="text-xs text-muted-foreground">Minutos</p>
            </div>
             <p className="text-3xl md:text-5xl font-bold text-primary">:</p>
            <div className="text-center p-3 md:p-4 bg-background rounded-lg shadow-md w-24 md:w-28">
              <p className="text-3xl md:text-5xl font-bold text-primary">
                {timeLeft.seconds}
              </p>
              <p className="text-xs text-muted-foreground">Segundos</p>
            </div>
          </div>
          <p className="max-w-3xl text-lg md:text-xl text-primary/90">
            Não deixe para amanhã a transformação que você pode começar HOJE!
            Acesso com preço especial liberado instantaneamente.
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="cta"
                size="xl"
                className="w-full max-w-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                GARANTIR ACESSO IMEDIATO
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md md:max-w-lg">
              <SkinDiagnosticForm setOpen={setOpen} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

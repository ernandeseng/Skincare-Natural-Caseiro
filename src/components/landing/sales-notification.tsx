
"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const salesData = [
  { name: "Ana P.", location: "São Paulo, SP" },
  { name: "Juliana M.", location: "Rio de Janeiro, RJ" },
  { name: "Fernanda L.", location: "Belo Horizonte, MG" },
  { name: "Carlos S.", location: "Salvador, BA" },
  { name: "Mariana C.", location: "Curitiba, PR" },
  { name: "Pedro A.", location: "Fortaleza, CE" },
  { name: "Gabriela F.", location: "Brasília, DF" },
  { name: "Lucas R.", location: "Recife, PE" },
  { name: "Beatriz V.", location: "Porto Alegre, RS" },
  { name: "Ricardo G.", location: "Manaus, AM" },
  { name: "Larissa T.", location: "Goiânia, GO" },
  { name: "Thiago B.", location: "Belém, PA" },
  { name: "Camila V.", location: "Florianópolis, SC" },
  { name: "Rodrigo N.", location: "Vitória, ES" },
  { name: "Patrícia O.", location: "Campo Grande, MS" },
  { name: "Marcos E.", location: "João Pessoa, PB" },
  { name: "Amanda J.", location: "Teresina, PI" },
  { name: "Felipe K.", location: "Natal, RN" },
  { name: "Bruna Q.", location: "Maceió, AL" },
  { name: "Vinicius Z.", location: "Aracaju, SE" },
];

export function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const lastIndexRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const showNotification = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * salesData.length);
      } while (randomIndex === lastIndexRef.current);

      lastIndexRef.current = randomIndex;
      setCurrentSale(salesData[randomIndex]);
      setIsVisible(true);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Schedule the next notification
      scheduleNext();
    };

    const scheduleNext = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      // Random interval between 8 and 15 seconds
      const randomInterval = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;
      timeoutRef.current = setTimeout(showNotification, randomInterval);
    };

    // Initial notification after a short delay
    const initialTimeout = setTimeout(showNotification, 5000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-background/80 p-4 shadow-lg backdrop-blur-md">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <ShoppingCart className="h-5 w-5" />
        </div>
        <div>
          <p className="font-bold text-sm text-foreground">
            Compra Recente!
          </p>
          <p className="text-sm text-muted-foreground">
            {currentSale.name} de {currentSale.location} acabou de comprar o protocolo.
          </p>
        </div>
      </div>
    </div>
  );
}

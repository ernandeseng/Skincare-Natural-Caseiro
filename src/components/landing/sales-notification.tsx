
"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

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
];

export function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      let randomIndex = lastIndex;
      // Garante que o próximo índice seja diferente do anterior
      while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * salesData.length);
      }
      
      setLastIndex(randomIndex);
      setCurrentSale(salesData[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // A notificação fica visível por 5 segundos
    };

    // Mostra a primeira notificação após um pequeno atraso
    const initialTimeout = setTimeout(showNotification, 5000);

    // Em seguida, mostra as notificações periodicamente
    const interval = setInterval(showNotification, 10000); // Mostra uma nova notificação a cada 10 segundos

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [lastIndex]);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-xl border border-primary/20 bg-background/80 p-4 shadow-lg backdrop-blur-md">
        <div className="rounded-full bg-primary/20 p-3">
          <ShoppingCart className="h-5 w-5 text-primary" />
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

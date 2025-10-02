
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
];

export function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesData[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * salesData.length);
      setCurrentSale(salesData[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Notification is visible for 5 seconds
    };

    // Show first notification after a short delay
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then, show notifications periodically
    const interval = setInterval(showNotification, 10000); // Show a new notification every 10 seconds (5s visible + 5s hidden)

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-xl border bg-background/80 p-4 shadow-lg backdrop-blur-md">
        <div className="rounded-full bg-secondary/20 p-3">
          <ShoppingCart className="h-5 w-5 text-secondary" />
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

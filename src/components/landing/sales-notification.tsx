
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
];

export function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const lastIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scheduleNextNotification = () => {
      // Gera um tempo aleatório entre 8 e 15 segundos
      const randomInterval = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        showNotification();
        scheduleNextNotification();
      }, randomInterval);
    };

    const showNotification = () => {
      let randomIndex = lastIndexRef.current;
      // Garante que o próximo índice seja diferente do anterior
      while (randomIndex === lastIndexRef.current) {
        randomIndex = Math.floor(Math.random() * salesData.length);
      }
      
      lastIndexRef.current = randomIndex;
      setCurrentSale(salesData[randomIndex]);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // A notificação fica visível por 5 segundos
    };

    // Mostra a primeira notificação após um pequeno atraso e agenda a próxima
    setTimeout(() => {
      showNotification();
      scheduleNextNotification();
    }, 5000);

    // Limpa o timeout quando o componente é desmontado
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Executa apenas uma vez

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


"use client";

import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#preview", label: "O Que é" },
  { href: "#benefits", label: "Benefícios" },
  { href: "#offer", label: "Oferta" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" onClick={() => scrollTo('#hero')}>
          <Gem className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-xl text-primary hidden sm:inline">
            Protocolo Anti-Indústria
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

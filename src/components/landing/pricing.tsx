
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Star } from "lucide-react";

export function Pricing() {
  const [open, setOpen] = useState(false);

  const basicPlanFeatures = [
    { text: "Protocolo", included: true },
    { text: "Guia de Compras", included: false },
    { text: "Receitas SOS", included: false },
    { text: "Manual", included: false },
  ];

  const completePlanFeatures = [
    { text: "Protocolo", included: true },
    { text: "Guia de Compras", included: true },
    { text: "Receitas SOS", included: true },
    { text: "Manual de Conservação", included: true },
  ];

  return (
    <section id="pricing" className="w-full pb-20 md:pb-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            Escolha o Plano Perfeito Para Você
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-muted-foreground">
            Temos duas opções para você começar sua jornada rumo a uma pele incrível.
          </p>
        </div>

        <div className="pricing-container md:grid md:grid-cols-2 md:gap-8 md:max-w-4xl md:items-start">
          {/* Card Básico */}
          <Card className="pricing-card plano-basico">
            <CardHeader className="card-header">
              <h3 className="titulo-plano">Plano Básico</h3>
              <p className="descricao-plano">Acesso essencial ao método.</p>
            </CardHeader>
            <CardContent className="card-body">
              <div className="preco-container">
                <p className="preco-valor">
                  <span className="preco-simbolo">R$</span>19
                  <span className="preco-centavos">,90</span>
                </p>
              </div>
              <ul className="lista-beneficios">
                {basicPlanFeatures.map((feature, index) => (
                  <li key={index} className={`beneficio-item ${feature.included ? 'incluido' : 'nao-incluido'}`}>
                    <span className="beneficio-texto">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="card-footer">
              <a href="https://www.ggcheckout.com/checkout/v2/0lolkNve678UBB9pTplo" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-basico">
                  Escolher Básico
                </button>
              </a>
            </div>
          </Card>

          {/* Card Completo (Mais Atraente) */}
          <Card className="pricing-card plano-completo">
            <div className="badge-popular">
              ⭐ MAIS POPULAR
            </div>
            <CardHeader className="card-header">
              <h3 className="titulo-plano">Plano Completo</h3>
              <p className="descricao-plano">Acesso total com todos os bônus!</p>
            </CardHeader>
            <CardContent className="card-body">
              <p className="preco-antigo">De R$ 348,00 por apenas:</p>
              <div className="preco-container">
                <p className="preco-valor">
                  <span className="preco-simbolo">R$</span>27
                  <span className="preco-centavos">,90</span>
                </p>
              </div>
              <p className="preco-parcelas">ou em até 3x no cartão</p>

              <div className="urgencia-badge">
                ⚡ Últimas 47 vagas com bônus!
              </div>

              <ul className="lista-beneficios">
                {completePlanFeatures.map((feature, index) => (
                  <li key={index} className={`beneficio-item ${feature.included ? 'incluido' : 'nao-incluido'}`}>
                    <span className="beneficio-texto">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="social-proof-mini">
                👥 <strong>2.847 pessoas</strong> já compraram
              </div>
            </CardContent>
            <div className="card-footer">
              <a href="https://www.ggcheckout.com/checkout/v2/30wAKDKIxVLqpbUF4sUH" target="_blank" rel="noopener noreferrer" className="w-full">
                <button className="btn-completo">
                  QUERO MEU KIT COMPLETO
                </button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

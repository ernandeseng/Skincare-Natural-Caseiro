
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SkinDiagnosticForm } from "./skin-diagnostic-form";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export function Pricing() {
  const [open, setOpen] = useState(false);
  return (
    <section id="pricing" className="w-full pb-20 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-lg">
                <div className="offer-box">
                    <Card className="bg-primary/5 p-6 md:p-8 rounded-xl text-center space-y-4 shadow-2xl border-2 border-secondary">
                        <h3 className="text-2xl font-headline font-bold text-primary">Oferta Especial de Lançamento</h3>
                        <p className="text-md font-semibold text-muted-foreground">
                            Leve tudo isso hoje (de <span className="line-through">R$ 348,00</span>) por apenas:
                        </p>
                        <p className="text-6xl font-extrabold text-primary current-price">R$ 27,90</p>
                        <p className="font-semibold text-md -mt-2 installment">ou 12x de R$ 2,79</p>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                            <Button
                                variant="cta"
                                size="xl"
                                className="w-full"
                            >
                                <CreditCard className="mr-2 h-6 w-6" />
                                QUERO MEU KIT COMPLETO
                            </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md md:max-w-lg">
                            <SkinDiagnosticForm setOpen={setOpen} />
                            </DialogContent>
                        </Dialog>
                        <p className="text-xs text-muted-foreground pt-2">Oferta por tempo limitado. Acesso imediato.</p>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Send } from "lucide-react";
import {
  diagnoseSkin,
  DiagnoseSkinInput,
  DiagnoseSkinOutput,
} from "@/ai/flows/personalized-skin-diagnostic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  lifestyle: z.string().min(10, {
    message: "Por favor, descreva seu estilo de vida com mais detalhes.",
  }),
  diet: z.string().min(10, {
    message: "Por favor, descreva sua dieta com mais detalhes.",
  }),
  skinConcerns: z.string().min(10, {
    message: "Por favor, descreva suas preocupações com a pele com mais detalhes.",
  }),
});

type SkinDiagnosticFormProps = {
  setOpen: (open: boolean) => void;
};

export function SkinDiagnosticForm({ setOpen }: SkinDiagnosticFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiagnoseSkinOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lifestyle: "",
      diet: "",
      skinConcerns: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const diagnosticResult = await diagnoseSkin(values as DiagnoseSkinInput);
      setResult(diagnosticResult);
    } catch (error) {
      console.error("Error during skin diagnosis:", error);
      toast({
        variant: "destructive",
        title: "Erro no Diagnóstico",
        description:
          "Não foi possível processar seu diagnóstico. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-lg font-medium text-muted-foreground">
          Analisando suas respostas...
        </p>
        <p className="text-center text-sm text-muted-foreground">
          Nossa IA está montando sua rotina personalizada. Isso pode levar alguns
          instantes.
        </p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="p-2">
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-secondary" />
            Seu Diagnóstico Personalizado
          </DialogTitle>
          <DialogDescription>
            Com base nas suas respostas, aqui está sua análise inicial:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tipo de Pele Identificado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-primary text-xl">{result.skinType}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Receitas Recomendadas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {result.recommendedRecipes.map((recipe, index) => (
                  <li key={index}>{recipe}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dicas Adicionais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{result.additionalTips}</p>
            </CardContent>
          </Card>
        </div>
        <DialogFooter className="mt-6">
          <Button
            onClick={() => setOpen(false)}
            className="w-full bg-secondary text-secondary-foreground"
          >
            Gostei! Quero o Protocolo Completo
          </Button>
        </DialogFooter>
      </div>
    );
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">
          Diagnóstico Gratuito
        </DialogTitle>
        <DialogDescription>
          Responda 3 perguntas para receber uma recomendação personalizada da
          nossa IA.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="lifestyle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Como é seu estilo de vida?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex: Sou sedentário, trabalho em escritório com ar condicionado, durmo cerca de 6h por noite..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Como é sua alimentação?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex: Como bastante fast-food, bebo pouca água, consumo muito açúcar..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skinConcerns"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quais suas principais queixas com a pele?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex: Tenho muita acne na zona T, pele oleosa, alguns cravos e manchas de espinhas antigas."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analisando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Ver Minha Recomendação
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}

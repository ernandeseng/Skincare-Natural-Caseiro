'use server';

/**
 * @fileOverview This file defines the personalized skin diagnostic flow.
 *
 * The flow takes user input about their lifestyle, diet, and skin concerns,
 * and uses AI to provide personalized skincare routine recommendations from the Protocol Anti-Industria method.
 *
 * @exports {
 *   diagnoseSkin,
 *   DiagnoseSkinInput,
 *   DiagnoseSkinOutput
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnoseSkinInputSchema = z.object({
  lifestyle: z.string().describe('Description of your daily lifestyle.'),
  diet: z.string().describe('Description of your typical diet.'),
  skinConcerns: z.string().describe('Specific skin concerns and issues.'),
});

export type DiagnoseSkinInput = z.infer<typeof DiagnoseSkinInputSchema>;

const DiagnoseSkinOutputSchema = z.object({
  skinType: z.string().describe('The identified skin type (e.g., oily, dry, sensitive).'),
  recommendedRecipes: z.array(z.string()).describe('A list of recommended skincare recipes from the Protocol Anti-Industria method.'),
  additionalTips: z.string().describe('Additional tips for skincare based on the analysis.'),
});

export type DiagnoseSkinOutput = z.infer<typeof DiagnoseSkinOutputSchema>;

export async function diagnoseSkin(input: DiagnoseSkinInput): Promise<DiagnoseSkinOutput> {
  return diagnoseSkinFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnoseSkinPrompt',
  input: {schema: DiagnoseSkinInputSchema},
  output: {schema: DiagnoseSkinOutputSchema},
  prompt: `You are an AI skincare expert specializing in the Protocol Anti-Industria method.
  Analyze the user's input regarding their lifestyle, diet, and skin concerns to provide personalized skincare routine recommendations.

  Lifestyle: {{{lifestyle}}}
  Diet: {{{diet}}}
  Skin Concerns: {{{skinConcerns}}}

  Based on this information, identify the user's skin type, recommend specific skincare recipes from the Protocol Anti-Industria method, and provide additional skincare tips.

  Ensure that the recipes are tailored to address the user's specific concerns and are suitable for their skin type.`,
});

const diagnoseSkinFlow = ai.defineFlow(
  {
    name: 'diagnoseSkinFlow',
    inputSchema: DiagnoseSkinInputSchema,
    outputSchema: DiagnoseSkinOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

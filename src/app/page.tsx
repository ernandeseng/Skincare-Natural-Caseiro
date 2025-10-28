
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { SalesNotification } from "@/components/landing/sales-notification";
import dynamic from "next/dynamic";

const Preview = dynamic(() => import('@/components/landing/preview').then(mod => mod.Preview));
const Benefits = dynamic(() => import('@/components/landing/benefits').then(mod => mod.Benefits));
const Bonus = dynamic(() => import('@/components/landing/bonus').then(mod => mod.Bonus));
const TargetAudience = dynamic(() => import('@/components/landing/target-audience').then(mod => mod.TargetAudience));
const Pricing = dynamic(() => import('@/components/landing/pricing').then(mod => mod.Pricing));
const Faq = dynamic(() => import('@/components/landing/faq').then(mod => mod.Faq));
const FinalCall = dynamic(() => import('@/components/landing/final-call').then(mod => mod.FinalCall));


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Preview />
        <Benefits />
        <Bonus />
        <TargetAudience />
        <Pricing />
        <Faq />
        <FinalCall />
      </main>
      <SalesNotification />
    </div>
  );
}

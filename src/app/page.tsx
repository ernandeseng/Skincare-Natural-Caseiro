
import { Benefits } from "@/components/landing/benefits";
import { Bonus } from "@/components/landing/bonus";
import { Faq } from "@/components/landing/faq";
import { FinalCall } from "@/components/landing/final-call";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Preview } from "@/components/landing/preview";
import { SalesNotification } from "@/components/landing/sales-notification";
import { TargetAudience } from "@/components/landing/target-audience";

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

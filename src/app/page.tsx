
import { Benefits } from "@/components/landing/benefits";
import { Faq } from "@/components/landing/faq";
import { FinalCall } from "@/components/landing/final-call";
import { Guarantee } from "@/components/landing/guarantee";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { Pricing } from "@/components/landing/pricing";
import { Preview } from "@/components/landing/preview";
import { SalesNotification } from "@/components/landing/sales-notification";
import { Storytelling } from "@/components/landing/storytelling";
import { TargetAudience } from "@/components/landing/target-audience";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Storytelling />
        <Preview />
        <Benefits />
        <TargetAudience />
        <Offer />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <Faq />
        <FinalCall />
      </main>
      <SalesNotification />
    </div>
  );
}


import { Benefits } from "@/components/landing/benefits";
import { Faq } from "@/components/landing/faq";
import { FinalCall } from "@/components/landing/final-call";
import { Guarantee } from "@/components/landing/guarantee";
import { Hero } from "@/components/landing/hero";
import { Offer } from "@/components/landing/offer";
import { Preview } from "@/components/landing/preview";
import { SalesNotification } from "@/components/landing/sales-notification";
import { TargetAudience } from "@/components/landing/target-audience";
import { UrgencyCall } from "@/components/landing/urgency-call";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <main className="flex-1">
        <Hero />
        <Preview />
        <Benefits />
        <UrgencyCall />
        <TargetAudience />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCall />
      </main>
      <SalesNotification />
    </div>
  );
}

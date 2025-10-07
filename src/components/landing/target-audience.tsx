"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const testimonials = [
  {
    videoUrl: "https://www.dropbox.com/scl/fi/mmmy4wdzcd9wqi8posuzt/V-deo-do-WhatsApp-de-2025-10-06-s-21.59.08_68b06cc4.mp4?rlkey=hz5mxff1gq3uqr8afnzlc6q8g&st=h069sb7j&dl=1",
    name: "Maria S.",
    location: "Belo Horizonte, MG",
  },
  {
    videoUrl: "https://www.dropbox.com/scl/fi/4n5s77j3w79azs0ftar8q/59d0bf74-3187-4457-93b3-ef28255b080e.mp4?rlkey=45966q6lurf011gucyho4p8mo&st=37ex4wju&dl=1",
    name: "Ana P.",
    location: "São Paulo, SP",
  },
  {
    videoUrl: "https://www.dropbox.com/scl/fi/f7w9rvuhfy6htv7f7qv8j/WhatsApp-Video-2025-10-07-at-10.26.46.mp4?rlkey=jxca9m3qh3289bw8nluzfzucw&st=qyslepsy&dl=1",
    name: "Julia M.",
    location: "Rio de Janeiro, RJ",
  },
];

export function TargetAudience() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      
      // Pause all videos
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
        }
      });
      
      // Play the current video if it exists
      const currentVideo = videoRefs.current[newIndex];
      if (currentVideo) {
         // currentVideo.play();
      }
    };

    api.on("select", onSelect)
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])


  return (
    <section id="target-audience" className="video-carousel-section w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-header text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 p-4 border-2 border-primary/20 mb-4">
            <UserCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">
            O Que Nossas Clientes Estão Dizendo
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mt-4">
            Veja os resultados reais de quem já se libertou da indústria.
          </p>
        </div>

        <Carousel setApi={setApi} className="carousel-container relative max-w-lg mx-auto">
          <CarouselContent className="carousel-wrapper">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="carousel-slide">
                 <div className="video-container">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={testimonial.videoUrl}
                      controls
                      playsInline
                      className="rounded-lg shadow-2xl object-cover aspect-[9/16] w-full mx-auto drop-shadow-xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-info">
                    <div className="compra-recente">
                      <span className="badge-compra">🛍️ Compra Recente!</span>
                      <p className="cliente-nome">{testimonial.name} de {testimonial.location}</p>
                      <p className="cliente-acao">acabou de comprar o protocolo.</p>
                    </div>
                  </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-arrow carousel-arrow-left" />
          <CarouselNext className="carousel-arrow carousel-arrow-right" />
        </Carousel>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === current ? "active" : ""}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir para vídeo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

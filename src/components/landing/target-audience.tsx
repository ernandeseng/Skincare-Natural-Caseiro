
"use client";

import { UserCheck, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Play, VolumeX } from "lucide-react";
import { Button } from "../ui/button";

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
  {
    videoUrl: "https://www.dropbox.com/scl/fi/6j6mjj48l8c8zptr8ub0u/573e8a5d-5b6c-4526-a6a0-ba3d7737a5cc.mp4?rlkey=ps1a3vwtnx890vdutzct84oy8&st=h5z3wpy3&raw=1",
    name: "Carla B.",
    location: "Curitiba, PR",
  },
  {
    videoUrl: "https://www.dropbox.com/scl/fi/uy08o94godaxga9e4kp9e/59e31251-25e1-455f-b88f-ae29aa9d6779.mp4?rlkey=0dsutapa9xebc34vcm4qtn8xj&st=6vzcq2m9&raw=1",
    name: "Beatriz L.",
    location: "Fortaleza, CE",
  },
];

export function TargetAudience() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlayPause = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (currentVideo.paused) {
        currentVideo.play();
        setIsPlaying(true);
    } else {
        currentVideo.pause();
        setIsPlaying(false);
    }
  };
  
  const handleVideoClick = (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if(isMuted) {
        videoRefs.current.forEach(video => {
            if(video) video.muted = false;
        });
        setIsMuted(false);
        currentVideo.currentTime = 0;
        currentVideo.play();
        setIsPlaying(true);
    } else {
        togglePlayPause(index);
    }
  }

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      setIsPlaying(true); // Assume playing when slide changes

      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === newIndex) {
            video.currentTime = 0;
            video.play().catch(error => console.error("Error trying to play video on select:", error));
          } else {
            video.pause();
          }
        }
      });
    };
    
    api.on("select", onSelect);
    
    const firstVideo = videoRefs.current[0];
    if(firstVideo) {
      firstVideo.play().catch(error => console.error("Error playing first video:", error));
    }
  
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);


  return (
    <section id="target-audience" className="video-carousel-section w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-5xl font-extrabold text-primary mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Elas Pararam de Gastar R$500/Mês e Conseguiram Pele Perfeita — Veja Como
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Resultados reais, transformações comprovadas. Veja o que acontece
          </p>
        </div>

        <Carousel setApi={setApi} className="relative max-w-lg mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                 <div className="video-container" onClick={() => handleVideoClick(index)}>
                    {isMuted && (
                      <div className="video-overlay">
                        <div className="text-center">
                          <VolumeX className="h-10 w-10 mx-auto" />
                          <p className="font-semibold mt-2">Clique para ouvir</p>
                        </div>
                      </div>
                    )}
                    {(!isPlaying && !isMuted && current === index) && (
                      <div className="video-play-icon">
                        <Play className="h-16 w-16 text-white fill-white" />
                      </div>
                    )}
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={testimonial.videoUrl}
                      playsInline
                      autoPlay
                      muted
                      loop
                      className="rounded-lg shadow-2xl object-cover aspect-[9/16] w-full mx-auto drop-shadow-xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="video-info">
                    <div className="compra-recente">
                      <p>
                        <span className="badge-compra">🛍️ Compra Recente!</span>
                        {' '}
                        <span className="cliente-nome">{testimonial.name}</span> de {testimonial.location}
                      </p>
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
              className={`indicator-dot ${index === current ? "active" : ""}`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir para vídeo ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-cta-container">
            <h3 className="testimonials-cta-headline">Sua Transformação Começa Agora</h3>
            <p className="testimonials-cta-subtext">
                Junte-se a mais de 5.000 mulheres que já transformaram 
                sua pele com o Protocolo Anti-Indústria
            </p>
            <a href="#pricing" className="w-full flex justify-center">
                <Button size="xl" className="testimonials-cta-button group">
                    QUERO COMEÇAR MINHA TRANSFORMAÇÃO
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                </Button>
            </a>
        </div>

      </div>
    </section>
  );
}



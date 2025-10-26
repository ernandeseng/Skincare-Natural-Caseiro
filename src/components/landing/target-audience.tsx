
"use client";

import { UserCheck } from "lucide-react";
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
            O Que Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16A34A] to-[#15803D]">Clientes Estão</span> Dizendo
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Veja os resultados reais de quem já se libertou da indústria.
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
      </div>
    </section>
  );
}

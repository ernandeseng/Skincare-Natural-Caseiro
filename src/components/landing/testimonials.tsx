
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        quote: "Fiz minha primeira receita no segundo dia e já vi diferença! Minha pele está menos oleosa e os cravos diminuíram muito. Economizei mais de R$ 200!",
        author: "Maria Clara",
        location: "Brasília, DF",
        avatar: "MC",
    },
    {
        quote: "Eu estava cética, mas o protocolo é incrível. Minha pele nunca esteve tão macia. As manchas de acne estão sumindo. Recomendo demais!",
        author: "Juliana P.",
        location: "São Paulo, SP",
        avatar: "JP",
    },
    {
        quote: "Finalmente uma solução que funciona e não me leva à falência! É muito prático e os resultados são reais. Minha autoestima agradece!",
        author: "Fernanda S.",
        location: "Rio de Janeiro, RJ",
        avatar: "FS",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary text-center">
                    O que Nossas Alunas Dizem
                </h2>
                <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-muted-foreground mt-4 mb-16">
                    Resultados reais de mulheres que se libertaram da indústria de cosméticos.
                </p>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="testimonial-card">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="stars">{"⭐".repeat(5)}</div>
                                <p className="testimonial-text">
                                    "{testimonial.quote}"
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.avatar}</div>
                                    <div className="author-info">
                                        <strong>{testimonial.author}</strong>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

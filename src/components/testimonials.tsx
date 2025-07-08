import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/isMobile";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Riverside Hotel Group",
    logo: "/placeholder.svg?height=60&width=120",
    quote:
      "Aquacheck's thorough legionella assessment gave us complete peace of mind. Their professional approach and detailed reporting exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Thompson",
    company: "Thompson Manufacturing",
    logo: "/placeholder.svg?height=60&width=120",
    quote:
      "The water quality testing service was comprehensive and the results were delivered promptly. Highly recommend their expertise.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Roberts",
    company: "City Council",
    logo: "/placeholder.svg?height=60&width=120",
    quote:
      "Professional, reliable, and thorough. Aquacheck has been our trusted partner for water safety compliance for over 3 years.",
    rating: 5,
  },
];

export default function Testimonials() {
    const isMobile = useIsMobile();
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();

        setScrollSnaps(emblaApi.scrollSnapList());

        return () => {
        emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);


    return (
        <section className="py-16 px-4 md:px-0 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">What Our Clients Say</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Trusted by businesses across the UK for professional water quality services
                    </p>
                </div>

                {isMobile ? (
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="shrink-0 basis-[90%] px-2 snap-center"
                            >
                            <Card className={`w-full max-w-md mx-auto rounded-3xl`}>
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <blockquote className="text-slate-700 mb-6 italic">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex items-center justify-between">
                                        <div>
                                        <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                        <div className="text-sm text-slate-600">{testimonial.company}</div>
                                        </div>
                                        <img
                                        src={testimonial.logo}
                                        alt={`${testimonial.company} logo`}
                                        className="h-8 opacity-60"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                    </div>
                </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {testimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="hover:shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-slate-700 mb-6 italic">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center justify-between">
                                <div>
                                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                <div className="text-sm text-slate-600">{testimonial.company}</div>
                                </div>
                                <img
                                src={testimonial.logo}
                                alt={`${testimonial.company} logo`}
                                className="h-8 opacity-60"
                                />
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
                )}

                {isMobile && (
                    <div className="flex flex-col items-center gap-4 mt-6">
                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                                    index === selectedIndex ? "bg-cyan-600" : "bg-gray-400"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
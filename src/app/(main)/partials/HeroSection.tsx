import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sunflowerHero.jpg"
          alt="School campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-5xl mx-auto leading-tight text-balance">
          Nurturing Excellence from Kindergarten to High School
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where young minds flourish, character is built, and futures are shaped
          through innovative education and compassionate guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Schedule a Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

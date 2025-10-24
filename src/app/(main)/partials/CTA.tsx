import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
          Begin Your Journey with Us
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Discover how Sunflower School can provide your child with an exceptional educational experience that prepares
          them for a bright future.
        </p>
        <Button size="lg" variant="primary" className="text-base text-white" asChild>
          <Link href="/contact" className="bg-primary">Schedule a Campus Tour</Link>
        </Button>
      </div>
    </section>
  )
}

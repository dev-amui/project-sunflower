
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold mb-6 text-balance">About Oakwood Academy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 50 years, we've been nurturing young minds and shaping future leaders through excellence in
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To provide a comprehensive, challenging, and nurturing educational environment that empowers students to
                reach their full potential academically, socially, and emotionally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in fostering critical thinking, creativity, and character development while preparing
                students for success in an ever-changing world.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be a leading educational institution recognized for academic excellence, innovative teaching methods,
                and the development of well-rounded individuals who contribute positively to society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a community where every student discovers their passion and develops the skills to pursue
                their dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Striving for the highest standards in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building strong relationships and fostering collaboration
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Embracing new ideas and creative approaches to learning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Acting with honesty, respect, and responsibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-semibold mb-8 text-center">Our History</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1973, Oakwood Academy began as a small kindergarten with just 25 students and a vision to
                provide exceptional education in a nurturing environment.
              </p>
              <p>
                Over the decades, we've grown into a comprehensive K-12 institution serving over 800 students, while
                maintaining our commitment to personalized attention and academic excellence.
              </p>
              <p>
                Today, our alumni have gone on to attend prestigious universities and make meaningful contributions in
                fields ranging from medicine and law to arts and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how Oakwood Academy can help your child thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}

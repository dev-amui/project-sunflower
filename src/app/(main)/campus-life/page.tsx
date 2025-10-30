import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Music, Palette, Trophy, Theater, Microscope, HeartPulse, Newspaper } from "lucide-react"

export default function CampusLifePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="font-serif text-5xl lg:text-6xl font-semibold mb-6 text-balance">Campus Life</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Beyond academics, Sunflower School offers a vibrant community where students explore their passions and
                            develop lifelong friendships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Extracurricular Activities */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="font-serif text-4xl font-semibold mb-12 text-center">Extracurricular Activities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Music className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Music</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Brass Band, Jazz Drums, Atentenban / Percussion
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Palette className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Creative Crafts</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Baking Club, Beading Club, Crocheting and Sewing
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Theater className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Performing Arts & Culture</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Drama, Choreography, Cultural Club and Pan African
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Newspaper className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Media & Communication</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Sign Language, Journalism and Photography
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Sports & Discipline</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Sport Club and Cadet
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HeartPulse className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Health, Safety & Environment</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Friends of the Earth, Animal Rearing, Health and Safety
                            </p>
                        </div>
                         <div className="text-center p-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Microscope className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">STEM & Academics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                STEM Club, Debaters and Scrabble
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="font-serif text-4xl font-semibold mb-12 text-center">Our Facilities</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-6">
                            <h3 className="font-semibold text-xl mb-3">Modern Classrooms</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Bright, spacious classrooms equipped with the latest technology and flexible learning spaces
                            </p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-xl mb-3">Science Labs</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                State-of-the-art laboratories for biology, chemistry, and physics with advanced equipment
                            </p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-xl mb-3">Library & Media Center</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Extensive collection of books, digital resources, and collaborative study spaces
                            </p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-xl mb-3">Cafeteria</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Healthy, nutritious meals prepared fresh daily with vegetarian and allergy-friendly options
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Life */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-serif text-4xl font-semibold mb-6">A Day in the Life</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            From morning assembly to afternoon activities, every day at Sunflower School is filled with opportunities
                            for learning, growth, and connection. Our students enjoy a balanced schedule that includes rigorous
                            academics, creative exploration, physical activity, and social engagement.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            With small class sizes and dedicated faculty, students receive personalized attention and support
                            throughout their journey. Our vibrant community celebrates diversity, encourages collaboration, and
                            fosters a sense of belonging for every student.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h2 className="font-serif text-4xl font-semibold mb-6">Experience Sunflower School</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Schedule a campus tour to see our facilities and meet our community
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Schedule a Visit</Link>
                    </Button>
                </div>
            </section>

        </main>
    )
}

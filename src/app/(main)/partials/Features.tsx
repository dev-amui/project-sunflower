import { Card } from "@/components/ui/card"

const features = [
  {
    image: "/teacher-mentoring-student-one-on-one.jpg",
    title: "Personalized Learning",
    description:
      "Small class sizes and individualized attention ensure every student receives the support they need to excel.",
  },
  {
    image: "/students-in-science-laboratory-conducting-experime.jpg",
    title: "STEM Excellence",
    description:
      "Cutting-edge science, technology, engineering, and mathematics programs prepare students for tomorrow's challenges.",
  },
  {
    image: "/students-performing-arts-theater-stage.jpg",
    title: "Arts & Culture",
    description:
      "Comprehensive arts programs foster creativity, self-expression, and cultural appreciation across all grade levels.",
  },
]

export function Features() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">
            A Holistic Approach to Education
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

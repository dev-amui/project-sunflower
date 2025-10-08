import { Card } from "@/components/ui/card"

const programs = [
  {
    number: "01",
    title: "Kindergarten",
    description:
      "A nurturing environment where young learners discover the joy of learning through play-based education and foundational skills development.",
    ages: "Ages 5-6",
  },
  {
    number: "02",
    title: "Elementary School",
    description:
      "Building strong academic foundations with engaging curriculum that fosters curiosity, creativity, and critical thinking skills.",
    ages: "Grades 1-5",
  },
  {
    number: "03",
    title: "Middle School",
    description:
      "Guiding students through transformative years with comprehensive programs that develop independence, leadership, and academic excellence.",
    ages: "Grades 6-8",
  },
  {
    number: "04",
    title: "High School",
    description:
      "Preparing students for college and beyond with rigorous academics, advanced placement courses, and personalized college counseling.",
    ages: "Grades 9-12",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Our Educational Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive education tailored to each developmental stage, ensuring every student reaches their full
            potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {programs.map((program) => (
            <Card key={program.number} className="p-8 lg:p-10 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl font-light text-muted-foreground">{program.number}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl font-semibold">{program.title}</h3>
                    <span className="text-sm text-muted-foreground">{program.ages}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

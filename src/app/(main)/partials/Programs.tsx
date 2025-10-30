import { Card } from "@/components/ui/card"

const programs = [
  {
    number: "01",
    title: "Preschool",
    description:
      "A nurturing environment where young learners discover the joy of learning through play-based education and foundational skills development.",
    ages: "Age 1 and Above",
  },
  {
    number: "02",
    title: "Primary School",
    description:
      "Building strong academic foundations with engaging curriculum that fosters curiosity, creativity, and critical thinking skills.",
    ages: "Basic 1-6",
  },
  {
    number: "03",
    title: "Junior High School",
    description:
      "Guiding students through transformative years with comprehensive programs that develop independence, leadership, and academic excellence.",
    ages: "Basic 7-9",
  },
  {
    number: "04",
    title: "Special Educational Needs (SEN)",
    description:
      "Every learner is seen and supported. Individualized plans, small-group interventions, therapy referral, and classroom accommodations help each child grow with confidence.",
    ages: "Preschool to Basic 9",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Our Educational Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sunflower School offers two strong learning pathways the <b>Ghana Education Service (GES)</b> National Curriculum and the 
             <b> Pearson Edexcel</b> international pathway within one caring community. Our GES track builds solid foundations in 
            literacy, numeracy, science, ICT, and the arts with continuous assessment toward local progression. 
            The Pearson Edexcel route emphasizes inquiry, global benchmarks, and skills based assessment with 
            a clear path from Primary through Lower Secondary (and onwards to IGCSE). Families can choose the pathway that 
            best fits their child and transition when appropriate, with guidance from our team. Across both tracks, students enjoy 
            rich enrichment in Robotics & Coding, reading culture, arts, sports, leadership, and values education so every 
            learner grows in confidence and capability.
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

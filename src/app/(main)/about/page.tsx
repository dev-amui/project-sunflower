
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold mb-6 text-balance">About Sunflower School</h1>
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
      <section className="py-20 bg-muted/35">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-semibold mb-8 text-center">Our History</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sunflower School is a Christian School, which 
                opened its doors on the 24th September 
                1994 originally as North Kaneshie Nursery and 
                Crèche. Starting out in one small bungalow, the school 
                has expanded over the years and is presently housed 
                on two compounds approximately two hundred meters 
                away from each other. 
              </p>
              <p>
                While running a private maternity Clinic (North Kaneshie 
                Maternity Home) in the present administration 
                building, a weekly satellite clinic of the Kaneshie 
                Polyclinic (popularly called “weighing”) was held on the 
                premises for babies and toddlers. I noticed at the time 
                that many of the children who attended the clinic did 
                not attend a nursery or that those who attended one, 
                were not receiving the best care possible. I immediately 
                felt that I could do a better job of providing holistic care 
                to these children to cater for their academic, medical 
                and spiritual needs.
              </p>
              <p>
                I discussed the idea about starting a Nursery with 
                the Senior Public Health nurse in charge Mrs. Sarah 
                Amissah who readily agreed with me and was very 
                supportive in seeing the idea through. She immediately 
                started sensitizing the mothers who came to the clinic 
                to the fact that a nursery school would be started here 
                soon. The vision of Sunflower School was now born.
              </p>
              <p>
                It took one year to seek God’s face as well as prepare 
                the needed infrastructure for the project. God was 
                very faithful because His provision was evident in 
                the acquisition of all things necessary for the nursery 
                in many tangible ways. And so it was that on the 
                24th September, 1994 the doors of this great school 
                opened for the first time and has remained so except 
                during holiday periods, thus beginning a whole new 
                era of investment into the lives of many children 
                who have entered the school usually at crèche level 
                knowing hardly anything and leaving (after writing 
                the Basic Education Certificate Examination (BECE)) 
                knowledgeable and confident.
              </p>
              <p>
                According to records, the very first day of school saw the following pre-schoolers present:
                <ul>
                  <li>1. Faustina Adwapa</li>
                  <li>2. Jeffery Sagoe</li>
                  <li>3. Vida Ayensu</li>
                  <li>4.Nana Osei Bosomtwi</li>
                  <li>5. Benedicta Boateng</li>
                  <li>6. Joel Acquah</li>
                  <li>7. Nii Adjetey Akrong</li>
                  <li>8. Amanda Baidoo</li>
                </ul> 
                Alongside were the following teachers; Mrs. Charity Dankyi Boateng and Pat Adjei. 
              </p>
              <p>
                The nursery grew and as a result more teachers and 
                care givers had to be employed. The first headmistress 
                of the school was Mrs. Patricia Osei Bonsu, who 
                commenced work at the beginning of July 1995. 
              </p>
              <p>
                Around the same time, arrangements were being made 
                to change the name of the school to Sunflower Early 
                Childhood Development Educational Centre (SECDEC). 
                The new name was duly registered with the Ghana 
                Education Service in August 1995. The vision up to now 
                was only a nursery and crèche.
              </p>
              <p>
                At the beginning of the new academic year September 
                1995, total enrolment was approximately sixty five with 
                the breakdown as follows:
                <ul>
                  <li> • Under Eighteen Months - 6</li>
                  <li> • Eighteen months to twenty four months - 17</li>
                  <li> • Two to three years</li>
                  <li> • Three to four and four years plus</li>
                  <li> • Number of teachers and care givers - 27 - 15 - 5</li>
                </ul>
                This was a good indication that growth was taking 
                place due to the quality of teaching the children 
                were receiving.
              </p>
              <p>
                The school observed its first open day and 
                commissioning of a larger school kitchen which was 
                dedicated by Rev. Dr. Fred Deegbe on 23rd October, 
                1996. The same kitchen is still in use today and is still 
                being used to produce delicious meals for the entire 
                school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how Sunflower School can help your child thrive
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

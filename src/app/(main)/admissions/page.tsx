"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, FileText, Users, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdmissionsPage() {
  const router = useRouter();

  const goToLoginPage = () => {
    router.push("/login");
  };
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl lg:text-6xl font-semibold mb-6 text-balance">
              Admissions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Begin your journey with Sunflower School. We're excited to welcome
              your family to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-serif text-4xl font-semibold mb-12 text-center">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Submit Application</h3>
              <p className="text-sm text-muted-foreground">
                Complete our online application form
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Schedule Visit</h3>
              <p className="text-sm text-muted-foreground">
                Tour our campus and meet our staff
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Interview</h3>
              <p className="text-sm text-muted-foreground">
                Meet with our admissions team
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Enrollment</h3>
              <p className="text-sm text-muted-foreground">
                Receive decision and complete enrollment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-semibold mb-12 text-center">
              Tuition & Financial Aid
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  2024-2025 Tuition
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Kindergarten</span>
                    <span className="font-semibold">$12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Elementary (Grades 1-5)</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Middle School (Grades 6-8)</span>
                    <span className="font-semibold">$18,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High School (Grades 9-12)</span>
                    <span className="font-semibold">$21,000</span>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Financial Aid
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe that a quality education should be accessible to
                  all qualified students. Sunflower School offers need-based
                  financial aid to families who demonstrate financial need.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Over 40% of students receive financial aid</li>
                  <li>• Average aid package: $8,000</li>
                  <li>• Merit scholarships available</li>
                  <li>• Flexible payment plans offered</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-semibold mb-12 text-center">
              Important Dates
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="font-semibold">Application Opens</span>
                <span className="text-muted-foreground">October 1, 2024</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="font-semibold">Application Deadline</span>
                <span className="text-muted-foreground">February 1, 2025</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="font-semibold">Financial Aid Deadline</span>
                <span className="text-muted-foreground">February 15, 2025</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="font-semibold">Admission Decisions</span>
                <span className="text-muted-foreground">March 15, 2025</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-border">
                <span className="font-semibold">Enrollment Deadline</span>
                <span className="text-muted-foreground">April 1, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your application today or schedule a campus visit to learn
            more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={goToLoginPage}>
              Start Application
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MainLayoutNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-serif font-semibold tracking-tight">
            Sunflower School
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/#programs" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Programs
            </Link>
            <Link href="/admissions" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Admissions
            </Link>
            <Link href="/campus-life" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Campus Life
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">
              Contact
            </Link>
            <Button size="sm" className="ml-4" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#programs"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/admissions"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/campus-life"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campus Life
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button size="sm" className="w-full" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

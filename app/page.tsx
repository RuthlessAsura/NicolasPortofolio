"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { GeometricPattern } from "@/components/geometric-pattern"
import { TechnicalSkills } from "@/components/technical-skills"
import { Recommendations } from "@/components/recommendations"
import { EngineerProfile } from "@/components/engineer-profile"
import { FeaturedProjects } from "@/components/featured-projects"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ParallaxHero } from "@/components/parallax-hero"
import { ThemeToggle } from "@/components/theme-toggle"
import { ParallaxSection } from "@/components/parallax-section"
import { NavLink } from "@/components/nav-link"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to handle CV download
  const handleDownloadCV = () => {
    // In a real implementation, this would trigger a file download
    // For now, we'll just show an alert
    alert("CV download would start now. In a production environment, this would download the actual CV file.")

    // Alternatively, you could use a direct link to a file:
    // window.open('/path-to-cv.pdf', '_blank');
  }

  // Function to handle contact navigation
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })

      // Update URL without full page reload
      window.history.pushState(null, "", "#contact")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-neutral-100 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300"></div>
            <span className="font-bold text-lg tracking-tight dark:text-white">Nicolas Varga</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Button
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 relative overflow-hidden group font-bold hidden md:flex"
              onClick={handleDownloadCV}
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </span>
              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Open menu"
              >
                <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        <section id="home">
          <ParallaxHero />
        </section>

        <ParallaxSection
          id="skills"
          className="py-24 md:py-24 bg-neutral-50 dark:bg-neutral-900 perspective-1000"
          title="Technical Expertise"
          subtitle="Specialized skills and technologies I've mastered throughout my career"
        >
          <TechnicalSkills />
        </ParallaxSection>

        <ParallaxSection
          id="projects"
          className="py-24 md:py-24 bg-white dark:bg-black perspective-1000"
          title="Featured Projects"
          subtitle="A selection of my most impactful network and system engineering projects"
        >
          <FeaturedProjects />
        </ParallaxSection>

        <ParallaxSection
          id="about"
          className="py-24 md:py-24 relative overflow-hidden perspective-1000 bg-neutral-50 dark:bg-neutral-900"
          title="About Me"
          subtitle="My journey, expertise, and approach to system and network engineering"
        >
          <EngineerProfile />
        </ParallaxSection>

        <ParallaxSection
          id="testimonials"
          className="py-24 md:py-24 bg-black text-white perspective-1000"
          title="Client Recommendations"
          subtitle="What clients and colleagues say about my work and expertise"
          isDark={true}
        >
          <Recommendations />
        </ParallaxSection>

        <ParallaxSection
          id="contact"
          className="py-24 md:py-24 relative overflow-hidden perspective-1000 bg-white dark:bg-black"
          title="Contact Me"
          subtitle="Let's discuss how I can help optimize your systems and networks for performance and security"
        >
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <GeometricPattern />
          </div>
          <div className="max-w-6xl mx-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden p-4 md:p-12 relative z-10">
            <ContactForm />
          </div>
        </ParallaxSection>
      </main>

      <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600"></div>
                <span className="font-bold text-lg tracking-tight">Nicolas Varga</span>
              </div>
              <p className="text-neutral-400 mb-6">
                System and Network Engineer specializing in secure, scalable infrastructure solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Network Design
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Cloud Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Security Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    System Administration
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-neutral-400 mb-4">Get in touch for consultations or project inquiries.</p>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold"
                  onClick={() => alert("Subscription would be processed here.")}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
            <p>© {new Date().getFullYear()} Nicolas Varga. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        handleNavClick={(id: string) => {
          setMobileMenuOpen(false)
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }}
      >
        <ul className="space-y-6">
          <li>
            <button
              onClick={() =>
                setMobileMenuOpen(false) ||
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-lg font-bold text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setMobileMenuOpen(false) ||
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-lg font-bold text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setMobileMenuOpen(false) ||
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-lg font-bold text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setMobileMenuOpen(false) ||
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-lg font-bold text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setMobileMenuOpen(false) ||
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-lg font-bold text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </MobileMenu>
    </div>
  )
}

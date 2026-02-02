"use client"

import { useState } from "react"
import {
  Building2,
  Home,
  Store,
  Paintbrush,
  Wrench,
  Phone,
  Mail,
  MapPin,
  Globe,
  Menu,
  X,
  Quote,
  Target,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "CEO Message", href: "#ceo" },
  { name: "Vision", href: "#vision" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const projects = [
  { name: "Twisted Minds", value: "12,800,000", type: "Fit-out & Furniture" },
  { name: "Mike Tyson Boxing Gym", value: "8,500,000", type: "Fit-out & MEP" },
  { name: "Jeddah Edition Hotel Terrace", value: "6,500,000", type: "Fit-out & Landscaping" },
  { name: "Muzahmia Fitness Time", value: "6,200,000", type: "Gym Fit-out" },
  { name: "Al Mansoura Fitness Time", value: "6,000,000", type: "Ladies Gym" },
  { name: "Sound Studio", value: "5,450,000", type: "Studio Fit-out" },
  { name: "Al Hosn Villas", value: "4,500,000", type: "Uplifting" },
  { name: "Al Ghadeer Plus Health", value: "3,500,000", type: "Healthcare" },
  { name: "Labour Accommodation", value: "3,450,000", type: "Skeleton & Masonry" },
  { name: "BLVD/GB Offices", value: "2,500,000", type: "Office Fit-out" },
]

const clients = ["Leejam", "Bank Albilad", "Sela", "Madaen Star", "TBC"]

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Villas, multi-storey buildings, and complete turnkey solutions for premium living spaces.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Drive-thrus, public squares, shopping malls with skeleton and site development expertise.",
  },
  {
    icon: Paintbrush,
    title: "Fit-Out",
    description: "Our core specialty. Retail spaces, restaurants, cafés, offices, and gyms including Mike Tyson Gym and Twisted Minds.",
    highlighted: true,
  },
  {
    icon: Wrench,
    title: "Design & Build",
    description: "Flexible solutions from skeleton-only construction to complete turnkey delivery.",
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-navy lg:text-2xl">
                TL <span className="text-gold">-</span> Town of Luxury
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-gold text-navy hover:bg-gold-dark font-semibold">
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-navy transition-colors hover:text-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="bg-gold text-navy hover:bg-gold-dark font-semibold w-fit">
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-navy" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            From Vision to Reality
            <span className="block text-gold mt-2">We Build It All</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            Premier Construction & Fit-out Solutions in KSA & UAE
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-semibold text-lg px-8">
              View Our Projects
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl text-balance">
                Building Excellence Since 2021
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Town of Luxury was established in 2021 in the UAE and expanded to KSA in 2022. 
                We deliver high-quality construction and fit-out solutions including skeleton works, 
                building envelopes, and MEP services.
              </p>
              <div className="mt-8 p-6 bg-secondary rounded-lg border-l-4 border-gold">
                <p className="text-navy font-semibold text-lg">
                  Led by a team with over 20 years of experience in the GCC market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
                  alt="Modern construction project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold text-navy">20+</p>
                <p className="text-navy font-medium">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo" className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Leadership</span>
            <h2 className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl">
              CEO Message
            </h2>
            
            <div className="mt-12 relative">
              <Quote className="absolute -top-4 left-0 w-16 h-16 text-gold/30" />
              <blockquote className="relative z-10 px-8">
                <p className="text-xl lg:text-2xl text-navy leading-relaxed italic">
                  Trust, quality, and commitment are the true foundations of long-term success. 
                  Since 2021, our goal has been simple: to transform ideas into inspiring, functional spaces.
                </p>
              </blockquote>
              <Quote className="absolute -bottom-4 right-0 w-16 h-16 text-gold/30 rotate-180" />
            </div>
            
            <div className="mt-10">
              <div className="w-20 h-1 bg-gold mx-auto mb-4" />
              <p className="font-serif text-xl font-bold text-navy">Eng. Abdulsalam Saymeh</p>
              <p className="text-muted-foreground">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 lg:py-28 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Our Purpose</span>
            <h2 className="font-serif text-3xl font-bold text-white mt-3 sm:text-4xl lg:text-5xl">
              Vision & Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-gold/30 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  To elevate the construction experience by seamlessly managing every stage 
                  from concept to completion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-gold/30 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-10">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  To deliver tailored construction solutions through refined management, 
                  trusted partnerships, and in-house expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and fit-out solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.highlighted 
                    ? 'border-gold border-2 bg-gold/5' 
                    : 'border-border hover:border-gold/50'
                }`}
              >
                <CardContent className="p-6 lg:p-8">
                  {service.highlighted && (
                    <span className="inline-block bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full mb-4">
                      Core Specialty
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.highlighted ? 'bg-gold' : 'bg-navy/10 group-hover:bg-gold/20'
                  } transition-colors`}>
                    <service.icon className={`w-6 h-6 ${
                      service.highlighted ? 'text-navy' : 'text-navy group-hover:text-gold'
                    } transition-colors`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            <h2 className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our most prestigious construction and fit-out projects
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={project.name} className="bg-white border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg overflow-hidden group">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.type}</p>
                      </div>
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy/10 text-navy text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gold">{project.value}</span>
                        <span className="text-sm text-muted-foreground">SAR</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">Trusted By</span>
            <h2 className="font-serif text-2xl font-bold text-navy mt-3 sm:text-3xl">
              Our Valued Clients
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {clients.map((client) => (
              <div 
                key={client} 
                className="px-6 py-3 bg-secondary rounded-lg border border-border"
              >
                <span className="font-semibold text-navy text-lg">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-navy pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <span className="font-serif text-2xl font-bold text-white">
                TL <span className="text-gold">-</span> Town of Luxury
              </span>
              <p className="mt-4 text-white/70 max-w-md leading-relaxed">
                Premier construction and fit-out solutions in KSA & UAE. 
                From vision to reality, we build excellence.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/70 hover:text-gold transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-gold mt-0.5" />
                  <span className="text-sm">
                    Northern Ring Road, Exit 6, Al Hussain Top Up Building, 
                    Office #131, Riyadh, KSA
                  </span>
                </li>
                <li>
                  <a href="tel:+966546054360" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>+966 546 054 360</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@townofluxury.com" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                    <Mail className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>info@townofluxury.com</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.townofluxury.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                    <Globe className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>www.townofluxury.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2026 Town of Luxury. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

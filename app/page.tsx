"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Building2,
  Home,
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
  ChevronLeft,
  ChevronRight,
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

// Only projects that have images in the public/pictures folder
const projects = [
  {
    id: 1,
    name: "Twisted Minds",
    description: "Complete office fit out works, including MEP, and furniture",
    client: "M/s. Sela",
    value: "12,800,000",
    status: "Completed",
    folder: "Twested Minds",
    images: [
      "/pictures/Twested Minds/WhatsApp Image 2026-01-08 at 12.11.09 PM.webp",
      "/pictures/Twested Minds/WhatsApp Image 2026-01-08 at 12.11.08 PM.webp",
      "/pictures/Twested Minds/WhatsApp Image 2026-01-08 at 12.11.08 PM (2).webp",
      "/pictures/Twested Minds/WhatsApp Image 2026-01-08 at 12.11.07 PM.webp",
    ],
  },
  {
    id: 2,
    name: "Mike Tyson Boxing Gym",
    description: "Complete office fit out works, including MEP, and loose furniture",
    client: "M/s. Sela",
    value: "8,500,000",
    status: "Completed",
    folder: "Mike Tyson",
    images: [
      "/pictures/Mike Tyson/Screenshot 2024-05-30 135207.webp",
      "/pictures/Mike Tyson/Screenshot 2024-05-30 135137.webp",
      "/pictures/Mike Tyson/Screenshot 2024-05-30 135111.webp",
      "/pictures/Mike Tyson/Screenshot 2024-05-30 135054.webp",
    ],
  },
  {
    id: 3,
    name: "Jeddah Edition Hotel Terrace",
    description: "Complete office fit out works, including MEP, and Landscaping Works",
    client: "M/s. Sela",
    value: "6,500,000",
    status: "Completed",
    folder: "jeddah Yacht Photo",
    images: [
      "/pictures/jeddah Yacht Photo/IMG_20240304_173917.webp",
      "/pictures/jeddah Yacht Photo/IMG_20240304_173907.webp",
      "/pictures/jeddah Yacht Photo/IMG_20240304_173355.webp",
      "/pictures/jeddah Yacht Photo/IMG_20240304_173351.webp",
    ],
  },
  {
    id: 4,
    name: "Al Mansoura Fitness Time Ladies Gym",
    description: "Complete office fit out works, including MEP",
    client: "M/s. Madaen Star Group",
    value: "6,000,000",
    status: "Completed",
    folder: "Almansoura Fitness Time",
    images: [
      "/pictures/Almansoura Fitness Time/WhatsApp Image 2026-01-08 at 12.13.00 PM.webp",
      "/pictures/Almansoura Fitness Time/WhatsApp Image 2026-01-08 at 12.13.00 PM (2).webp",
      "/pictures/Almansoura Fitness Time/WhatsApp Image 2026-01-08 at 12.12.59 PM.webp",
      "/pictures/Almansoura Fitness Time/WhatsApp Image 2026-01-08 at 12.12.58 PM.webp",
    ],
  },
  {
    id: 5,
    name: "Sound Studio",
    description: "Complete office fit out works, including MEP, and furniture",
    client: "M/s. Sela",
    value: "5,450,000",
    status: "Completed",
    folder: "Sound Studio Pic",
    images: [
      "/pictures/Sound Studio Pic/WhatsApp Image 2026-01-08 at 11.49.38 AM.webp",
      "/pictures/Sound Studio Pic/WhatsApp Image 2026-01-08 at 11.49.38 AM (3).webp",
      "/pictures/Sound Studio Pic/WhatsApp Image 2026-01-08 at 11.49.37 AM.webp",
      "/pictures/Sound Studio Pic/WhatsApp Image 2026-01-08 at 11.49.36 AM.webp",
    ],
  },
  {
    id: 6,
    name: "Al Hosn Villas Uplifting",
    description: "Complete office fit out works, including MEP, and furniture",
    client: "M/s. Sela",
    value: "4,500,000",
    status: "Completed",
    folder: "Alhosn Villa",
    images: [
      "/pictures/Alhosn Villa/WhatsApp Image 2026-01-08 at 12.09.08 PM.webp",
      "/pictures/Alhosn Villa/WhatsApp Image 2026-01-08 at 12.09.07 PM.webp",
      "/pictures/Alhosn Villa/WhatsApp Image 2026-01-08 at 12.09.07 PM (2).webp",
      "/pictures/Alhosn Villa/WhatsApp Image 2026-01-08 at 12.09.06 PM.webp",
    ],
  },
  {
    id: 7,
    name: "Labour Accommodation",
    description: "Complete office fit out works, including MEP, and Landscape Works",
    client: "M/s. Madaen Star Group",
    value: "3,600,000",
    status: "Completed",
    folder: "Labour Accommodation 1",
    images: [
      "/pictures/Labour Accommodation 1/DJI_0392.webp",
      "/pictures/Labour Accommodation 1/DJI_0391.webp",
      "/pictures/Labour Accommodation 1/DSC02239.webp",
      "/pictures/Labour Accommodation 1/DSC02226.webp",
    ],
  },
  {
    id: 8,
    name: "Al Ghadeer Plus Health Section",
    description: "Complete office fit out works, including MEP, and loose furniture",
    client: "M/s. Leejam Sports",
    value: "3,500,000",
    status: "Completed",
    folder: "Alghadeer Fitness Time",
    images: [
      "/pictures/Alghadeer Fitness Time/WhatsApp Image 2026-01-21 at 11.48.28 AM.webp",
      "/pictures/Alghadeer Fitness Time/WhatsApp Image 2026-01-21 at 11.48.29 AM.webp",
      "/pictures/Alghadeer Fitness Time/WhatsApp Image 2026-01-21 at 11.48.30 AM.webp",
      "/pictures/Alghadeer Fitness Time/WhatsApp Image 2026-01-21 at 11.48.31 AM.webp",
    ],
  },
]

const clients = ["Leejam Sports", "Bank Albilad", "Sela", "Madaen Star Group", "Ibrahim Al Hadithy Group"]

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "As a general contracting and fit-out company, we deliver a wide range of residential projects, including villas and multi-storey buildings. Our services range from skeleton and envelope works to full fit-out and MEP solutions, with complete turnkey and design-and-build options available.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "We also undertake commercial construction projects, including drive-thru(s), public squares, and small shopping malls. Our scope typically includes skeleton works, initial MEP installations, and site development. In most cases, retail units are delivered on a shell-and-core basis, with tenant fit-out works handled separately.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
  },
  {
    icon: Paintbrush,
    title: "Fit-Out",
    description: "Fit-out is our core specialty, delivering tailored solutions for retail spaces, restaurants, cafes, and offices. We offer both build-only and design-and-build services, covering full interior fit-outs, MEP second and final fixes, as well as loose furniture and equipment where required - ensuring a complete and seamless final product.",
    highlighted: true,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
  },
  {
    icon: Wrench,
    title: "Design & Build",
    description: "Flexible solutions from skeleton-only construction to complete turnkey delivery. We manage the entire process from initial concept through final handover, ensuring quality and consistency at every stage.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
  },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="bg-white border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
        <CardContent className="p-0">
          {/* Image Carousel */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={project.name}
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? "bg-gold w-4" : "bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Status badge */}
            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {project.status}
            </span>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {project.description}
            </p>
            <p className="text-sm text-navy/70 mt-2">
              Client: <span className="font-medium">{project.client}</span>
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gold">{project.value}</span>
                <span className="text-sm text-muted-foreground">SAR</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border"
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/Town of Luxury  LOGO الأصل.png"
                alt="Town of Luxury Logo"
                width={50}
                height={50}
                className="h-12 w-auto lg:h-14"
              />
              <span className="font-serif text-lg font-bold text-navy lg:text-xl hidden sm:block">
                Town of Luxury
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: "#C5A572" }}
                  className="text-sm font-medium text-navy transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button className="bg-gold text-navy hover:bg-gold-dark font-semibold">
                  Contact Us
                </Button>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border py-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-sm font-medium text-navy transition-colors hover:text-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button className="bg-gold text-navy hover:bg-gold-dark font-semibold w-fit">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/Town of Luxury  LOGO الأصل.png"
              alt="Town of Luxury Logo"
              width={150}
              height={150}
              className="mx-auto mb-8 h-32 w-auto lg:h-40"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            From Vision to Reality
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block text-gold mt-2"
            >
              We Build It All
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          >
            Premier Construction & Fit-out Solutions in KSA
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gold text-navy hover:bg-gold-dark font-semibold text-lg px-8">
                View Our Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl text-balance">
                Building Excellence Since 2021
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Town of Luxury was established in 2021 and expanded to KSA in 2022. 
                We deliver high-quality construction and fit-out solutions including skeleton works, 
                building envelopes, and MEP services.
              </p>
              <motion.div
                variants={fadeInUp}
                className="mt-8 p-6 bg-secondary rounded-lg border-l-4 border-gold"
              >
                <p className="text-navy font-semibold text-lg">
                  Led by a team with over 20 years of experience in the GCC market.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031"
                  alt="Modern construction project"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-xl"
              >
                <p className="text-4xl font-bold text-navy">20+</p>
                <p className="text-navy font-medium">Years Experience</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo" className="py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              Leadership
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl">
              CEO Message
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="mt-12 relative">
              <Quote className="absolute -top-4 left-0 w-16 h-16 text-gold/30" />
              <blockquote className="relative z-10 px-8">
                <p className="text-xl lg:text-2xl text-navy leading-relaxed italic">
                  Trust, quality, and commitment are the true foundations of long-term success. 
                  Since 2021, our goal has been simple: to transform ideas into inspiring, functional spaces.
                </p>
              </blockquote>
              <Quote className="absolute -bottom-4 right-0 w-16 h-16 text-gold/30 rotate-180" />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-10">
              <div className="w-20 h-1 bg-gold mx-auto mb-4" />
              <p className="font-serif text-xl font-bold text-navy">Eng. Abdulsalam Saymeh</p>
              <p className="text-muted-foreground">Chief Executive Officer</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 lg:py-28 bg-navy overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              Our Purpose
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-white mt-3 sm:text-4xl lg:text-5xl">
              Vision & Mission
            </motion.h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={scaleIn}>
              <Card className="bg-white/5 border-gold/30 backdrop-blur-sm h-full">
                <CardContent className="p-8 lg:p-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6"
                  >
                    <Eye className="w-7 h-7 text-gold" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    To elevate the construction experience by seamlessly managing every stage 
                    from concept to completion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={scaleIn}>
              <Card className="bg-white/5 border-gold/30 backdrop-blur-sm h-full">
                <CardContent className="p-8 lg:p-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6"
                  >
                    <Target className="w-7 h-7 text-gold" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    To deliver tailored construction solutions through refined management, 
                    trusted partnerships, and in-house expertise.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-[#4A5568] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              What We Do
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-white mt-3 sm:text-4xl lg:text-5xl">
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/80 max-w-3xl mx-auto italic">
              The following is an overview of our core services, tailored to fulfill our clients&apos; requirements.
            </motion.p>
          </motion.div>
          
          {/* Service descriptions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {services.slice(0, 3).map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-gold font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed italic">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-1 bg-gold mb-12" />

          {/* Service cards with images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={scaleIn} className="text-center">
              <h3 className="text-gold font-serif text-xl font-bold mb-4">Construction</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000"
                  alt="Construction"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={scaleIn} className="text-center">
              <h3 className="text-gold font-serif text-xl font-bold mb-4">Interiors</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000"
                  alt="Interiors"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={scaleIn} className="text-center">
              <h3 className="text-gold font-serif text-xl font-bold mb-4">Design & Build</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000"
                  alt="Design & Build"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              Portfolio
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-3 sm:text-4xl lg:text-5xl">
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of our most prestigious construction and fit-out projects
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              Trusted By
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-2xl font-bold text-navy mt-3 sm:text-3xl">
              Our Valued Clients
            </motion.h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client}
                variants={scaleIn}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-secondary rounded-lg border border-border"
              >
                <span className="font-semibold text-navy text-lg">{client}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-navy pt-20 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10"
          >
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/Town of Luxury  LOGO الأصل.png"
                  alt="Town of Luxury Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto"
                />
                <span className="font-serif text-2xl font-bold text-white">
                  Town of Luxury
                </span>
              </div>
              <p className="text-white/70 max-w-md leading-relaxed">
                Premier construction and fit-out solutions in KSA. 
                From vision to reality, we build excellence.
              </p>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#C5A572" }}
                      className="text-white/70 transition-colors block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
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
                  <motion.a
                    href="tel:+966546054360"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>+966 546 054 360</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="mailto:info@townofluxury.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>info@townofluxury.com</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.townofluxury.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <Globe className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>www.townofluxury.com</span>
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-8 text-center"
          >
            <p className="text-white/60 text-sm">
              &copy; 2026 Town of Luxury. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

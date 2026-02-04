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
  Award,
  Heart,
  Star,
  User,
  Users,
  Cog,
  Shield,
  TrendingUp,
  CheckCircle,
  Key,
  Briefcase,
  Coffee,
  UtensilsCrossed,
  Store,
  Check,
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
      <section id="about" className="py-20 lg:py-28 bg-[#F5F5F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              {/* Header */}
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">ABOUT US</span>
              <h2 className="font-serif text-4xl font-bold text-navy mt-3 sm:text-5xl lg:text-6xl">
                About
                <br />
                Town of Luxury
              </h2>
              
              {/* Gold underline */}
              <div className="w-16 h-1 bg-gold mt-6 mb-8" />
              
              {/* Main paragraph */}
              <p className="text-navy text-lg leading-relaxed mb-6">
                <span className="font-bold">Town of Luxury</span> was established in the Kingdom of Saudi Arabia in{" "}
                <span className="font-bold">2022</span>. Since inception, the company has built a strong presence across GCC countries.
              </p>
              
              {/* Second paragraph */}
              <p className="text-navy/80 text-lg leading-relaxed mb-8">
                We deliver{" "}
                <span className="underline decoration-gold decoration-2 underline-offset-4">
                  high-quality construction and fit-out solutions
                </span>{" "}
                to a diverse range of clients, from private villas to commercial developments.
              </p>
              
              {/* Highlighted quote box */}
              <motion.div
                variants={fadeInUp}
                className="bg-gold/20 rounded-lg p-6 border-l-4 border-gold"
              >
                <p className="text-navy italic leading-relaxed">
                  Guided by a leadership team with over 30 years of experience in the GCC, particularly within the Kingdom of Saudi Arabia, bringing deep market insight, operational excellence, and unwavering commitment to global best practices.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Image and Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="logomain.jpeg"
                  alt="Town of Luxury Project"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* 2022 - Established in KSA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#4A5568] rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-gold mb-1">2022</p>
                  <p className="text-white/80 text-sm">Established in KSA</p>
                </motion.div>
                
                {/* 2023 - Expanded to GCC */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gold rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-navy mb-1">2023</p>
                  <p className="text-navy/80 text-sm">Expanded to GCC</p>
                </motion.div>
                
                {/* 4+ Years of Excellence */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#4A5568] rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-white mb-1">4+</p>
                  <p className="text-white/80 text-sm">Years of Excellence</p>
                </motion.div>
                
                {/* GCC - Regional Presence */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gold rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-navy mb-1">GCC</p>
                  <p className="text-navy/80 text-sm">Regional Presence</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo" className="py-20 lg:py-28 bg-navy overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* Left Column - Title, Photo, and Info Card */}
            <motion.div variants={slideInLeft} className="space-y-8">
              {/* Header */}
              <div>
                <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                  LEADERSHIP
                </span>
                <h2 className="font-serif text-4xl font-bold text-white mt-3 sm:text-5xl lg:text-6xl">
                  CEO
                  <br />
                  Message
                </h2>
              </div>

              {/* CEO Photo */}
              <motion.div 
                variants={scaleIn}
                className="relative w-48 h-48 mx-auto lg:mx-0"
              >
                <div className="w-full h-full rounded-lg overflow-hidden border-2 border-gold/30">
                  <Image
                    src="/ceoimage.jpeg"
                    alt="Eng. Abdulsalam Saymeh - CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* CEO Info Card */}
              <motion.div 
                variants={fadeInUp}
                className="bg-navy-dark/50 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-white">Eng. Abdulsalam Saymeh</p>
                    <p className="text-gold text-sm">Chief Executive Officer</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-white/80 text-sm">
                      <span className="font-bold text-white">30+ Years</span> of GCC construction experience
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-white/80 text-sm">Building relationships that last</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-white/80 text-sm">Commitment to excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Message Content */}
            <motion.div variants={slideInRight} className="flex flex-col justify-center">
              {/* Main Quote */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-1 bg-gold flex-shrink-0 self-stretch min-h-[60px]" />
                  <p className="font-serif text-2xl lg:text-3xl text-white leading-relaxed">
                    &ldquo;At Town of Luxury, we believe that{" "}
                    <span className="text-gold">great spaces begin with strong relationships</span>.&rdquo;
                  </p>
                </div>
              </div>

              {/* Message Paragraphs */}
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>
                  With over <span className="font-bold text-gold">three decades of experience</span> in the construction and fit-out industry across the GCC, I have learned that{" "}
                  <span className="font-bold text-white underline decoration-gold decoration-2 underline-offset-4">trust, quality, and commitment</span> are the true foundations of long-term success.
                </p>

                <p>
                  Since our establishment in 2022, our goal has been simple: to{" "}
                  <span className="font-bold text-gold">transform ideas into inspiring, functional spaces</span>{" "}
                  while exceeding our clients&apos; expectations. Every project we undertake is driven by care, precision, and a genuine passion for excellence.
                </p>

                {/* Highlighted Quote Box */}
                <div className="bg-gold/10 border-l-4 border-gold p-5 rounded-r-lg">
                  <p className="text-white">
                    <span className="font-bold text-gold">Our people are our greatest strength.</span>{" "}
                    Together, we embrace challenges, adapt to fast-paced environments, and deliver with pride—always placing our clients at the heart of everything we do.
                  </p>
                </div>

                <p className="text-white/80">
                  Thank you for trusting Town of Luxury.
                </p>

                {/* Signature */}
                <div className="pt-4">
                  <p className="text-gold italic">Warm regards,</p>
                  <p className="font-serif text-xl font-bold text-white mt-1">Abdulsalam Saymeh</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 lg:py-28 bg-[#F5F5F5] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              OUR PURPOSE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-2 sm:text-4xl lg:text-5xl">
              Vision & Mission
            </motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-gold mt-4" />
          </motion.div>
          
          {/* Vision & Mission Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-6"
          >
            {/* Vision Card - Dark Navy */}
            <motion.div variants={scaleIn}>
              <div className="bg-navy rounded-lg p-8 lg:p-10 h-full">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Eye className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Vision</h3>
                </div>
                
                {/* Main Text */}
                <p className="text-gold italic text-lg leading-relaxed mb-4">
                  Our vision is to <span className="font-bold text-white not-italic">elevate the construction experience</span> by seamlessly managing every stage from concept to completion.
                </p>
                
                {/* Secondary Text */}
                <p className="text-white/80 leading-relaxed mb-8">
                  We enable our clients to focus on their ambitions with{" "}
                  <span className="underline decoration-gold decoration-2 underline-offset-4 font-medium text-white">
                    absolute confidence and peace of mind
                  </span>.
                </p>
                
                {/* Quote */}
                <div className="flex items-center gap-2 text-white/70 italic">
                  <Quote className="w-5 h-5 text-gold" />
                  <span>Building trust through every interaction</span>
                </div>
              </div>
            </motion.div>
            
            {/* Mission Card - Gold/Tan */}
            <motion.div variants={scaleIn}>
              <div className="bg-gold rounded-lg p-8 lg:p-10 h-full">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Target className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy">Mission</h3>
                </div>
                
                {/* Main Text */}
                <p className="text-navy text-lg leading-relaxed mb-4">
                  Our mission is to <span className="font-bold">deliver tailored construction solutions</span> through refined management, trusted partnerships, and in-house expertise.
                </p>
                
                {/* Secondary Text */}
                <p className="text-navy/80 leading-relaxed mb-8">
                  We ensure{" "}
                  <span className="bg-white/30 px-1 font-medium text-navy">
                    quality, transparency, and exceptional value
                  </span>{" "}
                  at every stage of the project lifecycle.
                </p>
                
                {/* Icons Row */}
                <div className="flex items-center justify-between pt-4 border-t border-navy/20">
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-navy mx-auto mb-1" />
                    <span className="text-navy text-sm font-medium">Quality</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 text-navy mx-auto mb-1" />
                    <span className="text-navy text-sm font-medium">Transparency</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 text-navy mx-auto mb-1" />
                    <span className="text-navy text-sm font-medium">Value</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom 4 Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Partnership - White */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">Partnership</h4>
                <p className="text-navy/70 text-sm">Building lasting relationships</p>
              </div>
            </motion.div>

            {/* Expertise - White */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Cog className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">Expertise</h4>
                <p className="text-navy/70 text-sm">In-house capabilities</p>
              </div>
            </motion.div>

            {/* Reliability - Gold/Tan */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gold/20 rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Shield className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">Reliability</h4>
                <p className="text-navy/70 text-sm">Consistent delivery</p>
              </div>
            </motion.div>

            {/* Dedication - Gold/Tan */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gold/20 rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Heart className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">Dedication</h4>
                <p className="text-navy/70 text-sm">Client-first approach</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Part 1: Residential Construction */}
      <section id="services" className="py-20 lg:py-28 bg-[#F5F5F0] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              {/* Header */}
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">OUR SERVICES</span>
              <h2 className="font-serif text-4xl font-bold text-navy mt-3 sm:text-5xl lg:text-6xl">
                Residential
                <br />
                Construction
              </h2>
              
              {/* Description */}
              <p className="text-navy/80 text-lg leading-relaxed mt-8 mb-8">
                As a general contracting and fit-out company, we deliver a{" "}
                <span className="underline decoration-gold decoration-2 underline-offset-4">
                  wide range of residential projects
                </span>
                , including villas and multi-storey buildings.
              </p>
              
              {/* Service Spectrum Box */}
              <div className="bg-navy rounded-lg p-6 mb-6">
                <h3 className="text-gold font-bold text-lg mb-4">Service Spectrum</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Skeleton Works</p>
                      <p className="text-white/70 text-sm">Structural foundation and framework</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Envelope Works</p>
                      <p className="text-white/70 text-sm">External cladding and weatherproofing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">Full Fit-Out</p>
                      <p className="text-white/70 text-sm">Complete interior finishing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">MEP Solutions</p>
                      <p className="text-white/70 text-sm">Mechanical, electrical, plumbing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <Key className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-bold text-navy">Fully finished</p>
                  <p className="text-navy/60 text-sm">Ready-to-move-in</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <Wrench className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-bold text-navy">Design & Build</p>
                  <p className="text-navy/60 text-sm">Concept to completion</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="space-y-6"
            >
              {/* Main Image with Overlay */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/pictures/Alhosn Villa/WhatsApp Image 2026-01-08 at 12.09.08 PM.webp"
                  alt="Private Villas & Estates"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-serif text-2xl font-bold">Private Villas & Estates</h3>
                  <p className="text-white/80 text-sm">Crafting bespoke living spaces with attention to every detail</p>
                </div>
              </div>
              
              {/* Residential Portfolio */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-5 h-5 text-navy" />
                  <h3 className="font-bold text-navy text-lg">Residential Portfolio</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">Private Villas</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">Multi-Storey Buildings</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">Luxury Residences</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">Labour Accommodations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Part 2: Commercial & Interiors */}
      <section className="py-20 lg:py-28 bg-[#F5F5F0] overflow-hidden border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">OUR SERVICES</span>
            <h2 className="font-serif text-4xl font-bold text-navy mt-3 sm:text-5xl">
              Commercial & Interiors
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="space-y-6"
            >
              {/* Commercial Construction Card */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-navy flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-xl">Commercial Construction</h3>
                </div>
                
                <p className="text-navy/80 leading-relaxed mb-4">
                  We undertake commercial construction projects, including{" "}
                  <span className="underline decoration-gold decoration-2 underline-offset-4">
                    drive-thrus, public squares, and small shopping malls
                  </span>.
                </p>
                
                {/* Tags */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">Skeleton Works</p>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">Initial MEP</p>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">Site Development</p>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">Core & Shell</p>
                  </div>
                </div>
              </div>
              
              {/* Interior Fit-Out Card */}
              <div className="bg-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                    <Paintbrush className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-xl">Interior Fit-Out</h3>
                </div>
                
                <p className="text-navy/80 leading-relaxed mb-4">
                  <span className="font-bold text-navy">Fit-out is our core specialty</span>, delivering tailored solutions for retail spaces, restaurants, cafes, and offices.
                </p>
                
                {/* Checklist */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">Build-only & Design-and-Build</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">Full interior fit-outs</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">MEP second and final fixes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">Loose furniture & equipment</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="space-y-6"
            >
              {/* Main Image */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/pictures/Twested Minds/WhatsApp Image 2026-01-08 at 12.11.08 PM.webp"
                  alt="Commercial Interiors"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Caption */}
              <div>
                <h3 className="font-bold text-navy text-xl">Complete & Seamless Delivery</h3>
                <p className="text-navy/60">From shell to fully operational space</p>
              </div>
              
              {/* Interior Specializations */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy text-lg mb-4">Interior Specializations</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <Store className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">Retail Spaces</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <UtensilsCrossed className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">Restaurants</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <Coffee className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">Cafes</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <Briefcase className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">Offices</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
      <section className="py-16 lg:py-24 bg-navy overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
              TRUSTED PARTNERSHIPS
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-white mt-2 sm:text-4xl lg:text-5xl">
              Our Valued Clients
            </motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-gold mt-4" />
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-10"
          >
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl">
              We deeply value the{" "}
              <span className="underline decoration-gold decoration-2 underline-offset-4 font-medium text-white">
                trust our clients place in us
              </span>
              , and we are committed to serving them with excellence.
              <br />
              Our long-term partnerships are the true foundation of our success.
            </p>
          </motion.div>
          
          {/* Client Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Sela Card */}
            <motion.div variants={scaleIn}>
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Star className="w-6 h-6 text-navy" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/Screenshot 2026-01-11 122459.webp"
                      alt="Sela Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Sela</h3>
                    <p className="text-gold text-sm">Premium Entertainment & Hospitality</p>
                  </div>
                </div>
                
                {/* Projects List */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    BLVD G8 Offices
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Jeddah Edition Hotel Terrace
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Mike Tyson Boxing Gym
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Twisted Minds & Sound Studio
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Leejam Sports Card */}
            <motion.div variants={scaleIn}>
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Heart className="w-6 h-6 text-navy" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/Screenshot 2026-01-11 3.webp"
                      alt="Leejam Sports Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Leejam Sports</h3>
                    <p className="text-gold text-sm">Leading Fitness & Wellness Operator</p>
                  </div>
                </div>
                
                {/* Projects List */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Al Ghadeer Plus Health Section
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Muzahmia Fitness Time Gym
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Al Kharj Fitness Time Xpress
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Al Mansoura Fitness Time Ladies
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Madaen Star Group Card */}
            <motion.div variants={scaleIn}>
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/Tanmya (1).webp"
                      alt="Madaen Star Group Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Madaen Star Group</h3>
                    <p className="text-gold text-sm">Diversified Development Company</p>
                  </div>
                </div>
                
                {/* Projects List */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Drive Thru Skeleton Works
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Labour Accommodation Skeleton
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Labour Accommodation Fit-out
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Ibrahim Al Hadithy Group Card */}
            <motion.div variants={scaleIn}>
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/Screenshot 2026-01-11 2.webp"
                      alt="Ibrahim Al Hadithy Group Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Ibrahim Al Hadithy Group</h3>
                    <p className="text-gold text-sm">Established Business Group</p>
                  </div>
                </div>
                
                {/* Projects List */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Retails in Al Hada, Al Kharj City
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Skeleton Works Delivery
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    Commercial Development
                  </li>
                </ul>
              </div>
            </motion.div>
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

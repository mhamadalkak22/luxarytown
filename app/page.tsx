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
  Instagram,
  Twitter,
  Linkedin,
  Download,
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
    coverImage: "/Cover Photos/twistminds.jpg",
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
    coverImage: "/Cover Photos/Screenshot 2024-05-30 135207.png",
    images: [
      "/pictures/Mike Tyson/Screenshot 2024-05-30 134800.webp",
      "/pictures/Mike Tyson/Screenshot 2024-05-30 134819.webp",
      "/pictures/Mike Tyson/Screenshot 2024-05-30 134846.webp",
      "/pictures/Mike Tyson/Screenshot 2024-05-30 134929.webp",
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
    coverImage: "/Cover Photos/fitnessladies.jpeg",
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
    coverImage: "/Cover Photos/DJI_0386.jpg",
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
    coverImage: "/Cover Photos/WhatsApp Image 2026-01-21 at 11.48.37 AM.jpeg",
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
    title: "Design and Build",
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

function ProjectCard({ project, onOpenLightbox }: { project: typeof projects[0], onOpenLightbox: (project: typeof projects[0], imageIndex: number) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleCardClick = () => {
    onOpenLightbox(project, currentImageIndex)
  }

  // Get icon based on project type
  const getProjectIcon = () => {
    const name = project.name.toLowerCase()
    if (name.includes('hotel') || name.includes('terrace')) return Building2
    if (name.includes('gym') || name.includes('boxing') || name.includes('fitness')) return Wrench
    if (name.includes('studio') || name.includes('sound')) return Paintbrush
    if (name.includes('minds') || name.includes('twisted')) return Star
    if (name.includes('villa')) return Home
    if (name.includes('accommodation')) return Users
    return Building2
  }

  const IconComponent = getProjectIcon()

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="bg-[#FAF8F5] rounded-xl border border-[#D4C5A9] hover:border-gold transition-all duration-500 hover:shadow-2xl overflow-hidden h-full relative">
        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl m-3 mb-0">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src={project.coverImage || project.images[currentImageIndex]}
                alt={project.name}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
          
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg group-hover:from-black/40 transition-all duration-300" />
          
          {/* View Project Badge */}
          <div className="absolute top-2 right-2 bg-gold/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View Project
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pt-3">
          {/* Title Row with Icon and Client */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#D4C5A9]/30 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-4 h-4 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy group-hover:text-gold transition-colors line-clamp-1">
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-gold flex-shrink-0">
              <User className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Client: {project.client.replace('M/s. ', '')}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm text-navy/70 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

// Lightbox Gallery Component
function LightboxGallery({ 
  project, 
  initialImageIndex, 
  isOpen, 
  onClose 
}: { 
  project: typeof projects[0] | null
  initialImageIndex: number
  isOpen: boolean
  onClose: () => void 
}) {
  const [currentIndex, setCurrentIndex] = useState(initialImageIndex)

  // Reset index when project changes
  useState(() => {
    setCurrentIndex(initialImageIndex)
  })

  if (!isOpen || !project) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-white">{project.name}</h2>
          <p className="text-gold text-sm">{project.client}</p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 flex items-center justify-center relative px-4 md:px-16" onClick={(e) => e.stopPropagation()}>
        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center text-white transition-all hover:scale-110 z-10"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl aspect-video"
        >
          <Image
            src={project.images[currentIndex]}
            alt={`${project.name} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center text-white transition-all hover:scale-110 z-10"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Image Counter */}
      <div className="text-center py-2">
        <span className="text-white/70 text-sm">
          {currentIndex + 1} / {project.images.length}
        </span>
      </div>

      {/* Thumbnail Strip */}
      <div className="p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-center gap-2 md:gap-3 overflow-x-auto pb-2">
          {project.images.map((image, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                idx === currentIndex 
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-black" 
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Contact Form Component
function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', number: '', message: '' })
        setSubmitStatus('idle')
        onClose()
      }, 2000)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-navy/10 hover:bg-navy/20 transition-colors z-10"
        >
          <X className="w-4 h-4 text-navy" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-navy to-navy/90 px-4 py-5 text-center">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mx-auto mb-2">
            <Mail className="w-6 h-6 text-navy" />
          </div>
          <h2 className="text-xl font-serif font-bold text-white mb-1">Contact Us</h2>
          <p className="text-white/80 text-xs">Send us a message and we'll get back to you soon</p>
        </div>

        {/* Form */}
        <div className="p-4">
          {submitStatus === 'success' ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-5"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">Message Sent!</h3>
              <p className="text-navy/70 text-sm">We'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-navy mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-navy mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="number" className="block text-xs font-semibold text-navy mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="number"
                  required
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="+966 5XX XXX XXXX"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-navy mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-2 px-4 text-sm rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxProject, setLightboxProject] = useState<typeof projects[0] | null>(null)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const openLightbox = (project: typeof projects[0], imageIndex: number) => {
    setLightboxProject(project)
    setLightboxImageIndex(imageIndex)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const openContactForm = () => {
    setContactFormOpen(true)
    setMobileMenuOpen(false)
    document.body.style.overflow = 'hidden'
  }

  const closeContactForm = () => {
    setContactFormOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-navy/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Lightbox Gallery */}
      <LightboxGallery
        project={lightboxProject}
        initialImageIndex={lightboxImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />

      {/* Contact Form Popup */}
      <ContactForm
        isOpen={contactFormOpen}
        onClose={closeContactForm}
      />

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
                src="/Cover Photos/Town of Luxury  LOGO 2026 Final-2 (2).png"
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
                <Button 
                  onClick={openContactForm}
                  className="bg-gold text-navy hover:bg-gold-dark font-semibold"
                >
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
                <Button 
                  onClick={openContactForm}
                  className="bg-gold text-navy hover:bg-gold-dark font-semibold w-fit"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Navy background fallback */}
        <div className="absolute inset-0 bg-navy z-0" />
        
        {/* Hero background video - subtle, low opacity so it acts as ambient background */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-40">
          <iframe
            src="https://www.youtube.com/embed/eGHiYvu77aY?autoplay=1&mute=1&loop=1&playlist=eGHiYvu77aY&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&rel=0&playsinline=1&enablejsapi=1"
            allow="autoplay; encrypted-media"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              pointerEvents: 'none',
              border: 'none',
              objectFit: 'cover',
            }}
          />
        </div>
        
        {/* Semi-transparent overlay: darkens video for high contrast, keeps logo & typography clear */}
        <div 
          className="absolute inset-0 pointer-events-none z-[2]" 
          style={{
            background: 'linear-gradient(to bottom, rgba(23, 37, 58, 0.75) 0%, rgba(23, 37, 58, 0.55) 50%, rgba(23, 37, 58, 0.85) 100%)',
          }}
        />
        
        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-[30] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            // Use a single hover target to avoid multi-keyframe spring error
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
            <Image
              src="/Cover Photos/Town of Luxury  LOGO 2026 Final-2 (2).png"
              alt="Town of Luxury Logo"
              width={150}
              height={150}
              className="mx-auto mb-8 h-32 w-auto lg:h-40 relative z-10 drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              From Vision to Reality
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                type: "spring",
                stiffness: 150
              }}
              className="block text-gold mt-2 drop-shadow-[0_0_30px_rgba(197,165,114,0.5)]"
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
            Premier Construction and Fit-out Solutions in KSA
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold/60 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse" />
              <Button size="lg" className="relative bg-gold text-navy hover:bg-gold-dark font-semibold text-lg px-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                View Our Projects
              </Button>
            </motion.a>
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
                    className="object-cover grayscale"
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

      {/* Vision and Mission Section */}
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
              Vision and Mission
            </motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-gold mt-4" />
          </motion.div>
          
          {/* Vision and Mission Cards */}
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
                  <p className="font-bold text-navy">Design and Build</p>
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
                  alt="Private Villas and Estates"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-serif text-2xl font-bold">Private Villas and Estates</h3>
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

      {/* Services Section - Part 2: Commercial and Interiors */}
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
              Commercial and Interiors
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
                    <p className="text-navy font-medium text-sm">Core and Shell</p>
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
                    <p className="text-navy text-sm">Build-only and Design-and-Build</p>
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
                    <p className="text-navy text-sm">Loose furniture and equipment</p>
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
                <h3 className="font-bold text-navy text-xl">Complete and Seamless Delivery</h3>
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
      <section id="projects" className="py-20 lg:py-28 bg-[#FAF8F5] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <motion.span variants={fadeIn} className="text-gold font-semibold uppercase tracking-wider text-sm">
                  FEATURED PROJECTS
                </motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-2 sm:text-4xl lg:text-5xl">
                  Hospitality and Entertainment
                </motion.h2>
                <motion.div variants={fadeIn} className="w-16 h-1 bg-gold mt-4" />
              </div>
              
              {/* Company Profile Download Button */}
              <motion.a
                href="/portfilo.pdf"
                download="Town-of-Luxury-Company-Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-3 bg-navy hover:bg-gold text-white hover:text-navy rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group flex-shrink-0"
              >
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline font-semibold text-sm">Company Profile</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenLightbox={openLightbox} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Portfolio Overview Section */}
      <section className="py-16 lg:py-24 bg-[#F5F5F0] overflow-hidden">
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
              OUR PORTFOLIO
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-2 sm:text-4xl lg:text-5xl">
              Project Portfolio Overview
            </motion.h2>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-gold mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Stats Card - Navy Background */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="bg-navy rounded-xl overflow-hidden">
                {/* 20+ Completed Projects */}
                <div className="p-8 text-center border-b border-white/10">
                  <p className="font-serif text-5xl lg:text-6xl font-bold text-gold mb-2">20+</p>
                  <p className="text-white/80">Completed Projects</p>
                </div>
                
                {/* 100M+ Total Value */}
                <div className="p-8 text-center border-b border-white/10">
                  <p className="font-serif text-5xl lg:text-6xl font-bold text-gold mb-2">100M+</p>
                  <p className="text-white/80">Total Value (SAR)</p>
                </div>
                
                {/* 100% Completion Rate */}
                <div className="p-8 text-center">
                  <p className="font-serif text-5xl lg:text-6xl font-bold text-white mb-2">100%</p>
                  <p className="text-white/80">Completion Rate</p>
                </div>
              </div>
            </motion.div>

            {/* Project Categories Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy">Project Categories</h3>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6">
                  {/* Fit-Out Works */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">Fit-Out Works</span>
                      <span className="text-gold font-semibold">57%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "57%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gold rounded-full"
                      />
                    </div>
                  </div>

                  {/* Skeleton Works */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">Skeleton Works</span>
                      <span className="text-gold font-semibold">29%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "29%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-navy rounded-full"
                      />
                    </div>
                  </div>

                  {/* MEP and Other */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">MEP and Other</span>
                      <span className="text-gold font-semibold">14%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "14%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-[#D4C5A9] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                      className="object-contain mix-blend-screen"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Sela</h3>
                    <p className="text-gold text-sm">Premium Entertainment and Hospitality</p>
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
                    Twisted Minds and Sound Studio
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
                      className="object-contain mix-blend-screen"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">Leejam Sports</h3>
                    <p className="text-gold text-sm">Leading Fitness and Wellness Operator</p>
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
                      className="object-contain mix-blend-screen"
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
                      className="object-contain mix-blend-screen"
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

      {/* Certifications Section */}
      <section className="py-20 lg:py-28 bg-[#2D3748] overflow-hidden">
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
              CREDENTIALS
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-white mt-2 sm:text-4xl lg:text-5xl">
              Company Certifications and Documents
            </motion.h2>
          </motion.div>

          {/* Three Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-6"
          >
            {/* Industry Standards */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="bg-[#3D4F5F] rounded-lg p-6 text-center h-full border border-white/10 hover:border-gold/60 hover:shadow-[0_0_40px_rgba(197,165,114,0.4)] transition-all duration-300 group">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl group-hover:shadow-gold/60"
                >
                  <Cog className="w-7 h-7 text-navy" />
                </motion.div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">Industry Standards</h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                  Full compliance with Saudi Building Code and GCC construction regulations
                </p>
              </div>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="bg-[#3D4F5F] rounded-lg p-6 text-center h-full border border-white/10 hover:border-gold/60 hover:shadow-[0_0_40px_rgba(197,165,114,0.4)] transition-all duration-300 group">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl group-hover:shadow-gold/60"
                >
                  <Shield className="w-7 h-7 text-navy" />
                </motion.div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">Quality Assurance</h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                  Rigorous quality control processes and best practices implementation
                </p>
              </div>
            </motion.div>

            {/* Documentation */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="bg-[#3D4F5F] rounded-lg p-6 text-center h-full border border-white/10 hover:border-gold/60 hover:shadow-[0_0_40px_rgba(197,165,114,0.4)] transition-all duration-300 group">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl group-hover:shadow-gold/60"
                >
                  <Award className="w-7 h-7 text-navy" />
                </motion.div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">Documentation</h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                  Complete company registration and licensing documentation available
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Excellence Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-[#3D4F5F] rounded-lg p-6 mb-10 border border-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <Award className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Professional Excellence</h3>
                  <p className="text-white/70 text-sm">
                    Committed to the highest standards of professionalism and ethical business practices
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-serif text-3xl font-bold text-gold">100%</p>
                <p className="text-white/70 text-sm">Compliance Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Certificate Images - Row 1 (3 Images) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-6"
          >
            {/* Certificate Image 1 - ASO Excellence Award */}
            <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/certficate.jpeg"
                    alt="ASO Excellence Award Certificate"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold">ASO Excellence Award</p>
                    <p className="text-xs opacity-80">September 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certificate Image 2 - Quality Management System */}
            <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/certificate1.jpeg"
                    alt="Quality Management System Accreditation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold">Quality Management</p>
                    <p className="text-xs opacity-80">ASO Accreditation 2021</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certificate Image 3 - Health & Safety Management */}
            <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/certificate3.jpeg"
                    alt="Occupational Health and Safety Management Accreditation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-bold">Health and Safety</p>
                    <p className="text-xs opacity-80">ASO Accreditation 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* PDF Documents - All Certificates */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {/* PDF 1 - ISO 9001:2015 */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/ISO 90012015 General construction.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <Award className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">ISO 9001:2015</h3>
                    <p className="text-white/60 text-xs mb-2">Quality Management</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 2 - ISO 45001:2018 */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/ISO 450012018Occupational Health and Safety Management System.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <Shield className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">ISO 45001:2018</h3>
                    <p className="text-white/60 text-xs mb-2">Health and Safety</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 3 - ISO 14001:2015 */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/ISO 140012015 Environmental Management System.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <Globe className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">ISO 14001:2015</h3>
                    <p className="text-white/60 text-xs mb-2">Environmental</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 4 - Membership Certificate */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/004.Membership Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <Users className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">Membership</h3>
                    <p className="text-white/60 text-xs mb-2">Certificate</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 5 - Classification Certificate */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/011.شهادة تصنيف.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">Classification</h3>
                    <p className="text-white/60 text-xs mb-2">Certificate</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 6 - Company Registration */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/TOL KSA - EN 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <Briefcase className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">Company Registration</h3>
                    <p className="text-white/60 text-xs mb-2">Official Document</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 7 - Zakat and Tax Certificate */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/012.شهـادة هيـئة زكـاه والدخل - مدينـة الفخـامة (1).PDF"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <Award className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">Zakat and Tax Authority</h3>
                    <p className="text-white/60 text-xs mb-2">Certificate</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* PDF 8 - National Address Certificate */}
            <motion.div 
              variants={scaleIn} 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/العنوان الوطني.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#3D4F5F] rounded-lg p-4 h-full border border-white/10 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(197,165,114,0.3)] transition-all duration-300 cursor-pointer group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-gold/50"
                    >
                      <MapPin className="w-6 h-6 text-navy" />
                    </motion.div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">National Address</h3>
                    <p className="text-white/60 text-xs mb-2">Certificate</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">View PDF</p>
                  </div>
                </div>
              </a>
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
                  src="/Cover Photos/Town of Luxury  LOGO 2026 Final-2 (2).png"
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
              
              {/* Social Media Icons */}
              <div className="flex gap-4 mt-6">
                <motion.a
                  href="https://x.com/townofluxuryksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors"
                  aria-label="Follow us on Twitter/X"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/townofluxuryksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/company/town-of-luxury-ksa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
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
                <li>
                  <motion.a
                    href="https://www.google.com/search?newwindow=1&sca_esv=d5a9de7bb6a34566&biw=1536&bih=730&sxsrf=ANbL-n5NgvC1bxkqUzBRtio5Yr5uMO3PDg:1770806210297&kgmid=/g/11txj3hpv_&q=Town+of+luxury&source=sh/x/loc/uni/m1/1&kgs=869ba6637faa75b8&shndl=30&shem=sume,shrtsdl&utm_source=sume,shrtsdl,sh/x/loc/uni/m1/1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 text-gold mt-0.5" />
                    <span className="text-sm">
                      Northern Ring Road, Exit 6, Al Hussain Top Up Building, 
                      Office #131, Riyadh, KSA
                    </span>
                  </motion.a>
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
                    href="https://www.townofluxurysa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <Globe className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>www.townofluxurysa.com</span>
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

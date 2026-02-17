"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { useTranslations, useLocale } from "next-intl"
import { usePathname } from "next/navigation"
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

// navLinks moved inside HomePage component to access translations

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
    coverImage: "/Copy of DSC02255.jpg",
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
  const t = useTranslations()
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
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        'service_dpv6si6',
        'template_unztacr',
        {
          from_name: formData.name,
          user_email: formData.email,
          user_phone: formData.number,
          message: formData.message,
        },
        '8WdyzlioWY6xZuXFT'
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', number: '', message: '' })
      setTimeout(() => {
        setSubmitStatus('idle')
        onClose()
      }, 2000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
          <h2 className="text-xl font-serif font-bold text-white mb-1">{t('contact.form.title')}</h2>
          <p className="text-white/80 text-xs">{t('contact.form.subtitle')}</p>
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
              <h3 className="text-lg font-bold text-navy mb-1">{t('contact.form.success')}</h3>
              <p className="text-navy/70 text-sm">{t('contact.form.successMessage')}</p>
            </motion.div>
          ) : submitStatus === 'error' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-4"
            >
              <p className="text-red-600 text-sm font-medium mb-3">{t('contact.form.error')}</p>
              <button
                type="button"
                onClick={() => setSubmitStatus('idle')}
                className="text-sm text-gold hover:underline font-semibold"
              >
                {t('contact.form.tryAgain')}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-navy mb-1">
                  {t('contact.form.name')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-navy mb-1">
                  {t('contact.form.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="number" className="block text-xs font-semibold text-navy mb-1">
                  {t('contact.form.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="number"
                  required
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-navy mb-1">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border-2 border-navy/20 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
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
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    {t('contact.form.send')}
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
  const t = useTranslations()
  
  const locale = useLocale()
  const pathname = usePathname()
  const switchToLocale = locale === 'en' ? 'ar' : 'en'
  // Build switch URL: replace current locale prefix with the other
  const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), '') || '/'
  const switchHref = `/${switchToLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`

  const navLinks = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.ceo'), href: "#ceo" },
    { name: t('nav.vision'), href: "#vision" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ]
  
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
                {t('common.companyName')}
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
              {/* Language Switcher - Desktop */}
              <motion.a
                href={switchHref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 }}
                className="flex items-center gap-1.5 border border-navy/30 hover:border-gold rounded-full px-3 py-1.5 transition-all group"
                title={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                <Globe className="w-3.5 h-3.5 text-navy group-hover:text-gold transition-colors" />
                <span className="text-xs font-bold text-navy group-hover:text-gold transition-colors tracking-wide">
                  {locale === 'en' ? 'عربي' : 'EN'}
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Button 
                  onClick={openContactForm}
                  className="bg-gold text-navy hover:bg-gold-dark font-semibold"
                >
                  {t('nav.contactUs')}
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
                {/* Language Switcher - Mobile */}
                <a
                  href={switchHref}
                  className="flex items-center gap-2 text-sm font-semibold text-navy border border-navy/30 hover:border-gold hover:text-gold px-4 py-2 rounded-full transition-all w-fit"
                >
                  <Globe className="w-4 h-4" />
                  {locale === 'en' ? 'Switch to Arabic / عربي' : 'Switch to English / EN'}
                </a>

                <Button 
                  onClick={openContactForm}
                  className="bg-gold text-navy hover:bg-gold-dark font-semibold w-fit"
                >
                  {t('nav.contactUs')}
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
            src="https://www.youtube.com/embed/_XQNUudps2w?autoplay=1&mute=1&loop=1&playlist=_XQNUudps2w&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&rel=0&playsinline=1&enablejsapi=1"
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
              {t('hero.title')}
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
              {t('hero.subtitle')}
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          >
            {t('hero.description')}
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
                {t('hero.viewProjects')}
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
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">{t('about.tag')}</span>
              <h2 className="font-serif text-4xl font-bold text-navy mt-3 sm:text-5xl lg:text-6xl whitespace-pre-line">
                {t('about.title')}
              </h2>
              
              {/* Gold underline */}
              <div className="w-16 h-1 bg-gold mt-6 mb-8" />
              
              {/* Main paragraph */}
              <p className="text-navy text-lg leading-relaxed mb-6">
                <span className="font-bold">{t('common.companyName')}</span> {t('about.established')}{" "}
                <span className="font-bold">{t('about.year')}</span>{t('about.establishedSuffix')}
              </p>
              
              {/* Second paragraph */}
              <p className="text-navy/80 text-lg leading-relaxed mb-8">
                {t('about.description')}{" "}
                <span className="underline decoration-gold decoration-2 underline-offset-4">
                  {t('about.descriptionHighlight')}
                </span>{" "}
                {t('about.descriptionSuffix')}
              </p>
              
              {/* Highlighted quote box */}
              <motion.div
                variants={fadeInUp}
                className="bg-gold/20 rounded-lg p-6 border-l-4 border-gold"
              >
                <p className="text-navy italic leading-relaxed">
                  {t('about.quote')}
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
                  <p className="text-white/80 text-sm">{t('about.stats.established')}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gold rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-navy mb-1">2023</p>
                  <p className="text-navy/80 text-sm">{t('about.stats.expanded')}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#4A5568] rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-white mb-1">4+</p>
                  <p className="text-white/80 text-sm">{t('about.stats.years')}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gold rounded-lg p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-navy mb-1">GCC</p>
                  <p className="text-navy/80 text-sm">{t('about.stats.presence')}</p>
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
                  {t('ceo.tag')}
                </span>
                <h2 className="font-serif text-4xl font-bold text-white mt-3 sm:text-5xl lg:text-6xl whitespace-pre-line">
                  {t('ceo.title')}
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
                    <p className="font-serif text-lg font-bold text-white">{t('ceo.name')}</p>
                    <p className="text-gold text-sm">{t('ceo.position')}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-white/80 text-sm">{t('ceo.experience')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-white/80 text-sm">{t('ceo.relationships')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-white/80 text-sm">{t('ceo.excellence')}</p>
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
                    &ldquo;{t('ceo.quotePrefix')}{" "}
                    <span className="text-gold">{t('ceo.quoteHighlight')}</span>.&rdquo;
                  </p>
                </div>
              </div>

              {/* Message Paragraphs */}
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>
                  {t('ceo.message1Prefix')} <span className="font-bold text-gold">{t('ceo.message1Bold')}</span> {t('ceo.message1Mid')}{" "}
                  <span className="font-bold text-white underline decoration-gold decoration-2 underline-offset-4">{t('ceo.message1Highlight')}</span> {t('ceo.message1Suffix')}
                </p>

                <p>
                  {t('ceo.message2Prefix')}{" "}
                  <span className="font-bold text-gold">{t('ceo.message2Bold')}</span>{" "}
                  {t('ceo.message2Suffix')}
                </p>

                {/* Highlighted Quote Box */}
                <div className="bg-gold/10 border-l-4 border-gold p-5 rounded-r-lg">
                  <p className="text-white">
                    <span className="font-bold text-gold">{t('ceo.highlightBold')}</span>{" "}
                    {t('ceo.highlightSuffix')}
                  </p>
                </div>

                <p className="text-white/80">
                  {t('ceo.closing')}
                </p>

                {/* Signature */}
                <div className="pt-4">
                  <p className="text-gold italic">{t('ceo.regards')}</p>
                  <p className="font-serif text-xl font-bold text-white mt-1">{t('ceo.signature')}</p>
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
              {t('vision.tag')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-2 sm:text-4xl lg:text-5xl">
              {t('vision.title')}
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
                  <h3 className="font-serif text-2xl font-bold text-white">{t('vision.visionTitle')}</h3>
                </div>
                
                <p className="text-gold italic text-lg leading-relaxed mb-4">
                  {t('vision.visionTextPrefix')} <span className="font-bold text-white not-italic">{t('vision.visionTextBold')}</span> {t('vision.visionTextSuffix')}
                </p>
                
                <p className="text-white/80 leading-relaxed mb-8">
                  {t('vision.visionDescPrefix')}{" "}
                  <span className="underline decoration-gold decoration-2 underline-offset-4 font-medium text-white">
                    {t('vision.visionDescHighlight')}
                  </span>.
                </p>
                
                <div className="flex items-center gap-2 text-white/70 italic">
                  <Quote className="w-5 h-5 text-gold" />
                  <span>{t('vision.visionQuote')}</span>
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
                  <h3 className="font-serif text-2xl font-bold text-navy">{t('vision.missionTitle')}</h3>
                </div>
                
                <p className="text-navy text-lg leading-relaxed mb-4">
                  {t('vision.missionTextPrefix')} <span className="font-bold">{t('vision.missionTextBold')}</span> {t('vision.missionTextSuffix')}
                </p>
                
                <p className="text-navy/80 leading-relaxed mb-8">
                  {t('vision.missionDescPrefix')}{" "}
                  <span className="bg-white/30 px-1 font-medium text-navy">
                    {t('vision.missionDescHighlight')}
                  </span>{" "}
                  {t('vision.missionDescSuffix')}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-navy/20">
                  <div className="text-center">
                    <CheckCircle className="w-6 h-6 text-navy mx-auto mb-1" />
                    <span className="text-navy text-sm font-medium">{t('vision.quality')}</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 text-navy mx-auto mb-1" />
                    <span className="text-navy text-sm font-medium">{t('vision.transparency')}</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 text-navy mx-auto mb-1" />
                    <span className="text-navy text-sm font-medium">{t('vision.value')}</span>
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
                <h4 className="font-bold text-navy mb-1">{t('vision.partnership')}</h4>
                <p className="text-navy/70 text-sm">{t('vision.partnershipDesc')}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Cog className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">{t('vision.expertise')}</h4>
                <p className="text-navy/70 text-sm">{t('vision.expertiseDesc')}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gold/20 rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Shield className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">{t('vision.reliability')}</h4>
                <p className="text-navy/70 text-sm">{t('vision.reliabilityDesc')}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gold/20 rounded-lg p-6 text-center border-t-4 border-gold h-full">
                <Heart className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-bold text-navy mb-1">{t('vision.dedication')}</h4>
                <p className="text-navy/70 text-sm">{t('vision.dedicationDesc')}</p>
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
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">{t('services.tag')}</span>
              <h2 className="font-serif text-4xl font-bold text-navy mt-3 sm:text-5xl lg:text-6xl whitespace-pre-line">
                {t('services.residentialTitle')}
              </h2>
              
              <p className="text-navy/80 text-lg leading-relaxed mt-8 mb-8">
                {t('services.residentialDesc')}{" "}
                <span className="underline decoration-gold decoration-2 underline-offset-4">
                  {t('services.residentialDescHighlight')}
                </span>
                {t('services.residentialDescSuffix')}
              </p>
              
              <div className="bg-navy rounded-lg p-6 mb-6">
                <h3 className="text-gold font-bold text-lg mb-4">{t('services.serviceSpectrum')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">{t('services.skeletonWorks')}</p>
                      <p className="text-white/70 text-sm">{t('services.skeletonWorksDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">{t('services.envelopeWorks')}</p>
                      <p className="text-white/70 text-sm">{t('services.envelopeWorksDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">{t('services.fullFitout')}</p>
                      <p className="text-white/70 text-sm">{t('services.fullFitoutDesc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gold text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">{t('services.mepSolutions')}</p>
                      <p className="text-white/70 text-sm">{t('services.mepSolutionsDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <Key className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-bold text-navy">{t('services.fullyFinished')}</p>
                  <p className="text-navy/60 text-sm">{t('services.readyToMove')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <Wrench className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-bold text-navy">{t('services.designAndBuild')}</p>
                  <p className="text-navy/60 text-sm">{t('services.conceptToCompletion')}</p>
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
                  <h3 className="text-white font-serif text-2xl font-bold">{t('services.privateVillasTitle')}</h3>
                  <p className="text-white/80 text-sm">{t('services.privateVillasDesc')}</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-5 h-5 text-navy" />
                  <h3 className="font-bold text-navy text-lg">{t('services.residentialPortfolio')}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">{t('services.portfolioVillas')}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">{t('services.portfolioBuildings')}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">{t('services.portfolioLuxury')}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-2 border-gold">
                    <p className="text-navy font-medium">{t('services.portfolioLabour')}</p>
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
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">{t('services.tag')}</span>
            <h2 className="font-serif text-4xl font-bold text-navy mt-3 sm:text-5xl">
              {t('services.commercialTitle')}
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
                  <h3 className="font-bold text-navy text-xl">{t('services.commercialCardTitle')}</h3>
                </div>
                
                <p className="text-navy/80 leading-relaxed mb-4">
                  {t('services.commercialDesc')}{" "}
                  <span className="underline decoration-gold decoration-2 underline-offset-4">
                    {t('services.commercialDescHighlight')}
                  </span>.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">{t('services.skeletonWorksTag')}</p>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">{t('services.initialMep')}</p>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">{t('services.siteDevelopment')}</p>
                  </div>
                  <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
                    <p className="text-navy font-medium text-sm">{t('services.coreAndShell')}</p>
                  </div>
                </div>
              </div>
              
              {/* Interior Fit-Out Card */}
              <div className="bg-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                    <Paintbrush className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-xl">{t('services.interiorFitoutTitle')}</h3>
                </div>
                
                <p className="text-navy/80 leading-relaxed mb-4">
                  <span className="font-bold text-navy">{t('services.interiorFitoutDesc')}</span>{t('services.interiorFitoutSuffix')}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">{t('services.buildOnly')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">{t('services.fullInterior')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">{t('services.mepFixes')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-navy" />
                    <p className="text-navy text-sm">{t('services.looseFurniture')}</p>
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
                <h3 className="font-bold text-navy text-xl">{t('services.completeDelivery')}</h3>
                <p className="text-navy/60">{t('services.completeDeliveryDesc')}</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-navy text-lg mb-4">{t('services.interiorSpecializations')}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <Store className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">{t('services.retailSpaces')}</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <UtensilsCrossed className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">{t('services.restaurants')}</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <Coffee className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">{t('services.cafes')}</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gold/10 rounded border border-gold/30">
                    <Briefcase className="w-5 h-5 text-gold" />
                    <p className="text-navy font-medium">{t('services.offices')}</p>
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
                  {t('portfolio.featuredTag')}
                </motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-2 sm:text-4xl lg:text-5xl">
                  {t('portfolio.featuredTitle')}
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
                <span className="hidden sm:inline font-semibold text-sm">{t('portfolio.companyProfile')}</span>
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
              {t('portfolio.tag')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-navy mt-2 sm:text-4xl lg:text-5xl">
              {t('portfolio.title')}
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
                  <p className="text-white/80">{t('portfolio.completedProjects')}</p>
                </div>
                
                <div className="p-8 text-center border-b border-white/10">
                  <p className="font-serif text-5xl lg:text-6xl font-bold text-gold mb-2">100M+</p>
                  <p className="text-white/80">{t('portfolio.totalValue')}</p>
                </div>
                
                <div className="p-8 text-center">
                  <p className="font-serif text-5xl lg:text-6xl font-bold text-white mb-2">100%</p>
                  <p className="text-white/80">{t('portfolio.completionRate')}</p>
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
                  <h3 className="font-serif text-xl font-bold text-navy">{t('portfolio.projectCategories')}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">{t('portfolio.fitOutWorks')}</span>
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

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">{t('portfolio.skeletonWorks')}</span>
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

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-navy">{t('portfolio.mepAndOther')}</span>
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
              {t('clients.trustedTag')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-white mt-2 sm:text-4xl lg:text-5xl">
              {t('clients.valuedTitle')}
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
              {t('clients.introText')}{" "}
              <span className="underline decoration-gold decoration-2 underline-offset-4 font-medium text-white">
                {t('clients.introHighlight')}
              </span>
              {t('clients.introSuffix')}
              <br />
              {t('clients.introLine2')}
            </p>
          </motion.div>
          
          {/* Client Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 min-w-0"
          >
            {/* Sela Card */}
            <motion.div variants={scaleIn} className="min-w-0">
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative pr-16 overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-navy" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6 min-w-0">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/sela.jpeg"
                      alt="Sela Logo"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-bold text-white">Sela</h3>
                    <p className="text-gold text-sm">{t('clients.sela.description')}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.sela.p1')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.sela.p2')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.sela.p3')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.sela.p4')}</li>
                </ul>
              </div>
            </motion.div>

            {/* Leejam Sports Card */}
            <motion.div variants={scaleIn} className="min-w-0">
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative pr-16 overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-navy" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6 min-w-0">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/leejam.jpeg"
                      alt="Leejam Sports Logo"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-bold text-white">Leejam Sports</h3>
                    <p className="text-gold text-sm">{t('clients.leejam.description')}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.leejam.p1')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.leejam.p2')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.leejam.p3')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.leejam.p4')}</li>
                </ul>
              </div>
            </motion.div>

            {/* Madaen Star Group Card */}
            <motion.div variants={scaleIn} className="min-w-0">
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative pr-16 overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6 min-w-0">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/pictures/clients logos/Madaen .jpeg"
                      alt="Madaen Star Group Logo"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-bold text-white">Madaen Star Group</h3>
                    <p className="text-gold text-sm">{t('clients.madaen.description')}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.madaen.p2')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.madaen.p3')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.madaen.p4')}</li>
                </ul>
              </div>
            </motion.div>

            {/* Ibrahim Al Hadithy Group Card */}
            <motion.div variants={scaleIn} className="min-w-0">
              <div className="bg-[#3D4F5F] rounded-lg p-6 h-full relative pr-16 overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-4 mb-6 min-w-0">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                    <Image
                      src="/ibrahim.jpeg"
                      alt="Ibrahim Al Hadithy Group Logo"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl font-bold text-white">Ibrahim Al Hadithy Group</h3>
                    <p className="text-gold text-sm">{t('clients.ibrahim.description')}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.ibrahim.p1')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.ibrahim.p2')}</li>
                  <li className="flex items-center gap-2 text-white/80 text-sm"><div className="w-2 h-2 rounded-full bg-gold" />{t('clients.ibrahim.p3')}</li>
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
              {t('certifications.tag')}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl font-bold text-white mt-2 sm:text-4xl lg:text-5xl">
              {t('certifications.title')}
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
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">{t('certifications.industryStandards')}</h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                  {t('certifications.industryStandardsDesc')}
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
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">{t('certifications.qualityAssurance')}</h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                  {t('certifications.qualityAssuranceDesc')}
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
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gold transition-colors">{t('certifications.documentation')}</h3>
                <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                  {t('certifications.documentationDesc')}
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
                  <h3 className="font-serif text-xl font-bold text-white">{t('certifications.professionalExcellence')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('certifications.professionalExcellenceDesc')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-serif text-3xl font-bold text-gold">100%</p>
                <p className="text-white/70 text-sm">{t('certifications.complianceRate')}</p>
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
                    <p className="text-xs font-bold">{t('certifications.cert1Name')}</p>
                    <p className="text-xs opacity-80">{t('certifications.cert1Date')}</p>
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
                    <p className="text-xs font-bold">{t('certifications.cert2Name')}</p>
                    <p className="text-xs opacity-80">{t('certifications.cert2Date')}</p>
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
                    <p className="text-xs font-bold">{t('certifications.cert3Name')}</p>
                    <p className="text-xs opacity-80">{t('certifications.cert3Date')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.iso9001')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.iso9001Desc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.iso45001')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.iso45001Desc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.iso14001')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.iso14001Desc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.membership')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.membershipDesc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.classification')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.classificationDesc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.companyReg')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.companyRegDesc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.zakat')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.zakatDesc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-gold transition-colors">{t('certifications.nationalAddress')}</h3>
                    <p className="text-white/60 text-xs mb-2">{t('certifications.nationalAddressDesc')}</p>
                    <p className="text-gold text-xs group-hover:scale-110 inline-block transition-transform">{t('certifications.viewPdf')}</p>
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
                  {t('common.companyName')}
                </span>
              </div>
              <p className="text-white/70 max-w-md leading-relaxed">
                {t('footer.description')}
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
              <h3 className="font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
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
              <h3 className="font-semibold text-white mb-4">{t('footer.contactTitle')}</h3>
              <ul className="space-y-4">
                <li>
                  <motion.a
                    href="https://share.google/LmoUrGNbkc2pvPmQw"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 text-gold mt-0.5" />
                    <span className="text-sm">{t('footer.address')}</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="tel:+966579610004"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-gold" />
                    <span>+966 57 961 0004</span>
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
              {t('footer.copyright')} {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Operations Director",
    company: "Swift Distribution Co.",
    type: "Shipper",
    rating: 5,
    content: "Garrison Logistics has transformed our supply chain operations. Their carrier network is exceptional, and we've seen a 40% improvement in on-time deliveries since partnering with them.",
  },
  {
    name: "Sarah Martinez",
    role: "Owner-Operator",
    company: "Martinez Trucking LLC",
    type: "Carrier",
    rating: 5,
    content: "As a carrier, working with Garrison has been a game-changer. Consistent loads, fair rates, and their team actually answers the phone when you need them. That's rare in this industry.",
  },
  {
    name: "David Chen",
    role: "Logistics Manager",
    company: "TechParts Manufacturing",
    type: "Shipper",
    rating: 5,
    content: "Their expedited freight service saved our production line twice last month. When we have urgent shipments, Garrison is our first call. Reliable, professional, and always delivers.",
  },
  {
    name: "Robert Williams",
    role: "Fleet Manager",
    company: "CrossCountry Carriers",
    type: "Carrier",
    rating: 5,
    content: "The dedicated lanes program has given my fleet consistent work. Weekly settlements are always on time, and the dispatch team communicates clearly. A true partner in success.",
  },
  {
    name: "Jennifer Adams",
    role: "Supply Chain VP",
    company: "FreshGoods Inc.",
    type: "Shipper",
    rating: 5,
    content: "For our temperature-sensitive produce shipments, Garrison's reefer network is unmatched. Zero spoilage issues in over 200 loads this year. They understand cold chain logistics.",
  },
  {
    name: "Carlos Rodriguez",
    role: "Owner",
    company: "Rodriguez Transport",
    type: "Carrier",
    rating: 5,
    content: "Joined their MC leasing program last year and haven't looked back. The compliance support alone is worth it. They handle the paperwork so I can focus on driving.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const itemsPerView = 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerView)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    goToNext()
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 bg-white/10 text-accent font-semibold text-sm rounded-full mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance"
          >
            Trusted by Shippers & Carriers Nationwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            See what our partners have to say about working with Garrison Logistics
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <motion.div 
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className="w-10 h-10 text-accent/20 mb-4" />
                    </motion.div>
                    <p className="text-foreground leading-relaxed flex-grow mb-6">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.2, delay: 0.5 + i * 0.05 }}
                        >
                          <Star className="w-5 h-5 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          testimonial.type === "Shipper" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {testimonial.type}
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-accent w-8" : "bg-white/30 w-2 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

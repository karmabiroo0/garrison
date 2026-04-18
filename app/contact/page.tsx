"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  ChevronDown
} from "lucide-react"

const faqs = [
  {
    question: "What types of freight do you handle?",
    answer: "We handle a wide variety of freight including FTL, LTL, reefer, flatbed, hotshot, expedited, Amazon relay, dock-to-dock, airport freight, and drayage services across 48 states.",
  },
  {
    question: "How quickly can you find a carrier for my shipment?",
    answer: "Our extensive carrier network allows us to typically find a carrier within hours of receiving your shipment details. For expedited freight, we can often arrange pickup within 2-4 hours.",
  },
  {
    question: "What are your payment terms for carriers?",
    answer: "We offer competitive payment terms with options for quick pay. Standard payment terms and quick pay options are discussed during carrier onboarding.",
  },
  {
    question: "Do you provide tracking updates?",
    answer: "Yes, we provide real-time tracking updates and maintain constant communication with both shippers and carriers throughout the delivery process.",
  },
  {
    question: "What insurance coverage do you require from carriers?",
    answer: "All carriers must maintain minimum $1M auto liability and $100K cargo insurance. Additional coverage may be required for certain commodities.",
  },
]

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    shipmentType: "",
    origin: "",
    destination: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Parallax for hero
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <main>
      <Navigation />

      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative pt-32 pb-16 bg-primary overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 scale-110">
            <Image
              src="/images/contact-hero-bg.jpg"
              alt="Contact background"
              fill
              className="object-cover opacity-20"
            />
          </div>
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Get a Freight Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Contact our team for competitive rates and reliable freight solutions tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold text-foreground mb-6"
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, label: "Phone", value: "123-456-7890", href: "tel:123-456-7890", accent: false },
                  { icon: Mail, label: "Email", value: "quotes@garrisonlogistics.com", href: "mailto:quotes@garrisonlogistics.com", accent: false },
                  { icon: MapPin, label: "Location", value: "Vinemont, AL 35179, USA", href: null, accent: false },
                  { icon: Clock, label: "Hours", value: "24/7 Support", href: null, accent: true },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 ${item.accent ? "bg-accent" : "bg-primary"} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-foreground">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="bg-primary rounded-xl p-6 text-white"
              >
                <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Our dispatch team is available around the clock for urgent freight needs.
                </p>
                <motion.a
                  href="tel:123-456-7890"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl p-12 shadow-lg text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="text-2xl font-bold text-foreground mb-4"
                    >
                      Quote Request Submitted!
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="text-muted-foreground mb-6"
                    >
                      Thank you for your inquiry. Our team will review your request and provide a competitive quote within 1-2 hours.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          shipmentType: "",
                          origin: "",
                          destination: "",
                          message: "",
                        })
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Submit Another Request
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.35 }}
                      className="text-2xl font-bold text-foreground mb-8"
                    >
                      Request a Quote
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      {[
                        { id: "name", label: "Your Name *", type: "text", placeholder: "", span: false },
                        { id: "company", label: "Company Name *", type: "text", placeholder: "", span: false },
                        { id: "email", label: "Email Address *", type: "email", placeholder: "", span: false },
                        { id: "phone", label: "Phone Number *", type: "tel", placeholder: "", span: false },
                      ].map((field, index) => (
                        <motion.div
                          key={field.id}
                          custom={index}
                          variants={formItemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            required
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          />
                        </motion.div>
                      ))}
                      
                      <motion.div
                        custom={4}
                        variants={formItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <label htmlFor="shipmentType" className="block text-sm font-medium text-foreground mb-2">
                          Shipment Type *
                        </label>
                        <select
                          id="shipmentType"
                          name="shipmentType"
                          required
                          value={formData.shipmentType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select type...</option>
                          <option value="ftl">Full Truckload (FTL)</option>
                          <option value="ltl">Less Than Truckload (LTL)</option>
                          <option value="reefer">Reefer / Temperature Controlled</option>
                          <option value="flatbed">Flatbed</option>
                          <option value="expedited">Expedited</option>
                          <option value="hotshot">Hotshot</option>
                          <option value="other">Other</option>
                        </select>
                      </motion.div>
                      
                      <motion.div
                        custom={5}
                        variants={formItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <label htmlFor="origin" className="block text-sm font-medium text-foreground mb-2">
                          Origin (City, State) *
                        </label>
                        <input
                          type="text"
                          id="origin"
                          name="origin"
                          required
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder="e.g., Dallas, TX"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        />
                      </motion.div>
                      
                      <motion.div
                        custom={6}
                        variants={formItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="sm:col-span-2"
                      >
                        <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                          Destination (City, State) *
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g., Atlanta, GA"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        />
                      </motion.div>
                      
                      <motion.div
                        custom={7}
                        variants={formItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="sm:col-span-2"
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Shipment Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Weight, dimensions, pickup/delivery dates, special requirements..."
                          className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      custom={8}
                      variants={formItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Submitting Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Get Quote
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our freight brokerage services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  whileHover={{ backgroundColor: "rgba(18, 58, 99, 0.02)" }}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

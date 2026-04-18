"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Truck, Package, Route, Thermometer, Layers, Zap, Globe, Clock, FileCheck, Box } from "lucide-react"

const brokerageServices = [
  {
    icon: Package,
    title: "Freight Brokerage (FTL / LTL)",
    description: "Full truckload and less-than-truckload solutions with competitive rates and reliable carriers.",
    image: "/images/services/ftl-ltl.jpg",
  },
  {
    icon: Box,
    title: "Amazon Freight",
    description: "Specialized Amazon relay and freight services with experienced, vetted carriers.",
    image: "/images/services/amazon-freight.jpg",
  },
  {
    icon: Truck,
    title: "Dock-to-Dock Freight",
    description: "Seamless dock-to-dock delivery services for warehouse and distribution centers.",
    image: "/images/services/dock-freight.jpg",
  },
  {
    icon: Route,
    title: "Daily Routes (Multi-State)",
    description: "Consistent daily route coverage across multiple states with reliable scheduling.",
    image: "/images/services/daily-routes.jpg",
  },
  {
    icon: Clock,
    title: "Dedicated Routes",
    description: "Exclusive lane solutions for consistent, high-volume shipping needs.",
    image: "/images/services/dedicated-routes.jpg",
  },
  {
    icon: Thermometer,
    title: "Reefer Freight Brokerage",
    description: "Temperature-controlled shipping for perishable and sensitive goods.",
    image: "/images/services/reefer-freight.jpg",
  },
  {
    icon: Layers,
    title: "Flatbed Freight Brokerage",
    description: "Open deck solutions for oversized, heavy, and construction materials.",
    image: "/images/services/flatbed-freight.jpg",
  },
  {
    icon: Zap,
    title: "Hotshot Freight",
    description: "Quick-turn, time-sensitive deliveries with smaller equipment options.",
    image: "/images/services/hotshot-freight.jpg",
  },
  {
    icon: Clock,
    title: "Expedited Freight",
    description: "Rush delivery services when time is critical for your shipment.",
    image: "/images/services/expedited-freight.jpg",
  },
  {
    icon: Globe,
    title: "Cross-border Freight",
    description: "International shipping solutions with customs coordination support.",
    image: "/images/services/crossborder-freight.jpg",
  },
]

const mcLeasingService = {
  icon: FileCheck,
  title: "MC Authority Leasing Program",
  description: "Operate under Garrison Logistics MC authority with our comprehensive carrier onboarding program. Includes compliance support, weekly settlements, and brokerage-managed authority system.",
  features: ["Carrier Onboarding Program", "Compliance Support", "Weekly Settlements", "Authority Management"],
  image: "/images/services/mc-leasing.jpg",
}

const rentalEquipment = [
  { name: "Dry Van Rentals", image: "/images/rentals/dry-van.jpg" },
  { name: "Reefer Trailer Rentals", image: "/images/rentals/reefer-trailer.jpg" },
  { name: "Flatbed Trailer Rentals", image: "/images/rentals/flatbed-trailer.jpg" },
  { name: "Semi Truck Rentals", image: "/images/rentals/semi-truck.jpg" },
  { name: "Box Truck Rentals", image: "/images/rentals/box-truck.jpg" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const mcRef = useRef(null)
  const mcInView = useInView(mcRef, { once: true, margin: "-100px" })
  
  const rentalRef = useRef(null)
  const rentalInView = useInView(rentalRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-background">
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
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Comprehensive Freight Brokerage Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From FTL to expedited freight, we connect you with the right carriers for every shipping need.
          </motion.p>
        </motion.div>

        {/* Brokerage Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          {brokerageServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="relative h-40 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MC Leasing Program */}
        <motion.div
          ref={mcRef}
          initial={{ opacity: 0, y: 50 }}
          animate={mcInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="bg-primary rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={mcInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-64 lg:h-auto overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={mcLeasingService.image}
                    alt={mcLeasingService.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={mcInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 lg:p-12 flex flex-col justify-center"
              >
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={mcInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6"
                >
                  <mcLeasingService.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {mcLeasingService.title}
                </h3>
                <p className="text-lg text-white/80 mb-6">
                  {mcLeasingService.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {mcLeasingService.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={mcInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Equipment Rentals */}
        <motion.div
          ref={rentalRef}
          initial={{ opacity: 0, y: 40 }}
          animate={rentalInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={rentalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            >
              Truck & Trailer Rental Services
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={rentalInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground"
            >
              Quality equipment available for your transportation needs
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {rentalEquipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={rentalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold text-center">{item.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

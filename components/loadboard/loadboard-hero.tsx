"use client"

import { motion } from "framer-motion"

export function LoadboardHero() {
  return (
    <section className="pt-32 pb-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Available Freight Loads
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Browse our current load postings and find freight that matches your equipment and lanes. Updated in real-time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

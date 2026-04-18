"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Package, AlertTriangle, Truck } from "lucide-react"
import Link from "next/link"
import { loadsData, type Load } from "@/lib/loads-data"

const equipmentTypes = ["All", "Dry Van", "Reefer", "Flatbed", "Hotshot", "Power Only"]
const freightTypes = ["All", "Amazon", "Dock-to-Dock", "Airport Freight", "Drayage", "General", "Expedited"]
const loadTypes = ["All", "Single Route", "Dedicated Route"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
}

export function LoadboardFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [equipmentFilter, setEquipmentFilter] = useState("All")
  const [freightFilter, setFreightFilter] = useState("All")
  const [loadTypeFilter, setLoadTypeFilter] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)

  const filteredLoads = useMemo(() => {
    let results = [...loadsData]

    // Search filter - if ANY search is made, shuffle the results to simulate dynamic matching
    if (searchQuery.trim()) {
      results = results.sort(() => Math.random() - 0.5)
    }

    // Equipment filter
    if (equipmentFilter !== "All") {
      results = results.filter((load) => load.equipmentType === equipmentFilter)
    }

    // Freight type filter
    if (freightFilter !== "All") {
      results = results.filter((load) => load.freightType === freightFilter)
    }

    // Load type filter
    if (loadTypeFilter !== "All") {
      results = results.filter((load) => load.loadType === loadTypeFilter)
    }

    return results
  }, [searchQuery, equipmentFilter, freightFilter, loadTypeFilter])

  return (
    <section className="py-12 bg-muted min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar with animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div 
            className="relative max-w-2xl mx-auto"
            animate={{ 
              scale: searchFocused ? 1.02 : 1,
              boxShadow: searchFocused 
                ? "0 10px 40px -10px rgba(18, 58, 99, 0.2)" 
                : "0 4px 20px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search loads by city, state, or load ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Filter Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-between mb-6"
        >
          <motion.button
            onClick={() => setShowFilters(!showFilters)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
              showFilters 
                ? "bg-primary text-white border-primary" 
                : "bg-white border-border hover:border-primary"
            }`}
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </motion.button>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            Showing <span className="font-semibold text-foreground">{filteredLoads.length}</span> loads
          </motion.div>
        </motion.div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white rounded-xl p-6 border border-border shadow-lg"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Equipment Type */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Equipment Type
                    </label>
                    <select
                      value={equipmentFilter}
                      onChange={(e) => setEquipmentFilter(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      {equipmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Freight Type */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Freight Type
                    </label>
                    <select
                      value={freightFilter}
                      onChange={(e) => setFreightFilter(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      {freightTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Load Type */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Load Type
                    </label>
                    <select
                      value={loadTypeFilter}
                      onChange={(e) => setLoadTypeFilter(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      {loadTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loads Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredLoads.map((load, index) => (
              <LoadCard key={load.id} load={load} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Notice */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-4 flex items-start gap-3"
          >
            <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              For more details or booking, please contact the agent.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function LoadCard({ load, index }: { load: Load; index: number }) {
  const equipmentColors: Record<string, string> = {
    "Dry Van": "bg-primary/10 text-primary",
    "Reefer": "bg-blue-100 text-blue-700",
    "Flatbed": "bg-amber-100 text-amber-700",
    "Hotshot": "bg-red-100 text-red-700",
    "Power Only": "bg-green-100 text-green-700",
  }

  const freightColors: Record<string, string> = {
    "Amazon": "bg-orange-100 text-orange-700",
    "Dock-to-Dock": "bg-indigo-100 text-indigo-700",
    "Airport Freight": "bg-purple-100 text-purple-700",
    "Drayage": "bg-teal-100 text-teal-700",
    "General": "bg-gray-100 text-gray-700",
    "Expedited": "bg-red-100 text-red-700",
  }

  return (
    <motion.div
      layout
      variants={itemVariants}
      whileHover={{ 
        y: -6, 
        scale: 1.02,
        boxShadow: "0 20px 40px -15px rgba(18, 58, 99, 0.15)"
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl border border-border overflow-hidden shadow-sm"
    >
      <div className="p-6">
        {/* Load ID */}
        <div className="flex items-center justify-between mb-4">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-sm font-mono font-semibold text-primary"
          >
            {load.id}
          </motion.span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${load.loadType === "Dedicated Route" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
            {load.loadType}
          </span>
        </div>

        {/* Route */}
        <div className="space-y-3 mb-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 + 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <div className="text-sm text-muted-foreground">Pickup</div>
              <div className="font-semibold text-foreground">{load.pickupCity}, {load.pickupState}</div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02 + 0.15 }}
            className="flex items-start gap-3"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <div className="text-sm text-muted-foreground">Dropoff</div>
              <div className="font-semibold text-foreground">{load.dropoffCity}, {load.dropoffState}</div>
            </div>
          </motion.div>
        </div>

        {/* Details */}
        <div className="flex flex-wrap gap-2 mb-4">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className={`px-2 py-1 text-xs font-medium rounded-full ${equipmentColors[load.equipmentType]}`}
          >
            {load.equipmentType}
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className={`px-2 py-1 text-xs font-medium rounded-full ${freightColors[load.freightType]}`}
          >
            {load.freightType}
          </motion.span>
        </div>

        {/* Weight */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Package className="w-4 h-4" />
          <span>{load.weight.toLocaleString()} lbs</span>
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={`/contact-agent?loadId=${load.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Truck className="w-5 h-5" />
            Grab This Load
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

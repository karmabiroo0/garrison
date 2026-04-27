"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Upload,
  FileText,
  CheckCircle,
  Download,
  X,
  Shield,
  Truck,
  DollarSign,
  Clock
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  { icon: Truck, title: "Quality Freight", description: "Access to consistent, quality loads across 48 states" },
  { icon: DollarSign, title: "Competitive Rates", description: "Fair market rates with quick pay options available" },
  { icon: Shield, title: "Reliable Partner", description: "Partner with an established, trustworthy broker" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock dispatch and support team" },
]

type FileUpload = {
  name: string
  file: File | null
}

export default function CarrierRegistrationPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    mcNumber: "",
    dotNumber: "",
    contactName: "",
    phone: "",
    email: "",
    insuranceProvider: "",
    agreedToTerms: false,
  })

  const [files, setFiles] = useState<{
    w9: FileUpload
    insurance: FileUpload
    authority: FileUpload
    agreement: FileUpload
  }>({
    w9: { name: "W9 Form", file: null },
    insurance: { name: "Certificate of Insurance", file: null },
    authority: { name: "Operating Authority", file: null },
    agreement: { name: "Signed Carrier Agreement", file: null },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFileChange = useCallback((key: keyof typeof files, file: File | null) => {
    setFiles((prev) => ({
      ...prev,
      [key]: { ...prev[key], file },
    }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()

      // text fields
      formDataToSend.append("companyName", formData.companyName)
      formDataToSend.append("mcNumber", formData.mcNumber)
      formDataToSend.append("dotNumber", formData.dotNumber)
      formDataToSend.append("contactName", formData.contactName)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("insuranceProvider", formData.insuranceProvider)

      // files
      formDataToSend.append("w9", files.w9.file as File)
      formDataToSend.append("insurance", files.insurance.file as File)
      formDataToSend.append("authority", files.authority.file as File)
      formDataToSend.append("agreement", files.agreement.file as File)

      const response = await fetch("/api/carrier", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Submission failed")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/carrier-registration-bg.jpg"
            alt="Carrier registration background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Carrier Registration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Join our carrier network and gain access to quality freight opportunities across the nation.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="agreement" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-12 shadow-lg text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Registration Submitted!</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for registering with Garrison Logistics. Our team will review your application and contact you within 24-48 hours.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Return to Home
              </Link>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Carrier Application</h2>

              {/* Company Information */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  Company Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="mcNumber" className="block text-sm font-medium text-foreground mb-2">
                      MC Number *
                    </label>
                    <input
                      type="text"
                      id="mcNumber"
                      name="mcNumber"
                      required
                      value={formData.mcNumber}
                      onChange={handleChange}
                      placeholder="MC-XXXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="dotNumber" className="block text-sm font-medium text-foreground mb-2">
                      DOT Number *
                    </label>
                    <input
                      type="text"
                      id="dotNumber"
                      name="dotNumber"
                      required
                      value={formData.dotNumber}
                      onChange={handleChange}
                      placeholder="DOT-XXXXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuranceProvider" className="block text-sm font-medium text-foreground mb-2">
                      Insurance Provider *
                    </label>
                    <input
                      type="text"
                      id="insuranceProvider"
                      name="insuranceProvider"
                      required
                      value={formData.insuranceProvider}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  Required Documents
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {(Object.keys(files) as Array<keyof typeof files>).map((key) => (
                    <FileUploadField
                      key={key}
                      label={files[key].name}
                      file={files[key].file}
                      onFileChange={(file) => handleFileChange(key, file)}
                    />
                  ))}
                </div>
              </div>

              {/* Download Agreement */}
              <div className="mb-10 p-6 bg-muted rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">Carrier Agreement</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Please download, review, sign, and upload the carrier agreement document.
                    </p>
                    <a
                      href="/file/contract.pdf"
                      download="Garrison-Logistics-Onboarding.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Carrier Agreement PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the brokerage carrier terms and conditions. I certify that all information provided is accurate and that I am authorized to act on behalf of the company listed above. *
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreedToTerms}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Submit Registration
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FileUploadField({
  label,
  file,
  onFileChange,
}: {
  label: string
  file: File | null
  onFileChange: (file: File | null) => void
}) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      onFileChange(droppedFile)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      onFileChange(selectedFile)
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative border-2 border-dashed rounded-xl p-4 transition-colors ${isDragging
          ? "border-primary bg-primary/5"
          : file
            ? "border-green-500 bg-green-50"
            : "border-border hover:border-primary/50"
        }`}
    >
      <input
        type="file"
        onChange={handleFileSelect}
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${file ? "bg-green-500" : "bg-muted"
          }`}>
          {file ? (
            <CheckCircle className="w-5 h-5 text-white" />
          ) : (
            <Upload className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-foreground">{label}</div>
          {file ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-600 truncate">{file.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onFileChange(null)
                }}
                className="text-muted-foreground hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="text-xs text-muted-foreground">Drag & drop or click to upload</div>
          )}
        </div>
      </div>
    </div>
  )
}

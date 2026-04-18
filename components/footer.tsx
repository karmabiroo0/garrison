"use client"

import Link from "next/link"
import { Truck, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "FTL / LTL Freight", href: "/#services" },
    { label: "Amazon Freight", href: "/#services" },
    { label: "Reefer Freight", href: "/#services" },
    { label: "Flatbed Freight", href: "/#services" },
    { label: "Expedited Freight", href: "/#services" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Loadboard", href: "/loadboard" },
    { label: "Carrier Registration", href: "/carrier-registration" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Carrier Agreement", href: "/carrier-registration#agreement" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center">
                <img className="w-full h-15 text-primary-foreground" src="/gar2.png" />
              </div>
              
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Connecting shippers with reliable carriers across the nation. Your trusted freight brokerage partner for all transportation needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Vinemont, AL 35179, USA</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:123-456-7890" className="hover:text-accent transition-colors">123-456-7890</a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:dispatch@garrisonlogistics.com" className="hover:text-accent transition-colors">dispatch@garrisonlogistics.com</a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Garrison Logistics Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span>DOT# XXXXXXX</span>
              <span className="text-white/30">|</span>
              <span>MC# XXXXXXX</span>
            </div>
          </div>
          <p className="text-white/40 text-xs text-center md:text-left mt-4">
            Garrison Logistics Inc operates as a licensed property broker. We do not take possession or custody of freight. All shipments are contracted to licensed motor carriers.
          </p>
        </div>
      </div>
    </footer>
  )
}

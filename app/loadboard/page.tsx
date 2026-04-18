import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { LoadboardHero } from "@/components/loadboard/loadboard-hero"
import { LoadboardFilters } from "@/components/loadboard/loadboard-filters"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Loadboard | Garrison Logistics Inc",
  description: "Browse available freight loads across the USA. Find FTL, LTL, reefer, flatbed, and expedited freight opportunities.",
}

export default function LoadboardPage() {
  return (
    <main>
      <Navigation />
      <LoadboardHero />
      <LoadboardFilters />
      <Footer />
    </main>
  )
}

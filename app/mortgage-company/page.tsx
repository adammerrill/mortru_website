import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import SearchDemo from '../components/SearchDemo'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'

/**
 * Mortgage Company landing page component.
 * Displays all sections tailored for mortgage companies.
 */
export default function MortgageCompanyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero
        title="Empower Your Mortgage Decisions"
        description="MorTru provides mortgage companies with accurate, real-time property data and market insights to streamline lending processes and reduce risk."
        ctaText="Start Your Free Trial"
      />
      <Features persona="mortgage-company" />
      <Testimonials persona="mortgage-company" />
      <HowItWorks persona="mortgage-company" />
      <SearchDemo />
      <FAQ persona="mortgage-company" />
      <CTA
        title="Ready to Transform Your Mortgage Business?"
        description="Join leading mortgage companies who trust MorTru for accurate property valuations and market insights."
        ctaText="Schedule a Demo"
      />
    </div>
  )
}


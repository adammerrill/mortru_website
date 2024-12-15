import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import SearchDemo from '../components/SearchDemo'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'

/**
 * Homeowner landing page component.
 * Displays all sections tailored for homeowners.
 */
export default function HomeownerLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero
        title="Find Your Dream Home's True Value"
        description="MorTru provides homeowners with accurate, transparent, and comprehensive real estate data to make informed decisions about buying or selling."
        ctaText="Start Your Home Search"
      />
      <Features persona="homeowner" />
      <Testimonials persona="homeowner" />
      <HowItWorks persona="homeowner" />
      <SearchDemo />
      <FAQ persona="homeowner" />
      <CTA
        title="Ready to Discover Your Home's True Value?"
        description="Join thousands of satisfied homeowners who have found their ideal homes using MorTru."
        ctaText="Get Your Home Valuation"
      />
    </div>
  )
}


import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import HowItWorks from '../components/HowItWorks'
import SearchDemo from '../components/SearchDemo'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'

/**
 * Real Estate Agent landing page component.
 * Displays all sections tailored for real estate agents.
 */
export default function RealEstateAgentLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero
        title="Elevate Your Real Estate Business"
        description="MorTru equips real estate agents with powerful tools and insights to provide unparalleled service to their clients and close more deals."
        ctaText="Boost Your Listings"
      />
      <Features persona="real-estate-agent" />
      <Testimonials persona="real-estate-agent" />
      <HowItWorks persona="real-estate-agent" />
      <SearchDemo />
      <FAQ persona="real-estate-agent" />
      <CTA
        title="Ready to Become a Top-Performing Agent?"
        description="Join successful real estate agents who use MorTru to stay ahead of the market and exceed client expectations."
        ctaText="Start Your Free Trial"
      />
    </div>
  )
}


import { Home, TrendingUp, Shield, Users, BarChartIcon as ChartBar, Clock } from 'lucide-react'

interface FeaturesProps {
  persona: 'homeowner' | 'mortgage-company' | 'real-estate-agent';
}

const featuresByPersona = {
  homeowner: [
    {
      icon: Home,
      title: 'Comprehensive Listings',
      description: 'Access the most up-to-date and detailed property listings in your area.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Get real-time market trends and predictive analytics to make informed decisions.'
    },
    {
      icon: Shield,
      title: 'Verified Information',
      description: 'Trust in our rigorous verification process for accurate property details.'
    }
  ],
  'mortgage-company': [
    {
      icon: ChartBar,
      title: 'Risk Assessment Tools',
      description: 'Utilize advanced analytics for accurate property valuation and risk assessment.'
    },
    {
      icon: TrendingUp,
      title: 'Market Forecasts',
      description: 'Access predictive models to anticipate market trends and adjust lending strategies.'
    },
    {
      icon: Clock,
      title: 'Streamlined Processes',
      description: 'Automate property research and valuation to speed up loan approvals.'
    }
  ],
  'real-estate-agent': [
    {
      icon: Users,
      title: 'Client Matching',
      description: 'Use AI-powered tools to match clients with their perfect properties.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Analysis',
      description: 'Stay ahead with real-time market data and competitor insights.'
    },
    {
      icon: Home,
      title: 'Virtual Tours',
      description: 'Offer immersive virtual property tours to save time and impress clients.'
    }
  ]
}

/**
 * Features component displaying the key features of MorTru.
 * Renders a grid of feature cards with icons, titles, and descriptions.
 *
 * @param {FeaturesProps} props - The props for the Features component
 * @returns {JSX.Element} The rendered Features component
 */
export default function Features({ persona }: FeaturesProps) {
  const features = featuresByPersona[persona]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" aria-labelledby="features-title">
      <h2 id="features-title" className="text-3xl font-bold text-center text-foreground mb-12">Why Choose MorTru?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 rounded-lg shadow-lg bg-card transition-transform duration-300 hover:scale-105">
            <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


import { Search, BarChart, Home, Calculator, FileCheck, Users } from 'lucide-react'

interface HowItWorksProps {
  persona: 'homeowner' | 'mortgage-company' | 'real-estate-agent';
}

const stepsByPersona = {
  homeowner: [
    {
      icon: Search,
      title: 'Search Properties',
      description: 'Use our advanced filters to find properties that match your criteria.'
    },
    {
      icon: BarChart,
      title: 'Analyze Market Data',
      description: 'Review comprehensive market insights and trends for informed decision-making.'
    },
    {
      icon: Home,
      title: 'Make Your Move',
      description: 'Connect with agents or sellers to take the next step in your real estate journey.'
    }
  ],
  'mortgage-company': [
    {
      icon: Calculator,
      title: 'Assess Property Value',
      description: 'Utilize our advanced valuation tools for accurate property assessments.'
    },
    {
      icon: BarChart,
      title: 'Analyze Risk',
      description: 'Use our comprehensive risk assessment models to evaluate loan applications.'
    },
    {
      icon: FileCheck,
      title: 'Streamline Approvals',
      description: 'Expedite the loan approval process with our automated verification systems.'
    }
  ],
  'real-estate-agent': [
    {
      icon: Search,
      title: 'Find Perfect Matches',
      description: 'Use our AI-powered tools to match clients with their ideal properties.'
    },
    {
      icon: BarChart,
      title: 'Analyze Market Trends',
      description: 'Stay ahead of the competition with real-time market data and insights.'
    },
    {
      icon: Users,
      title: 'Manage Client Relationships',
      description: 'Use our CRM tools to nurture leads and maintain strong client relationships.'
    }
  ]
}

/**
 * HowItWorks component explaining the process of using MorTru.
 * Displays a series of steps tailored to each persona.
 *
 * @param {HowItWorksProps} props - The props for the HowItWorks component
 * @returns {JSX.Element} The rendered HowItWorks component
 */
export default function HowItWorks({ persona }: HowItWorksProps) {
  const steps = stepsByPersona[persona]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" aria-labelledby="how-it-works-title">
      <h2 id="how-it-works-title" className="text-3xl font-bold text-center text-foreground mb-12">How MorTru Works</h2>
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-12 last:mb-0">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


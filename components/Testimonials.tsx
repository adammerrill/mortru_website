import Image from 'next/image'

interface TestimonialsProps {
  persona: 'homeowner' | 'mortgage-company' | 'real-estate-agent';
}

const testimonialsByPersona = {
  homeowner: [
    {
      quote: "MorTru helped me find my dream home with its accurate and detailed listings.",
      author: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      quote: "The market insights provided by MorTru gave me confidence in my home purchase decision.",
      author: "Michael Chen",
      role: "First-time Buyer"
    },
    {
      quote: "I sold my house faster and for a better price thanks to MorTru's valuation tools.",
      author: "Emily Rodriguez",
      role: "Home Seller"
    }
  ],
  'mortgage-company': [
    {
      quote: "MorTru's risk assessment tools have significantly improved our loan approval process.",
      author: "David Thompson",
      role: "Mortgage Underwriter"
    },
    {
      quote: "The market forecasts provided by MorTru help us stay ahead of market trends.",
      author: "Lisa Patel",
      role: "Mortgage Analyst"
    },
    {
      quote: "Our loan officers love the streamlined property research capabilities of MorTru.",
      author: "Robert Johnson",
      role: "Mortgage Company CEO"
    }
  ],
  'real-estate-agent': [
    {
      quote: "MorTru's client matching feature has helped me close more deals than ever before.",
      author: "Jessica Lee",
      role: "Real Estate Agent"
    },
    {
      quote: "The competitive analysis tools give me a significant edge in my market.",
      author: "Mark Williams",
      role: "Senior Real Estate Agent"
    },
    {
      quote: "Virtual tours powered by MorTru have revolutionized how I showcase properties.",
      author: "Sophia Garcia",
      role: "Luxury Real Estate Specialist"
    }
  ]
}

/**
 * Testimonials component displaying user feedback.
 * Renders a grid of testimonial cards with quotes, author names, and roles.
 *
 * @param {TestimonialsProps} props - The props for the Testimonials component
 * @returns {JSX.Element} The rendered Testimonials component
 */
export default function Testimonials({ persona }: TestimonialsProps) {
  const testimonials = testimonialsByPersona[persona]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="text-3xl font-bold text-center text-foreground mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-md">
            <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <Image
                src={`/placeholder.svg?height=40&width=40`}
                alt={`${testimonial.author}'s avatar`}
                width={40}
                height={40}
                className="rounded-full mr-3"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


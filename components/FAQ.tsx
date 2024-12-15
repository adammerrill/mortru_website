'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQProps {
  persona: 'homeowner' | 'mortgage-company' | 'real-estate-agent';
}

const faqsByPersona = {
  homeowner: [
    {
      question: "How accurate is MorTru's property data?",
      answer: "MorTru's property data is highly accurate, updated in real-time, and verified through multiple sources. We use advanced algorithms and human oversight to ensure the highest level of accuracy in the industry."
    },
    {
      question: "Can I use MorTru on my mobile device?",
      answer: "Yes, MorTru is fully responsive and optimized for mobile devices. You can access all features and functionalities on your smartphone or tablet, making it easy to search for properties on the go."
    },
    {
      question: "How often is the market data updated?",
      answer: "Our market data is updated in real-time. As soon as new information becomes available, it's processed and integrated into our system, ensuring you always have access to the most current market trends and property details."
    },
    {
      question: "Can MorTru help me estimate the value of my current home?",
      answer: "MorTru provides advanced valuation tools that take into account recent sales, market trends, and property characteristics to give you an accurate estimate of your home's current value."
    },
    {
      question: "Is MorTru available internationally?",
      answer: "Currently, MorTru is available in select markets, with plans for international expansion. We're continuously working on adding new regions to our coverage. Check our website for the most up-to-date information on available locations."
    }
  ],
  'mortgage-company': [
    {
      question: "How does MorTru's risk assessment tool work?",
      answer: "MorTru's risk assessment tool uses advanced machine learning algorithms to analyze property data, market trends, and economic indicators. It provides a comprehensive risk score for each property, helping you make informed lending decisions."
    },
    {
      question: "Can MorTru integrate with our existing loan origination system?",
      answer: "Yes, MorTru is designed to integrate seamlessly with most popular loan origination systems. Our team can work with you to ensure a smooth integration process, minimizing disruption to your existing workflows."
    },
    {
      question: "How often is the market forecast data updated?",
      answer: "Our market forecast data is updated daily, incorporating the latest economic indicators, property transactions, and market trends. This ensures you always have access to the most current and accurate predictions."
    },
    {
      question: "Does MorTru offer custom reporting features?",
      answer: "MorTru provides a range of customizable reporting options. You can create tailored reports that focus on the specific metrics and insights most relevant to your business needs."
    },
    {
      question: "What kind of support does MorTru offer for mortgage companies?",
      answer: "MorTru offers dedicated support for mortgage companies, including personalized onboarding, ongoing training sessions, and a specialized support team familiar with the unique needs of the mortgage industry."
    }
  ],
  'real-estate-agent': [
    {
      question: "How can MorTru help me generate more leads?",
      answer: "MorTru offers advanced lead generation tools that use AI to identify potential buyers and sellers in your area. Our platform also provides insights on the best times and methods to reach out to these leads, increasing your conversion rates."
    },
    {
      question: "Can I create custom property reports for my clients?",
      answer: "Yes, MorTru allows you to create professional, branded property reports for your clients. These reports can include detailed property information, market comparisons, and trend analyses, helping you provide more value to your clients."
    },
    {
      question: "How does MorTru's virtual tour feature work?",
      answer: "MorTru's virtual tour feature allows you to create immersive 3D tours of properties. You can easily upload photos or 360-degree videos, and our system will generate a interactive virtual tour that you can share with clients or embed on your website."
    },
    {
      question: "Can MorTru help me manage my client relationships?",
      answer: "MorTru includes a built-in CRM system designed specifically for real estate agents. It helps you track client interactions, set reminders for follow-ups, and even suggests personalized property recommendations for each client."
    },
    {
      question: "How often is the competitive analysis data updated?",
      answer: "Our competitive analysis data is updated in real-time. This includes new listings, price changes, and sales in your area. You'll always have the most current information to help you and your clients make informed decisions."
    }
  ]
}

/**
 * FAQ component displaying frequently asked questions and answers.
 * Renders an accordion-style list of questions and answers.
 *
 * @param {FAQProps} props - The props for the FAQ component
 * @returns {JSX.Element} The rendered FAQ component
 */
export default function FAQ({ persona }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqs = faqsByPersona[persona]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-muted hover:bg-muted/90 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-lg text-foreground">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary" />
              )}
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="mt-2 p-4 bg-card rounded-lg"
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

